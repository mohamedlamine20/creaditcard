import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardFormComponent } from './card-form/card-form.component';
import { InputComponent } from './input/input.component';
import{NgxMaskPipe,NgxMaskDirective, provideNgxMask} from 'ngx-mask';
import { CardComponent } from './card/card.component' 


@NgModule({
  declarations: [
    AppComponent,
    CardFormComponent,
    InputComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgxMaskDirective,
     NgxMaskPipe
    
  ],
  providers: [provideNgxMask()],
  bootstrap: [AppComponent]
})
export class AppModule { }
