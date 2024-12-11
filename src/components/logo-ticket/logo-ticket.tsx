import { LOGOS } from "../../utils/constants";
import { LogoTicketProps } from "./logo-ticket.props";
import styles from "./logo-ticket.module.css";

export const LogoTicket = ({ carrier }: LogoTicketProps): JSX.Element => {
  return (
    <img
      className={styles.logo}
      src={LOGOS[carrier].SRC}
      alt={LOGOS[carrier].ALT}
    />
  );
};
