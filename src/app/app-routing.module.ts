import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TitleListComponent } from './components/title-list/title-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'titles', component: TitleListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
