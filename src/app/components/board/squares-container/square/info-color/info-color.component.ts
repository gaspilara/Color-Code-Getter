import { Component, Input, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color.model';

@Component({
  selector: 'info-color-component',
  templateUrl: './info-color.component.html',
  styleUrls: ['./info-color.component.sass']
})
export class InfoColorComponent implements OnInit {

  @Input() toCopy: string = '';
  @Input() colorValue: string = '';

  color: Color;
  hexaToUpper: string = '';
  rgbToCopy: string = '';
  scaleValue: string = '';

  constructor() {
    this.color = new Color();
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
