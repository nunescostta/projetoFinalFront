import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-clientes',
  standalone: true,
  imports: [CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink
],
  templateUrl: './editar-clientes.component.html',
  styleUrl: './editar-clientes.component.css'
})
export class EditarClientesComponent implements OnInit{

  mensagem: string ='';
  clientes: any[] = []


  constructor (
    private httpClient : HttpClient,
    private activatedRoute : ActivatedRoute
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


  ngOnInit(): void {
    
    const id = this.activatedRoute.snapshot.paramMap.get('id') as string;

    this.httpClient.get(`${environment.projetoFinal}/clientes/${id}`)
    .subscribe({
      next: (data: any) => {
      
        this.form.controls['nome'].setValue(data.nome);
        this.form.controls['email'].setValue(data.email);
        this.form.controls['cpf'].setValue(data.cpf);
        this.form.controls['dataNascimento'].setValue(data.dataNascimento);
        this.form.controls['logradouro'].setValue(data.logradouro);
        this.form.controls['complemento'].setValue(data.complemento);
        this.form.controls['numero'].setValue(data.numero);
        this.form.controls['bairro'].setValue(data.bairro);
        this.form.controls['cidade'].setValue(data.cidade);
        this.form.controls['uf'].setValue(data.uf);
        this.form.controls['cep'].setValue(data.cep);

      },
      error: (e) => {
        console.log(e.error);
      }
    });



  }

  onSubmit(): void {
   
    this.httpClient.put(`${environment.projetoFinal}/clientes`,
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
