import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

//River Torres
//Bernal Aguirre

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public res : number;
  public oper : string;
  public n1 : number;
  public n2 : number;
  public error : boolean = false;

  constructor(public navCtrl: NavController) {
    this.res = 0;
    this.oper = "";
  }

  changeOper(oper){
    this.oper = oper;
    if (isNaN(this.n1) || isNaN(this.n2)) {
      this.error = true;
      return;
    }
    switch(this.oper){
      case "+":
        this.res = Number(this.n1) + Number(this.n2);
        break;
      case "-":
        this.res = Number(this.n1) - Number(this.n2);
        break;
        case "/":
        if (this.n2 == 0) {
          this.error = true;
          return;
        }
        this.res = Number(this.n1) / Number(this.n2);
        break;
        case "*":
        this.res = Number(this.n1) * Number(this.n2);
        break;
        case "%":
        this.res = Number(this.n1) % Number(this.n2);
        break;
    }
    this.error = false;
  }

  validar(valor){
    if (isNaN(this.n1) || isNaN(this.n2)) {
      this.error = true;
      valor.preventDefault();
      return;
    }
  }


}
