import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastrar-recursos',
  templateUrl: './cadastrar-recursos.component.html',
  styleUrls: ['./cadastrar-recursos.component.css']
})
export class CadastrarRecursosComponent {

    formData: { [key: string]: string} ={
      nome: '',
      decricao: ''
    }

    nomeInput(event: any, nome: string){
      this.formData[nome] = event.target.value;
      console.log(`Texto inserido em ${nome}:`, this.formData[nome]);
    }
}
