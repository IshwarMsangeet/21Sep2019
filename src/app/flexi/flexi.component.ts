import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FlexiService } from '../flexi.service';

@Component({
  selector: 'app-flexi',
  templateUrl: './flexi.component.html',
  styleUrls: ['./flexi.component.css']
})
export class FlexiComponent implements OnInit {

  flexiItems: any = [];
  formSelection = {};
  payLoad:any;

  constructor(private flexiService: FlexiService) { }

  ngOnInit() {
    this.flexiItems = this.flexiService.getFlexiConfig().items;
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.formSelection);
  }

}
