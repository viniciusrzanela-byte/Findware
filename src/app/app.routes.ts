import { Routes } from '@angular/router';
import { Detalhe } from './detalhe/detalhe';
import { Vitrine } from './vitrine/vitrine';

export const routes: Routes = 
[
    {
        path: 'detalhe/:id',
        component: Detalhe
    },
    {
        path: '',
        component: Vitrine
    }
];