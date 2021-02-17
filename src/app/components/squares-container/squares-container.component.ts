import { Component, OnInit } from '@angular/core';
// SERVICES
import { QuantityService } from '../../services/quantity.service';
// MODELS
import { Square } from '../../models/square.model'

@Component({
  selector: 'squares-container',
  templateUrl: './squares-container.component.html',
  styleUrls: ['./squares-container.component.sass']
})
export class SquaresContainerComponent implements OnInit {

  components: Array<Square>;
  quantity: number;

  constructor(private quantityService: QuantityService) {
    this.components = new Array<Square>();
    this.quantity = 0;
  }

  ngOnInit(): void {
    this.quantityService.createComponent(this.quantity);
    this.quantityService.quantity.subscribe(data => {
      this.quantity = data;
    })
    this.quantityService.components.subscribe(data => {
      this.components = data;
    })
  }

}
