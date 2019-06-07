import { NgModule } from '@angular/core';
import { NgxSmartComponent } from './ngx-smart.component';
import { NgxSmartAuthModule } from './ngx-smart-auth/ngx-smart-auth.module';

@NgModule({
  imports: [NgxSmartAuthModule],
  declarations: [NgxSmartComponent],
  exports: [NgxSmartComponent]
})
export class NgxSmartModule {}
