import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})


export class OutputComponent {

  @Output() public enviarDados =  new EventEmitter();

  public list:Array<{nome: string, idade: number}> = [
    {nome: "Vandilson", idade: 1 },
    {nome: "Vandilson 2", idade: 2 }
  ];

  public getDados(event:number){
    this.enviarDados.emit(this.list[event]);
  }

}