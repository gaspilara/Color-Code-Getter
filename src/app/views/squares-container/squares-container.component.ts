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
    this.quantityService.setQuantity(1);
    this.quantityService.quantity.subscribe( q => this.quantity = q);
    this.quantityService.components.subscribe(cc => this.components = cc);
  }
  
  ngOnInit(): void {
  }

}
