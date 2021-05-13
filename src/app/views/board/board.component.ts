import { Component, OnInit } from '@angular/core';
import { ColorService } from '../../services/color.service';
import { QuantityService } from '../../services/quantity.service';

@Component({
  selector: 'board-component',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.sass']
})
export class BoardComponent implements OnInit {

  constructor(private colorService: ColorService) {
  }

  ngOnInit(): void {
    this.colorService.setAleatoryColor();
  }

}
