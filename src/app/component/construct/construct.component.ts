import {Component, OnInit} from '@angular/core';
import {BackendService} from '../../service/backend.service';

@Component({
  selector: 'app-construct',
  templateUrl: './construct.component.html',
  styleUrls: ['./construct.component.css']
})
export class ConstructComponent implements OnInit {

  constructor(private backendService: BackendService) {
    console.log('On constructor construct component');
  }

  ngOnInit() {
    console.log('On nginit construct component');
  }

}
