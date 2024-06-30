import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-consultar-clientes',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './consultar-clientes.component.html',
  styleUrl: './consultar-clientes.component.css'
})
export class ConsultarClientesComponent implements OnInit{

  mensagem: string = '';

clientes: any[] = [];

  constructor(
    private httpClient: HttpClient
  ){

  }
  ngOnInit(): void {
   
    this.httpClient.get(`${environment.projetoFinal}/clientes`)
      .subscribe({
        next:(data)  => {
          this.clientes = data as any[];
        },
        error: (e) => {
          console.log(e.error);
        }

      })


  }

  onDelete(id: number): void {
    if(confirm("Deseja Excluir o Cliente selecionado ?")) {
      this.httpClient.delete(`${environment.projetoFinal}/clientes/${id}`,
        {responseType: 'text'} )
        .subscribe({
          next: (data) => {
            this.mensagem = data;
            this.ngOnInit();
          },
          error: (e) => {
            console.log(e.error);
          }
        });
    }
  }

  ordenarClientesPorNome() {
    this.clientes.sort((a, b) => {
      if (a.nome.toLowerCase() < b.nome.toLowerCase()) {
        return -1;
      } else if (a.nome.toLowerCase() > b.nome.toLowerCase()) {
        return 1;
      } else {
        return 0;
      }
    });
  }


}
