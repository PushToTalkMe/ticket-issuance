import { CurrenciesType, LogosType } from "../interfaces";

export const DATA_URL = "/data/tickets.json";
export const ERROR_FETCH_NOT_OK = "Статус-код не OK";
export const ERROR_FETCH_JSON = "Ошибка при запросе JSON-файла:";

export enum StopsFilter {
  NoStops = 0,
  OneStop = 1,
  TwoStops = 2,
  ThreeStops = 3,
}
export const COUNT_STOPS = [
  { TITLE: "Без пересадок", VALUE: StopsFilter.NoStops },
  { TITLE: "1 пересадка", VALUE: StopsFilter.OneStop },
  { TITLE: "2 пересадки", VALUE: StopsFilter.TwoStops },
  { TITLE: "3 пересадки", VALUE: StopsFilter.ThreeStops },
];

export const DECLENSION_STOPS = ["ПЕРЕСАДКА", "ПЕРЕСАДКИ", "ПЕРЕСАДОК"];
export const WITHOUT_STOPS = "БЕЗ ПЕРЕСАДОК";

export const ROUTE_PLANE_IMAGE = {
  SRC: "/images/route-plane.png",
  ALT: "Маршрут самолёта",
};

export const LOGO = {
  SRC: "/images/logo.png",
  ALT: "Логотип сайта",
};

export const CURRENCIES: CurrenciesType = {
  RUB: { RATE: 1, SIGN: "₽" },
  USD: { RATE: 103, SIGN: "$" },
  EUR: { RATE: 108, SIGN: "€" },
};

export const LOGOS: LogosType = {
  TK: {
    SRC: "/images/turkish-airlines-logo.png",
    ALT: "Логотип Turkish Airlines",
  },
  S7: { SRC: "/images/s7-airlines-logo.png", ALT: "Логотип S7 Airlines" },
  SU: { SRC: "/images/su-airlines-logo.jpg", ALT: "Логотип SU Airlines" },
  BA: {
    SRC: "/images/british-airlines-logo.png",
    ALT: "Логотип British Airlines",
  },
};
