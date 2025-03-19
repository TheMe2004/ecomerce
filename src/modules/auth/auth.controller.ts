import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { UserLoginDto } from "./dto/login-user.dto";
import { UserRegisterDto } from "./dto/register-user.dto";

@Controller('auth')
export class AuthController{
constructor(private AuthService: AuthService){}
@Post('/login')
login(@Body() body: UserLoginDto){
return this.AuthService.login(body)
}
@Post('register')
register(@Body() body: UserRegisterDto){
return this.AuthService.register(body)
}

}