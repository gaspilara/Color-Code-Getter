import { Component, Input, OnInit } from '@angular/core';
import { Square } from '../../models/square.model'

@Component({
  selector: 'square-component',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.sass']
})
export class SquareComponent implements OnInit {

  @Input() square: Square;
  colorName: string = '';

  constructor() {
    this.square = new Square();
  }

  ngOnInit(): void {
  }

  showCopyMotion(): void {

  }

}
