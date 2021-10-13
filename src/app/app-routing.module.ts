import { DummyComponent } from './dummy/dummy.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

{path: 'Home', component: DummyComponent},
{path: 'Services', component: DummyComponent},
{path: 'Proyects', component: DummyComponent},
{path: 'Aboutus', component: DummyComponent},
{path: 'signup', component: DummyComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
