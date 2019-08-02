import { AppRoutingModule } from './app-routing.module';
import { CoreComponentsModule } from 'core-components-jmmacedo';
import { NgxSmartAuthModule } from './ngx-smart-auth/ngx-smart-auth.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoreComponentsModule, NgxSmartAuthModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
