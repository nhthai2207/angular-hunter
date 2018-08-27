import {Injectable} from '@angular/core';
import {User} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private user: User;
  sleep(delay) {
    const start = new Date().getTime();
    while (new Date().getTime() < start + delay) {

    }
  }

  constructor() {
    console.log('On constructor backend service');
    this.sleep(3000);
    this.user = new User(1, 'Thai');
  }

  getUser() {
    return this.user;
  }
}
