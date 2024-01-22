import { Component, OnInit } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent implements OnInit {

  valorContador: number = 0
  mensajeDesdePadre: string = 'Mensaje desde el padre'
  mensajeDesdeHijo: string = 'nada por ahora'
  brotherName: string = ''
  selfName: string = 'Big John'
  fecha: Date = new Date()
  valorDolar: number = 37.01
  valorPi: number = Math.PI
  factor: number = 37/100

  constructor(private _servicioFamiliar: ServicioFamiliarService) {

  }

  ngOnInit(): void {
    this._servicioFamiliar.setBigBrother(this.selfName)
  }

  manejadorEventoPadre($event: string) {
    this.mensajeDesdeHijo = $event
  }

  incrementar() {
    this.valorContador++
  }
  decrementar() {
    this.valorContador--
  }

  saludar() {
    this.brotherName = this._servicioFamiliar.getLittleBrother()
    this._servicioFamiliar.greet(this.brotherName)
  }
}
