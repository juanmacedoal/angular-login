import { ButtonModule } from './../../../../ngx-presn/src/lib/button/button.module';
/** Externals Modules */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/** Modules */
import { NgxPresnModule } from './../../../../ngx-presn/src/lib/ngx-presn.module';
import { NgxSmartAuthRoutingModule } from './ngx-smart-auth-routing.module';
/** Components */
import { NgxSmartLoginComponent } from './ngx-smart-login/ngx-smart-login.component';
import { NgxSmartRecoveryComponent } from './ngx-smart-recovery/ngx-smart-recovery.component';
import { NgxSmartChangePasswordComponent } from './ngx-smart-change-password/ngx-smart-change-password.component';
import { InputModule } from 'projects/ngx-presn/src/lib/input/input.module';

/**
 * Module
 *
 * @export
 * @class AuthModule
 */
@NgModule({
  providers: [],
  declarations: [
    NgxSmartLoginComponent,
    NgxSmartRecoveryComponent,
    NgxSmartChangePasswordComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxSmartAuthRoutingModule,
    NgxPresnModule,
    ReactiveFormsModule,
    InputModule,
    ButtonModule
  ],
  exports: [
    NgxSmartLoginComponent,
    NgxSmartRecoveryComponent,
    NgxSmartChangePasswordComponent
  ]
})
export class NgxSmartAuthModule {}
