export interface Account {
  account_id: string;
  balances: {
    available: number;
    current: number;
    iso_currency_code: "USD";
    limit: number | null;
  };
  name: string;
  official_name: string;
  subtype: string;
  type: string;
}

export interface Category {
  id: string;
  name: string;
}

export interface Transaction {
  account_id: string;
  amount: number;
  iso_currency_code: "USD";
  category_id: string;
  date: string;
  datetime: string;
  authorized_date: string;
  authorized_datetime: string;
  name: string;
  merchant_name: string;
  merchant_entity_id: string;
  payment_channel: string;
  pending: boolean;
  pending_transaction_id: string | null;
  logo_url: string;
  website: string;
}
