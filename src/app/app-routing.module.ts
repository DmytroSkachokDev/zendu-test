import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubmissionsModule } from './page/submissions/submissions.module';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'submissions'
    },
    {
    path: 'submissions',
        loadChildren: () => import('./page/submissions/submissions.module').then(m => m.SubmissionsModule)
    }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }