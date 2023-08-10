import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './shared/components/header/header.component';
import { MaterialModule } from './material.module';
import { FormularioComponent } from './form/formulario/formulario.component';
import { ScreensComponent } from './screens/screens.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ScreensComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    HeaderComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
