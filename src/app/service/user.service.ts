import { Injectable } from '@angular/core';
import {BackendService} from './backend.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private backendService: BackendService) {
    console.log('In constructor user service');
  }
}
