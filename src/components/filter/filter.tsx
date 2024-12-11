import { COUNT_STOPS, CURRENCIES, StopsFilter } from "../../utils/constants";
import { Checkbox, Button } from "../";
import { CurrencyType } from "../../interfaces";
import { FilterProps } from "./filter.props";
import styles from "./filter.module.css";
import { nanoid } from "nanoid";

const currenciesKeys = Object.keys(CURRENCIES) as CurrencyType[];

export const Filter = ({
  currency,
  setCurrency,
  selectedStops,
  setSelectedStops,
}: FilterProps) => {
  const handleCheckboxChange = (value: StopsFilter) => {
    setSelectedStops((prevSelectedStops) => {
      if (prevSelectedStops.includes(value)) {
        const newSelectedStops = prevSelectedStops.filter(
          (stop) => stop !== value
        );
        return newSelectedStops;
      } else {
        const newSelectedStops = [...prevSelectedStops, value];
        return newSelectedStops;
      }
    });
  };

  return (
    <div className={styles.filter}>
      <div className={styles.block}>
        <span className={styles.title}>ВАЛЮТА</span>
        <div className={styles.tabs}>
          {currenciesKeys.map((CURRENCY) => (
            <Button
              key={nanoid(23)}
              appearance="secondary"
              tab={true}
              active={CURRENCY === currency}
              className={styles.tab}
              onClick={() => setCurrency(CURRENCY)}
            >
              {CURRENCY}
            </Button>
          ))}
        </div>
      </div>
      <div className={styles.block}>
        <span className={styles.title}>КОЛИЧЕСТВО ПЕРЕСАДОК</span>
        <div className={styles.checkboxs}>
          {COUNT_STOPS.map((COUNT_STOP) => (
            <Checkbox
              key={nanoid(22)}
              title={COUNT_STOP.TITLE}
              value={COUNT_STOP.VALUE}
              checked={selectedStops.includes(COUNT_STOP.VALUE)}
              onChange={() => handleCheckboxChange(COUNT_STOP.VALUE)}
              setSelectedStops={setSelectedStops}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
