import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../model/user';

@Component({
  selector: 'app-construct',
  templateUrl: './construct.component.html',
  styleUrls: ['./construct.component.css']
})
export class ConstructComponent implements OnInit {

  @Input() user: User;
  constructor() {
    console.log('On constructor construct component');
  }

  ngOnInit() {
    console.log('On nginit construct component');
  }

}
