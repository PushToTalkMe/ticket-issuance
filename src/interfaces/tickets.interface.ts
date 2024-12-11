export interface TicketsI {
  tickets: TicketI[];
}

export type CarrierType = "TK" | "SU" | "S7" | "BA";

export interface TicketI {
  origin: string;
  origin_name: string;
  destination: string;
  destination_name: string;
  departure_date: string;
  departure_time: string;
  arrival_date: string;
  arrival_time: string;
  carrier: CarrierType;
  stops: number;
  price: number;
}
