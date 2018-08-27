import {Injectable} from '@angular/core';
import {BackendService} from './backend.service';
import {User} from '../model/user';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: User;

  public userSub: Subject<any> = new Subject<any>();

  sleep(delay) {
    const start = new Date().getTime();
    while (new Date().getTime() < start + delay) {

    }
  }

  constructor(private backendService: BackendService) {
    console.log('In constructor user service');

  }

  initUser(): Observable<any> {
    return Observable.create(observer => {
      this.sleep(3000);
      const user = new User(1, 'Thai');
      observer.next(user);
    });
  }
}
