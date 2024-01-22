import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {

  @Output() enviaDesdeHijo = new EventEmitter<string>()
  @Output() incrementarContador = new EventEmitter<void>()
  @Output() decrementarContador = new EventEmitter<void>()

  // este es el mensaje que recibe desde el padre
  @Input() recibeDesdeHijo: string = ''

  mensaje: string = ''

  enviarMensaje() {
    this.enviaDesdeHijo.emit(this.mensaje)
  }

  incrementar() {
    this.incrementarContador.emit()
  }
  decrementar() {
    this.decrementarContador.emit()
  }
}
