import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ColorModel } from '../models/color.model';
import { COLORS } from '../models/color.json'

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  public _color: ColorModel = new ColorModel();
  private _colorSubject: BehaviorSubject<ColorModel> = new BehaviorSubject(this._color);
  public color: Observable<ColorModel> = this._colorSubject.asObservable();

  constructor() {
    this.color.subscribe( color => { 
      this._color = color 
      console.log(color);
    });
    this.setAleatoryColor();
    console.log("_____________________________");
    console.log(this._color);
  }

  getColor(): Observable<ColorModel> {
    return of(COLORS[0]);
  }

  setAleatoryColor() {
    this._color = {
      // the magic of Math struck (16777215 == ffffff in decimal)
      hex: Math.floor(Math.random()*16777215).toString(16),
      rgb: { 
        r: Math.floor(Math.random() * 255) + 1, 
        g: Math.floor(Math.random() * 255) + 1, 
        b: Math.floor(Math.random() * 255) + 1
      }
    }
  }

/*
  convertToRGB(hex: string): any {
    hex.charAt(0) === '#' ? hex = hex.substr(1) : '';
    (hex.length < 2) || (hex.length > 6) ? '' : '';
    let values = hex.split('');
    let r, g, b;
    if (hex.length === 2) {
        r = parseInt(values[0].toString() + values[1].toString(), 16);
        g = r;
        b = r;
    } else if (hex.length === 3) {
        r = parseInt(values[0].toString() + values[0].toString(), 16);
        g = parseInt(values[1].toString() + values[1].toString(), 16);
        b = parseInt(values[2].toString() + values[2].toString(), 16);
    } else if (hex.length === 6) {
        r = parseInt(values[0].toString() + values[1].toString(), 16);
        g = parseInt(values[2].toString() + values[3].toString(), 16);
        b = parseInt(values[4].toString() + values[5].toString(), 16);
    } else {
        return '';
    }
    // return ('RGB ('+r+', '+g+', '+b+')');
    return [r, g, b];
  }
*/
}
