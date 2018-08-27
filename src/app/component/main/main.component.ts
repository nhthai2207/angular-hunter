import {Component, OnInit} from '@angular/core';
import {UserService} from '../../service/user.service';
import {BackendService} from '../../service/backend.service';
import {User} from '../../model/user';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  private user: User;
  constructor(private backendService: BackendService,
              private userService: UserService) {
    console.log('On constructor main component');
  }

  ngOnInit() {
    console.log('On init main component');
    this.userService.initUser().subscribe(res => {
      this.user = Object.assign({}, res);
      console.log('On finish loading');
    });
  }
}
