import { DaniWhereInput } from "./DaniWhereInput";
import { DaniOrderByInput } from "./DaniOrderByInput";

export type DaniFindManyArgs = {
  where?: DaniWhereInput;
  orderBy?: Array<DaniOrderByInput>;
  skip?: number;
  take?: number;
};
