import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';








import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapComponent } from './Components/map/map.component';
import { EntryComponent } from './Components/entry/entry.component';
import { FullListComponent } from './Components/full-list/full-list.component';
import { FilterPipe } from './pipe/searchPipe/filter.pipe';
import { UpdateComponent } from './Components/update/update.component';
import { BirthdayPipe } from './pipe/dobPipe/birthday.pipe';
import { ViewDetailsComponent } from './Components/view-details/view-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    EntryComponent,
    FullListComponent,
    FilterPipe,
    UpdateComponent,
    BirthdayPipe,
    ViewDetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    MatSnackBarModule,
    MatDialogModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
