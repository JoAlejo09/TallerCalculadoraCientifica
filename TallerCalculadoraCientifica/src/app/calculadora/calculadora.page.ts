import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './calculadora.page.html',
  styleUrls: ['./calculadora.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule],
})
export class CalculadoraPage {
  
 
  num1: string = '';
  num2: string = '';
  result: number | null = null;
  operation: string = 'Resultado';
 
  calculate(op: 'sum' | 'sub'| 'mul' | 'div' | 'sqr' | 'pow2' | 'pow3' | 'sin' | 'cos' |'tan'|'log2'|'ln') {
    const a = Number(this.num1);
    const b = Number(this.num2);

    if (isNaN(a) || isNaN(b)) {
      this.result = null;
      this.operation = 'Error: valores inválidos';
      return;
    }

    if (op === 'sum') {
      this.result = a + b;
      this.operation = 'Suma';
    } else if(op ==='sub') {
      this.result = a - b;
      this.operation = 'Resta';
    } else if(op === 'mul'){
      this.result = a * b;
      this.operation = 'Producto'
    } else if(op ==='div'){
        if(b===0){
          this.operation = 'Error: valores inválidos';
          this.result=0;
        }
        this.result = a/b;
    } else if(op ==='sqr'){
        if(a<0){
          this.operation = 'Error: valores inválidos';
          this.result=0;
        }
        this.result = Math.sqrt(a);

    } else if(op =='pow2'){
      this.result = Math.pow(a,2);
    } else if(op = 'pow3'){
      this.result = Math.pow(a,3);
    } else if(op='sin'){
      this.result = Math.sin(a); 
    } else if(op='cos'){
      this.result = Math.cos(a); 
    } else if(op='tan'){
      this.result = Math.tan(a); 
    } else if(op='log2'){
      if(a<1){
          this.operation = 'Error: valores inválidos';
          this.result=0; 
      }
      this.result = Math.log2(a);
    } else if(op='ln'){
      if(a<1){
          this.operation = 'Error: valores inválidos';
          this.result=0;    
      }
      this.result = Math.log(a);
    }
  }}
