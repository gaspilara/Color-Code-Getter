import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Square } from '../models/square.model';

@Injectable({
  providedIn: 'root'
})
export class QuantityService {

  public _quantity: number = 2;
  private _quantitySubject: BehaviorSubject<number> = new BehaviorSubject(this._quantity);
  public quantity: Observable<number> = this._quantitySubject.asObservable();

  public _components: Square[] = [];
  private _componentsSubject: BehaviorSubject<Square[]> = new BehaviorSubject(this._components);
  public components: Observable<Square[]> = this._componentsSubject.asObservable();

  square: Square;

  constructor() {
    this.square = new Square();
  }

  createComponent(quantity: number) {
    if (this._components.length === 0) {
      for (let i=0;i<2;i++) {
        this._components.push(this.square);
      }
    } else {
      switch(quantity) {
        case 2: {
          switch(this._components.length) {
            case 4: {
              for (let i=0;i<2;i++) {
                this._components.pop();
              }
            }; break;
            case 6: {
              for (let i=0;i<4;i++) {
                this._components.pop();
              }
            }; break;
          }
        }; break;

        case 4: {
          switch(this._components.length) {
            case 2: {
              for (let i=0;i<2;i++) {
                this._components.push(this.square);
              }
            }; break;
            case 6: {
              for (let i=0;i<2;i++) {
                this._components.pop();
              }
            }; break;
          }
        }; break;

        case 6: {
          switch(this._components.length) {
            case 2: {
              for (let i=0;i<4;i++) {
                this._components.push(this.square);
              }
            }; break;
            case 4: {
              for (let i=0;i<2;i++) {
                this._components.push(this.square);
              }
            }; break;
          }
        }; break;

      }
    }
  }

}
