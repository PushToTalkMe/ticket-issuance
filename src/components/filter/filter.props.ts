import { StopsFilter } from "../../utils/constants";
import { CurrencyType } from "../../interfaces";

export interface FilterProps {
  currency: CurrencyType;
  setCurrency: React.Dispatch<React.SetStateAction<CurrencyType>>;
  selectedStops: StopsFilter[];
  setSelectedStops: React.Dispatch<React.SetStateAction<StopsFilter[]>>;
}
