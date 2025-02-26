import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdmissionComponent } from './pages/admission/admission.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
    },
    {
        path: 'home',
        data: {
            title: "Home",
            subtitle: "Página inicial teste AMCOM"
        },
        component: HomeComponent
    },
    {
        path: 'admission',
        data: {
            title: "Nova Admissão Cooperado",
            subtitle: "Cadastro / Admissão do Cooperado / Nova Admissão do Cooperado"
        },
        component: AdmissionComponent
    },
];
