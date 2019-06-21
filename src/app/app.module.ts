import { AppRoutingModule } from './app-routing.module';
import { NgxCoreModule } from 'projects/ngx-core/src/public-api';
import { NgxSmartModule } from './../../projects/ngx-smart/src/lib/ngx-smart.module';
import { NgxSmartAuthModule } from './ngx-smart-auth/ngx-smart-auth.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxSmartModule, NgxCoreModule, NgxSmartAuthModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
