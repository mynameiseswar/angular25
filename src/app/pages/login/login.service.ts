import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


export interface UserInformation {
  userName: string | undefined;
  password: string | undefined;
}

@Injectable({
  providedIn: "root",
})
export class LoginService {
  constructor(private httpClient: HttpClient) {}

  userLogin(userObject: UserInformation): any {
    return this.httpClient.post(
      "https://fakestoreapi.com/auth/login",
      {
        username: userObject.userName,
        password: userObject.password,
      }
    );
  }
}
