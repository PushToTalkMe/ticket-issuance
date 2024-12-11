import { useEffect, useState } from "react";
import styles from "./app.module.css";
import { getTickets } from "./services/api";
import { Ticket, Filter } from "./components";
import { CurrencyType, TicketI } from "./interfaces";
import { LOGO, StopsFilter } from "./utils/constants";
import { nanoid } from "nanoid";

const defaultCurrency: CurrencyType = "RUB";

export function App() {
  const [tickets, setTickets] = useState<TicketI[]>([]);
  const [filteredTickets, setFilteredTickets] = useState<TicketI[]>([]);
  const [currency, setCurrency] = useState<CurrencyType>(defaultCurrency);
  const [selectedStops, setSelectedStops] = useState<StopsFilter[]>([]);

  const applyFilters = (tickets: TicketI[]) => {
    if (selectedStops.length === 0) {
      return tickets;
    }
    return tickets.filter((ticket) => selectedStops.includes(ticket.stops));
  };

  useEffect(() => {
    getTickets().then((data) => {
      const sortedTickets = data.tickets.sort((a, b) => a.price - b.price);
      setTickets(sortedTickets);
      setFilteredTickets(applyFilters(sortedTickets));
    });
  }, []);

  useEffect(() => {
    setFilteredTickets(applyFilters(tickets));
  }, [selectedStops]);

  return (
    <div className={styles.container}>
      <img src={LOGO.SRC} alt={LOGO.ALT} className={styles.logo} />
      <div className={styles.box}>
        <Filter
          currency={currency}
          setCurrency={setCurrency}
          selectedStops={selectedStops}
          setSelectedStops={setSelectedStops}
        />
        <div className={styles.tickets}>
          {filteredTickets.map((ticket) => (
            <Ticket key={nanoid(24)} ticket={ticket} currency={currency} />
          ))}
        </div>
      </div>
    </div>
  );
}
