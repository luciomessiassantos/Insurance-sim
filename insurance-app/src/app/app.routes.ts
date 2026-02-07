import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/dashboard';
import { Hero } from './features/hero/hero';
import { Layout } from './core/layout/layout';
import { Customers } from './features/customers/customers';
import { Payments } from './features/payments/payments';
import { Login } from './features/login/login';

export const routes: Routes = [
    {
        path: '',
        component: Layout,
        children: [
            {
                path: 'dashboard',
                component: Dashboard
            },
            {
                path: 'customers',
                component: Customers
            },
            {
                path: 'finance',
                component: Payments
            },
            
        ]
    },
    {
        path: 'hero',
        component: Hero
    },
    {
        path: 'login',
        component: Login
    },
];
