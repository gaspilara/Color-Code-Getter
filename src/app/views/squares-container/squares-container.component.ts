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

  components: Square[] = [];
  quantity: number = 0;

  constructor(private quantityService: QuantityService) {
  }

  ngOnInit(): void {
    this.quantityService.createComponent(this.quantity);
    this.quantityService.quantity.subscribe(data => {
      this.quantity = data;
      console.log(this.quantity)
    })
    this.quantityService.components.subscribe(data => {
      this.components = data;
    })
  }

  sadf() {
    console.log(this.quantity)
  }

}
