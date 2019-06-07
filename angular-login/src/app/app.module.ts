import { NgxSmartAuthModule } from './ngx-smart-auth/ngx-smart-auth.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxSmartAuthModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
