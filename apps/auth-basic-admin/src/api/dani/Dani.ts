import { JsonValue } from "type-fest";

export type Dani = {
  createdAt: Date;
  id: string;
  updatedAt: Date;
  username: string;
  roles: JsonValue;
};
