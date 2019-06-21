import { NgxSmartAuthModule } from './../../../../src/app/ngx-smart-auth/ngx-smart-auth.module';
import { NgModule } from '@angular/core';
import { NgxSmartComponent } from './ngx-smart.component';

@NgModule({
  imports: [NgxSmartAuthModule],
  declarations: [NgxSmartComponent],
  exports: [NgxSmartComponent]
})
export class NgxSmartModule {}
