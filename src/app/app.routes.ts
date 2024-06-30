import { Routes } from '@angular/router';
import { CadastroClientesComponent } from './components/pages/cadastro-clientes/cadastro-clientes.component';
import { ConsultarClientesComponent } from './components/pages/consultar-clientes/consultar-clientes.component';
import { EditarClientesComponent } from './components/pages/editar-clientes/editar-clientes.component';

export const routes: Routes = [

    {
        path: 'pages/cadastro-clientes',
        component: CadastroClientesComponent
    },
    {
        path: 'pages/consulta-clientes',
        component: ConsultarClientesComponent
    },
    {
        path: 'pages/editar-clientes/:id',
        component: EditarClientesComponent
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'pages/cadastro-clientes'
    }

];
