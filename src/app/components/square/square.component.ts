import { Component, Input, OnInit } from '@angular/core';
import { ColorModel } from '../../models/color.model';
import { Square } from '../../models/square.model'
import { ColorService } from '../../services/color.service'

@Component({
  selector: 'square-component',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.sass']
})
export class SquareComponent implements OnInit {

  @Input() square: Square = new Square();
  color: ColorModel = new ColorModel();
  hexaToUpper: string = '';
  rgbToCopy: string = '';
  thisColor: string = '';

  constructor(private colorService: ColorService) {
    this.colorService.getColor().subscribe( color => this.color = color);
    // console.log("- - - - - - - - - - - - - - - - -");
    // console.log(this.color); 
  }
  
  ngOnInit(): void {
    this.square.display = true;
    // this.colorService.setAleatoryColor();
    this.colorService.color.subscribe( c => this.color = c);
  }
/*
  onColorChange() {
    this.color.hex = this.color.hex.toUpperCase();
    let arrayRGB = this.colorService.convertToRGB(this.color.hex);
    if (arrayRGB[0] !== undefined && arrayRGB[1] !== undefined && arrayRGB[2] !== undefined) {
      this.color.rgb = { r: arrayRGB[0], g: arrayRGB[1], b: arrayRGB[2] };
      this.thisColor = String(this.color.rgb.r) + ' ' + String(this.color.rgb.g) + ' ' + String(this.color.rgb.b);
    }
    this.rgbToCopy = arrayRGB[0]+' '+arrayRGB[1]+' '+arrayRGB[2];
  }
*/
}
