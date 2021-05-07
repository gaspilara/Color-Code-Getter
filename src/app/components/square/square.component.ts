import { Component, Input, OnInit } from '@angular/core';
import { Color } from '../../models/color.model';
import { Square } from '../../models/square.model'
import { ColorService } from '../../services/color.service'

@Component({
  selector: 'square-component',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.sass']
})
export class SquareComponent implements OnInit {

  @Input() square: Square = new Square();
  color: Color = new Color();
  hexaToUpper: string = '';
  rgbToCopy: string = '';

  constructor(private colorService: ColorService) { }

  ngOnInit(): void {
    this.square.display = true;
  }

  onColorChange() {
    this.color.hex = this.color.hex.toUpperCase();
    let arrayRGB = this.colorService.convertToRGB(this.color.hex);
    if (arrayRGB[0] !== undefined && arrayRGB[1] !== undefined && arrayRGB[2] !== undefined) {
      this.color.RGB = 'RGB ('+arrayRGB[0]+', '+arrayRGB[1]+', '+arrayRGB[2]+')';
    }
    this.rgbToCopy = arrayRGB[0]+' '+arrayRGB[1]+' '+arrayRGB[2];
  }

}
