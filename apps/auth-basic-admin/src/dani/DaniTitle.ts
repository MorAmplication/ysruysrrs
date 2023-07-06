import { Dani as TDani } from "../api/dani/Dani";

export const DANI_TITLE_FIELD = "id";

export const DaniTitle = (record: TDani): string => {
  return record.id || String(record.id);
};
