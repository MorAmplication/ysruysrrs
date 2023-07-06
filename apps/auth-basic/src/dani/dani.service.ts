import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DaniServiceBase } from "./base/dani.service.base";

@Injectable()
export class DaniService extends DaniServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
