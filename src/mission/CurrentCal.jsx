import { useState } from "react";

const CurrentInput = ({ currency, value, onChange }) => {
  return (
    <div>
      <span>{currency}:</span>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(currency, e.target.value)}
      />
    </div>
  );
};

const CurrnetCal = () => {
  const [current, setCurrent] = useState({
    krw: 0,
    usd: 0,
  });

  const onChange = (currency, value) => {
    if (currency === "krw") {
      setCurrent({
        krw: value,
        usd: value / 1300,
      });
    } else {
      setCurrent({
        krw: value * 1300,
        usd: value,
      });
    }
  };

  return (
    <div>
      <h1>환율 변환기(KRW - USD)</h1>
      <div>
        <CurrentInput
          currency={"krw"}
          value={current.krw}
          onChange={onChange}
        />
      </div>
      <div>
        <CurrentInput
          currency={"usd"}
          value={current.usd}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default CurrnetCal;
