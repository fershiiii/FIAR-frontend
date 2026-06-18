import { Routes } from '@angular/router';
import ClienteListado from './cliente/page/cliente-listado/cliente-listado';

export const routes: Routes = [
    {
        path: 'clientes',
        loadComponent: () => import('./layout/layout-general/layout-general'),
        children: [
            {
                path: 'listado',
                loadComponent: () => import('./cliente/page/cliente-listado/cliente-listado')
            }
        ]
    }
];
