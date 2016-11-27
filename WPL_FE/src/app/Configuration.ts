import {Injectable} from '@angular/core';

@Injectable()
export class Configuration {
  public ServerUrl: string = "http://localhost:8080";
  public UsersAPIUrl: string = this.ServerUrl + "/api/users"
}
