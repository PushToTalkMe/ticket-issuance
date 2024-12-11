import { StopsFilter } from "../../utils/constants";

export interface CheckboxProps {
  title: string;
  value: StopsFilter;
  checked: boolean;
  onChange: () => void;
  setSelectedStops: React.Dispatch<React.SetStateAction<StopsFilter[]>>;
}
