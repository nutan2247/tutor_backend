import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScheduleLivesComponent } from './schedule-lives/schedule-lives.component';

const routes: Routes = [
  {
    path: '',
    component: ScheduleLivesComponent,
    data: {
      title: 'ScheduleLive '
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScheduleLiveRoutingModule { }
