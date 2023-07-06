import { Module } from "@nestjs/common";
import { DaniModuleBase } from "./base/dani.module.base";
import { DaniService } from "./dani.service";
import { DaniController } from "./dani.controller";
import { DaniResolver } from "./dani.resolver";

@Module({
  imports: [DaniModuleBase],
  controllers: [DaniController],
  providers: [DaniService, DaniResolver],
  exports: [DaniService],
})
export class DaniModule {}
