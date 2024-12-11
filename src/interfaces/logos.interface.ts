import { CarrierType } from "./";

export interface LogoI {
  SRC: string;
  ALT: string;
}

export type LogosType = {
  [key in CarrierType]: LogoI;
};
