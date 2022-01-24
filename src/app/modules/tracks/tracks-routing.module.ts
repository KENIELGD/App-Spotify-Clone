import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrackspageComponent } from './pages/trackspage/trackspage.component';

const routes: Routes = [
  {
    path:"",
    component: TrackspageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TracksRoutingModule { }
