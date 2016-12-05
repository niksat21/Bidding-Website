import {Injectable} from '@angular/core';

@Injectable()
export class Configuration {
  public ServerUrl: string = "https://localhost:9000";
  public UsersAPIUrl: string = this.ServerUrl + "/api/users"
}
