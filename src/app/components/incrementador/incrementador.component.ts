import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent {

  //@Input('valor') progreso: number = 10;
  @Input('valor') progreso: number = 10;

  @Output('valor') valorSalida: EventEmitter<number> = new EventEmitter(); 

  cambiarValor( valor: number ) {
    this.progreso += valor;
    if (this.progreso > 100) {
      this.progreso = 100;
    }
    else if (this.progreso < 0) {
      this.progreso = 0;
    }
    this.valorSalida.emit(this.progreso);
  } 

}
