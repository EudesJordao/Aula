import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastrar-aula',
  templateUrl: './cadastrar-aula.component.html',
  styleUrls: ['./cadastrar-aula.component.css']
})
export class CadastrarAulaComponent {
  formData: { [key: string]: string} ={
    objetivo: '',
    data: '',
    recursos: ''
  }

  nomeInput(event: any, nome: string){
    this.formData[nome] = event.target.value;
    console.log(`Texto inserido em ${nome}:`, this.formData[nome]);
  }
}
