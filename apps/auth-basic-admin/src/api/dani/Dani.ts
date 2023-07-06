import { JsonValue } from "type-fest";

export type Dani = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  username: string;
  roles: JsonValue;
};
