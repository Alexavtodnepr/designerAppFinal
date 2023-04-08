import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { LeftSideComponent } from './layouts/left-side/left-side.component';
import { RigthSideComponent } from './layouts/rigth-side/rigth-side.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LeftSideComponent,
    RigthSideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
