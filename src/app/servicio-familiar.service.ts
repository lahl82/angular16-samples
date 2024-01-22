import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioFamiliarService {
  bigBrother?: string
  littleBrother?: string

  getBigBrother(): string {
    return this.bigBrother || ''
  }

  getLittleBrother(): string {
    return this.littleBrother || ''
  }

  setBigBrother(name: string) {
    this.bigBrother = name
  }

  setLittleBrother(name: string) {
    this.littleBrother = name
  }

  greet(brother: string) {
    console.log(`Hi ${brother}`)
  }

  askAboutSon(): string {
    return `How is your son ${this.getBigBrother()}?`
  }

  constructor() { }
}
