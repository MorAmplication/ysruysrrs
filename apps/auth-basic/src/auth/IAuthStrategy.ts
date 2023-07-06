import { DaniInfo } from "./DaniInfo";

export interface IAuthStrategy {
  validate: (...any: any) => Promise<DaniInfo>;
}
