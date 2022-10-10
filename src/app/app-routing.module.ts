import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntryComponent } from './Components/entry/entry.component';
import { FullListComponent } from './Components/full-list/full-list.component';
import { MapComponent } from './Components/map/map.component';
import { UpdateComponent } from './Components/update/update.component';
import { ViewDetailsComponent } from './Components/view-details/view-details.component';


const routes: Routes = [
  {path:"entry", component:EntryComponent},
  {path:"map", component:MapComponent},
  {path:"list", component:FullListComponent},
  {path:"update", component:UpdateComponent},
  {path:"details", component:ViewDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
