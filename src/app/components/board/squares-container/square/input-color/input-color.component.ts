import { Component, Input, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color.model';

@Component({
  selector: 'input-color-component',
  templateUrl: './input-color.component.html',
  styleUrls: ['./input-color.component.sass']
})
export class InputColorComponent implements OnInit {
  
  showSelector: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  openColorSelector() {
    this.showSelector = !this.showSelector;
  }

}
