import { Injectable, UnauthorizedException } from "@nestjs/common";
import { Credentials } from "./Credentials";
import { PasswordService } from "./password.service";
import { TokenService } from "./token.service";
import { DaniInfo } from "./DaniInfo";
import { DaniService } from "../dani/dani.service";

@Injectable()
export class AuthService {
  constructor(
    private readonly passwordService: PasswordService,
    private readonly tokenService: TokenService,
    private readonly daniService: DaniService
  ) {}

  async validateUser(
    username: string,
    password: string
  ): Promise<DaniInfo | null> {
    const user = await this.daniService.findOne({
      where: { username },
    });
    if (user && (await this.passwordService.compare(password, user.password))) {
      const { id, roles } = user;
      const roleList = roles as string[];
      return { id, username, roles: roleList };
    }
    return null;
  }
  async login(credentials: Credentials): Promise<DaniInfo> {
    const { username, password } = credentials;
    const user = await this.validateUser(
      credentials.username,
      credentials.password
    );
    if (!user) {
      throw new UnauthorizedException("The passed credentials are incorrect");
    }
    const accessToken = await this.tokenService.createToken({
      id: user.id,
      username,
      password,
    });
    return {
      accessToken,
      ...user,
    };
  }
}
