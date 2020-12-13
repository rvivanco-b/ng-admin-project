import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {
  
  
  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
  }

  //@Input('valor') progreso: number = 10;
  @Input('valor') progreso: number = 10;
  @Input() btnClass: string = 'btn-primary';

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

  onChange(nuevoValor: number) {
    if (nuevoValor >= 100) {
      this.progreso = 100;
    }
    else if (nuevoValor <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = nuevoValor;
    }
    
    this.valorSalida.emit(this.progreso);
  }

}
