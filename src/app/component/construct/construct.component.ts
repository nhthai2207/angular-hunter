import {Component, OnInit} from '@angular/core';
import {BackendService} from '../../service/backend.service';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-construct',
  templateUrl: './construct.component.html',
  styleUrls: ['./construct.component.css']
})
export class ConstructComponent implements OnInit {

  constructor(private backendService: BackendService,
              private userService: UserService) {
    console.log('On constructor construct component');
  }

  ngOnInit() {
    console.log('On nginit construct component');
  }

}
