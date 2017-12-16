import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { CsvComponent } from './csv/csv.component';


export const appRoutes: Routes = [
    
  { path: '', redirectTo: '/', pathMatch: 'full' }, 
  { path: '', component: CsvComponent },   
    
]

export const approuting: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });