import axios from "axios";

const convertorSlice = (set) => ({
    loading: true,
    currency: {
        code: "",
        rate: "",
        description: "",
        rate_float: null,
    },
    getCurrentRate: async ( currency )=>{
        set(() => ({ loading: true }));
        const res = await axios.get(`https://api.coindesk.com/v1/bpi/currentprice/${currency}.json`);
        set(()=> ({currency: res.data.bpi}))
        set(() => ({ loading: false }));
    }
})

export default convertorSlice;