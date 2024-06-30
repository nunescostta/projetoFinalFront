import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { environment } from '../../../../environments/environment';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cadastro-clientes',
  standalone: true,
  imports: [CommonModule,
           FormsModule,
           ReactiveFormsModule,
           RouterLink
  ],
  templateUrl: './cadastro-clientes.component.html',
  styleUrl: './cadastro-clientes.component.css'
})
export class CadastroClientesComponent {
  
  mensagem: string = '';
  
  constructor (
    private httpClient: HttpClient
  ){}

  form = new FormGroup ({

    nome: new FormControl('', [Validators.required, Validators.minLength(8)]),

    email: new FormControl('', [Validators.required, Validators.minLength(10)]),

    cpf: new FormControl('', [Validators.required, Validators.minLength(11)]),

    dataNascimento: new FormControl('', [Validators.required, Validators.minLength(8)]),

    logradouro: new FormControl('', [Validators.required, Validators.minLength(5)]),

    complemento: new FormControl('', [Validators.required, Validators.minLength(5)]),

    numero: new FormControl('', [Validators.required, Validators.minLength(1)]),

    bairro: new FormControl('', [Validators.required, Validators.minLength(5)]),

    cidade: new FormControl('', [Validators.required, Validators.minLength(5)]),

    uf: new FormControl('', [Validators.required, Validators.minLength(2)]),

    cep: new FormControl('', [Validators.required, Validators.minLength(8)]),

  });

  get c() {
    return this.form.controls;
  }

  onSubmit(): void {
   
    this.httpClient.post(`${environment.projetoFinal}/clientes`,
      this.form.value, {responseType: 'text'})
      .subscribe({
        next: (data) => {

          console.log(data);
          
          this.mensagem = data;
          this.form.reset();
        },
        error: (e) => {
          console.log(e.error);
        }
      });
   
  } 
}



