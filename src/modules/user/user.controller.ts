import { Controller, Get } from "@nestjs/common";
import { UserService } from "./user.service";
import { I18n, I18nContext } from "nestjs-i18n";


@Controller('users')
export class UserController{
constructor(private userService: UserService){}
@Get()
list(){
return this.userService.list()
}
@Get('test')
test(@I18n() I18n: I18nContext){
    return I18n.t('user.response.created')
}
@Get('test-update')
testupdate(@I18n() I18n: I18nContext){
    return{
        message: I18n.t('user.response.created')
    }
}
}