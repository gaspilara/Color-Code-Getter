import { Component, Input, OnInit } from '@angular/core';
import { ColorModel } from '../../models/color.model';

@Component({
  selector: 'info-color-component',
  templateUrl: './info-color.component.html',
  styleUrls: ['./info-color.component.sass']
})
export class InfoColorComponent implements OnInit {

  @Input() toCopy: string = '';
  @Input() colorValue: string = '';
  isHexa: boolean = false;

  color: ColorModel = new ColorModel();
  hexaToUpper: string = '';
  rgbToCopy: string = '';
  scaleValue: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  showCopyMotion() {
    this.scaleValue = 'scale(1.3)';
    setTimeout(() => { this.scaleValue = 'scale(1.2)'; }, 70);
    setTimeout(() => { this.scaleValue = 'scale(1.1)'; }, 100);
    setTimeout(() => { this.scaleValue = 'scale(1)'; }, 125);
  }

}
