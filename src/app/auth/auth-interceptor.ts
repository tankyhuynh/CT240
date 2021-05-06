import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AutheService } from "./auth.service";


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AutheService){}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = this.authService.getToken();
    let token = authToken;
    if (!authToken) {
      token = "empty";
    }
    const authRequest = req.clone({
      headers: req.headers.set("token", token)
    });
    return next.handle(authRequest);
  }

}
