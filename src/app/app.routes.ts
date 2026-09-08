import { Routes } from '@angular/router';
import { Detalhe } from './detalhe/detalhe';
import { Vitrine } from './vitrine/vitrine';
import { Login } from './login/login';
import { Cadastrar } from './cadastrar/cadastrar';
import { Esqueceu } from './esqueceu/esqueceu';
import { Carrinho } from './carrinho/carrinho';
import { Busca } from './busca/busca';

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
    },
    {
        path: 'esqueceu',
        component: Esqueceu
    },
    {
      path: 'carrinho',
      component: Carrinho
    },
    {
        path: 'busca',
        component: Busca
    }
];