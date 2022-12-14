import { forwardRef, Module } from "@nestjs/common";
import { AuthModule } from "src/auth/auth.module";
import { UserModule } from "src/user/user.module";
import { DatabaseModule } from "../database/database.module";
import { TokenController } from "./token.controller";
import { TokenProviders } from "./token.providers";
import { TokenService } from "./token.service";
@Module({
  imports: [
    DatabaseModule,
    UserModule,
    forwardRef(()=>AuthModule) ],
  controllers: [TokenController],
  providers: [...TokenProviders, TokenService],
  exports:[TokenService]
})
export class TokenModule {}
