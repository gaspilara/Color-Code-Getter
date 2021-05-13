export class ColorModel {

  hex: string;
  rgb: { 
    r: number, 
    g: number, 
    b: number 
  };

  constructor() {
    this.hex = '';
    this.rgb = { 
      r: 0, 
      g: 0, 
      b: 0
    };
  }

}
