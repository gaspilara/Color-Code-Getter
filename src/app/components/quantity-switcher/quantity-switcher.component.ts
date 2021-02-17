import { Component, OnInit } from '@angular/core';
import { Button } from '../../models/button.model';

@Component({
  selector: 'quantity-switcher',
  templateUrl: './quantity-switcher.component.html',
  styleUrls: ['./quantity-switcher.component.sass']
})
export class QuantitySwitcherComponent implements OnInit {

  buttons: Button[];

  constructor() {
    this.buttons = [];
  }

  ngOnInit(): void {
    for (let i = 1; i <= 3; i++) {
      this.buttons.push({
        'id': i,
        'quantity': i*2,
      });
    }
  }

}



