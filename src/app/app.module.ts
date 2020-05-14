import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { NutsComponent } from './nuts/nuts.component';
import { NutComponent } from './nut/nut.component';
import {HttpClientModule} from '@angular/common/http';
import { HumanNameComponent } from './human-name/human-name.component';



@NgModule({
  declarations: [
    AppComponent,
    NutsComponent,
    NutComponent,
    HumanNameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
