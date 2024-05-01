export interface Account {
  id: string;
  available: number;
  current: number;
  currencyCode: string;
  lastFour: string;
  limit: number | null;
  name: string;
  officialName: string;
  subtype: string;
  type: string;
}
