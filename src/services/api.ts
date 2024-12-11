import {
  DATA_URL,
  ERROR_FETCH_JSON,
  ERROR_FETCH_NOT_OK,
} from "../utils/constants";
import { TicketsI } from "../interfaces";

export const getTickets = (): Promise<TicketsI> =>
  fetch(DATA_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error(ERROR_FETCH_NOT_OK);
      }
      return response.json();
    })
    .catch((error) => {
      console.error(ERROR_FETCH_JSON, error);
      throw error;
    });
