import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';

import { FormsModule }        from '@angular/forms';

import { AppComponent } from './app.component';
import { FlexiComponent } from './flexi/flexi.component';

const appRoutes: Routes = [
  {
    path: '',
    component: FlexiComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    FlexiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatGridListModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[MatInputModule, MatSelectModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
