import styles from "./ticket.module.css";
import { TicketProps } from "./ticket.props";
import { declensionWord } from "../../helpers/declension-word";
import {
  DECLENSION_STOPS,
  ROUTE_PLANE_IMAGE,
  WITHOUT_STOPS,
  CURRENCIES,
} from "../../utils/constants";
import { LogoTicket, Button } from "..";
import { formatDate } from "../../helpers/format-date";

export const Ticket = ({ ticket, currency }: TicketProps): JSX.Element => {
  const {
    carrier,
    price,
    departure_time,
    departure_date,
    arrival_time,
    arrival_date,
    stops,
    origin,
    origin_name,
    destination,
    destination_name,
  } = ticket;

  return (
    <div className={styles.ticket}>
      <div className={styles.left}>
        <LogoTicket carrier={carrier} />
        <Button appearance="primary">
          Купить <br /> за {Math.round(price / CURRENCIES[currency].RATE)}{" "}
          {CURRENCIES[currency].SIGN}
        </Button>
      </div>
      <hr className={styles.vertical} />
      <div className={styles.right}>
        <div className={styles.times}>
          <span className={styles.time}>{departure_time}</span>
          <div className={styles.stops}>
            <span>
              {stops
                ? stops + " " + declensionWord(stops, DECLENSION_STOPS)
                : WITHOUT_STOPS}
            </span>
            <img
              className={styles.routePlaneImage}
              src={ROUTE_PLANE_IMAGE.SRC}
              alt={ROUTE_PLANE_IMAGE.ALT}
            />
          </div>
          <span className={styles.time}>{arrival_time}</span>
        </div>
        <div className={styles.route}>
          <span>
            {origin}, {origin_name}
          </span>
          <span>
            {destination_name}, {destination}
          </span>
        </div>
        <div className={styles.date}>
          <span>{formatDate(departure_date)}</span>
          <span>{formatDate(arrival_date)}</span>
        </div>
      </div>
    </div>
  );
};
