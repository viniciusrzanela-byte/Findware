import { Routes } from '@angular/router';
import { Detalhe } from './detalhe/detalhe';
import { Vitrine } from './vitrine/vitrine';
import { Login } from './login/login';
import { Cadastrar } from './cadastrar/cadastrar';

export const routes: Routes = 
[
    {
        path: '',
        component: Vitrine
    },
    {
        path: 'detalhe/:id',
        component: Detalhe
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: 'cadastrar',
        component: Cadastrar
    }
];