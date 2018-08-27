import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService {


  constructor() {
    console.log('On constructor backend service');
  }

}
