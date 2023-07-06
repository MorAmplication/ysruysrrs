import { Dani as TDani } from "../api/dani/Dani";

export const DANI_TITLE_FIELD = "username";

export const DaniTitle = (record: TDani): string => {
  return record.username || String(record.id);
};
