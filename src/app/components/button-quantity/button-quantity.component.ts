import { Component, Input, OnInit } from '@angular/core';
import { QuantityService } from '../../services/quantity.service'
import { Button } from '../../models/button.model'

@Component({
  selector: 'button-quantity-component',
  templateUrl: './button-quantity.component.html',
  styleUrls: ['./button-quantity.component.sass']
})
export class ButtonQuantityComponent implements OnInit {

  @Input() button: Button = new Button();

  constructor(private quantityService: QuantityService) {
  }

  ngOnInit(): void {
    this.button.quantity = this.button.quantity === 0 ? 2 : this.button.quantity;
  }

  onQuantityChange(): void {
    this.quantityService.quantity.subscribe(data => {
      this.quantityService.createComponent(this.button.quantity);
    })
  }

}
