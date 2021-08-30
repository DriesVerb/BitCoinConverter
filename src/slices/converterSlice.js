import axios from "axios";

const converterSlice = (set) => ({
  loading: true,
  currencyCode: "USD",
  currencyValues: {
    code: "",
    rate: "",
    description: "",
    rate_float: null,
  },
  currencyHistory: [],
  currencyLabels: [],
  getCurrentRate: async (currency) => {
    const labelsArray = [];
    const historyArray = [];

    set(() => ({ loading: true }));

    const resCurrency = await axios.get(
      `https://api.coindesk.com/v1/bpi/currentprice/${currency}.json`
    );

    const resHistory = await axios.get(
      `https://api.coindesk.com/v1/bpi/historical/close.json?currency=${currency}`
    );

    set(() => ({ currencyCode: currency }));
    set(() => ({ currencyValues: resCurrency.data.bpi[currency] }));

    for (const [key, value] of Object.entries(resHistory.data.bpi)) {
      const noDecimal = Math.round(value);
      historyArray.push(noDecimal);
      labelsArray.push(key);
    }

    set(() => ({ currencyLabels: labelsArray }));
    set(() => ({ currencyHistory: historyArray }));

    set(() => ({ loading: false }));
  },
});

export default converterSlice;
