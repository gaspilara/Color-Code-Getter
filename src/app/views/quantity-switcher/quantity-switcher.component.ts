import { Component, OnInit } from '@angular/core';
import { QuantityService } from 'src/app/services/quantity.service';
import { Button } from '../../models/button.model';

@Component({
  selector: 'quantity-switcher',
  templateUrl: './quantity-switcher.component.html',
  styleUrls: ['./quantity-switcher.component.sass']
})
export class QuantitySwitcherComponent implements OnInit {

  buttons: Button[] = [];
  // buttonsQuantity: number = 0;

  view: number = 0;
  view_1: boolean = false;
  view_2: boolean = false;
  view_4: boolean = false;
  view_6: boolean = false;
  
  constructor(private quantityService: QuantityService) {
  }
  
  ngOnInit(): void {
    this.setInitialState();
    this.view_1 = true;
    // this.setButtonsQuantity(4);
    // for (let i = 1; i <= this.buttonsQuantity; i++) {
    //   this.buttons.push({
    //     'id': i,
    //     'quantity': i*2,
    //   });
    // }
  }

  setInitialState() {
    this.view_1 = false;
    this.view_2 = false;
    this.view_4 = false;
    this.view_6 = false;
  }

  // setButtonsQuantity(bQ: number) {
  //   this.buttonsQuantity = bQ;
  // }

  switchView() {
    if (this.view_6) { this.setInitialState(); this.view_1 = true; this.view = 1 }
    if (this.view_4) { this.setInitialState(); this.view_6 = true; this.view = 6 }
    if (this.view_2) { this.setInitialState(); this.view_4 = true; this.view = 4 }
    if (this.view_1) { this.setInitialState(); this.view_2 = true; this.view = 2 }
    this.quantityService.quantity.subscribe( r => { this.quantityService.createComponent(this.view); })
  }

}



