import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { LeftSideComponent } from './layouts/left-side/left-side.component';
import { RigthSideComponent } from './layouts/rigth-side/rigth-side.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CompletedWorksComponent } from './components/completed-works/completed-works.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LeftSideComponent,
    RigthSideComponent,
    CompletedWorksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
