import React, { useEffect } from "react";

// state
import { converterStore } from "../store";

// constants
import { CURRENCY_SYMBOLS } from "../constants";

// components
import { Spinner } from "./Spinner";
import Chart from "./Chart";

const Converter = () => {
  const getCurrentRate = converterStore((state) => state.getCurrentRate);
  const loading = converterStore((state) => state.loading);
  const currencyCode = converterStore((state) => state.currencyCode);
  const currencyValues = converterStore((state) => state.currencyValues);
  const currencyHistory = converterStore((state) => state.currencyHistory);
  const currencyLabels = converterStore((state) => state.currencyLabels);

  const { code, rate_float } = currencyValues;

  useEffect(() => {
    getCurrentRate(currencyCode);
  }, [getCurrentRate, currencyCode]);

  const changeDecimals = (input) => {
    const decimalFormat = input.toFixed(2);
    return new Intl.NumberFormat().format(decimalFormat);
  };

  return (
    <div className="chart">
      {loading ? (
        <Spinner />
      ) : (
        <div className="chart__container">
          <div className="chart__top">
            <div className="currency-info">
              <p className="currency-info__price">
                {CURRENCY_SYMBOLS[code]} {changeDecimals(rate_float)}
              </p>
              <select
                name="currencies"
                defaultValue={code}
                className="currency-info__select"
                onChange={(e) => {
                  getCurrentRate(e.target.value);
                }}
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="JPY">JPY</option>
                <option value="PLN">PLN</option>
                <option value="CNY">CNY</option>
              </select>
            </div>
          </div>
          <Chart
            currency={currencyCode}
            labels={currencyLabels}
            history={currencyHistory}
          />
        </div>
      )}
    </div>
  );
};

export default Converter;
