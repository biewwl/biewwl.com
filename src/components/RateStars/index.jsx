import { Icon } from "@iconify/react";
import lS from "manager-local-storage";
import { useEffect, useState } from "react";
import config from "../../config.json";
import "./styles/RateStars.css";

function RateStars({ name, className = "" }) {
  const { rate_key, rate_keys_list } = config.localStorage;

  const [currentRate, setCurrentRate] = useState(0);

  const setRate = (rate) => {
    const currentRateList = lS.get(rate_keys_list) ?? [];
    const keyRateProject = `${rate_key}${name}`;

    const existInList = currentRateList.some(
      (projectName) => projectName === name
    );
    let newRateList = currentRateList;

    if (rate === currentRate) {
      lS.remove(keyRateProject);
      newRateList = currentRateList.filter(
        (projectName) => projectName !== name
      );
      setCurrentRate(0);
    } else {
      lS.set(keyRateProject, rate);
      if (!existInList) {
        newRateList = [...currentRateList, name];
      }
      setCurrentRate(rate);
    }
    if (newRateList.length === 0) {
      lS.remove(rate_keys_list);
    } else {
      lS.set(rate_keys_list, newRateList);
    }
  };

  useEffect(() => {
    const getCurrentRate = () => {
      const rate = lS.get(`${rate_key}${name}`) ?? 0;
      setCurrentRate(rate);
    };
    getCurrentRate();
  }, [name, rate_key]);

  const getStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i += 1) {
      if (i <= currentRate) {
        stars.push(
          <Icon
            icon="ph:star-fill"
            className="rate-star"
            onClick={() => setRate(i)}
            key={i}
          />
        );
      } else {
        stars.push(
          <Icon
            icon="ph:star-thin"
            className="rate-star"
            onClick={() => setRate(i)}
            key={i}
          />
        );
      }
    }
    return stars;
  };

  return <div className={`rate-stars${className}`}>{getStars()}</div>;
}

export default RateStars;
