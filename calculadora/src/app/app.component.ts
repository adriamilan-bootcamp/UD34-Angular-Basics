import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculadora';
  valor: String = '0';
  operacion: String = '0';
  operator: String = '';

  num: any;

  inNumero(num: any) {
    if (this.valor.charAt(0) == '0') {
      this.valor = "";
      this.valor += num;
    } else {
      this.valor += num;
    }
  }

  delNumero() {
    if (!(this.valor.charAt(0) == '0')) {
      this.valor = this.valor.substring(0, this.valor.length - 1);
    }
  }

  equals() {
    if (this.operacion != '0') {
      var op = this.operacion + " " + this.operator + " " + this.valor;
    
      switch(this.operator) {
        case '+': {
          this.valor = String(Number(this.operacion) + Number(this.valor)); 
          break;
        }
        case '-': {
          this.valor = String(Number(this.operacion) - Number(this.valor)); 
          break;
        }
        case 'x': {
          this.valor = String(Number(this.operacion) * Number(this.valor)); 
          break;
        }
        case '/': {
          this.valor = String(Number(this.operacion) / Number(this.valor)); 
          break;
        }
      }

      this.operacion = op;
    }
  }

  sumar() {
    this.upValor()
    this.operator = '+';
  }

  restar() {
    this.upValor()
    this.operator = '-';
  }

  multiplicar() {
    this.upValor()
    this.operator = 'x';
  }

  dividir() {
    this.upValor()
    this.operator = '/';
  }

  upValor() {
    this.operacion = this.valor;
    this.valor = '0';
  }

  restart() {
    this.valor = '0';
    this.operacion = '0';
  }

}

