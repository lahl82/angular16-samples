import { Component, OnInit, inject } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-hermano',
  templateUrl: './hermano.component.html',
  styleUrl: './hermano.component.css'
})
export class HermanoComponent implements OnInit {

  brotherName: string = ''
  selfName: string = 'Little Peter'

  // constructor(private _servicioFamiliar: ServicioFamiliarService) { }

  private _servicioFamiliar = inject(ServicioFamiliarService)

  ngOnInit(): void {
    this._servicioFamiliar.setLittleBrother(this.selfName)
  }

  saludar() {
    this.brotherName = this._servicioFamiliar.getBigBrother()

    this._servicioFamiliar.greet(this.brotherName)
  }

  preguntarPorHijo() {
    console.log(this._servicioFamiliar.askAboutSon())
  }
}
