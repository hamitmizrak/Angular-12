import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// componetler  import
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';

// componetler  use
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  //AppComponent baslangic
  bootstrap: [AppComponent]
})
export class AppModule { }

//module=componentler+componentler+....
