/** Externals Modules */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/** Modules */
import { ButtonModule } from 'presentation-components-jmmacedo';
import { PresentationComponentsModule } from 'presentation-components-jmmacedo';
import { NgxSmartAuthRoutingModule } from './ngx-smart-auth-routing.module';
/** Components */
import { NgxSmartLoginComponent } from './ngx-smart-login/ngx-smart-login.component';
import { NgxSmartRecoveryComponent } from './ngx-smart-recovery/ngx-smart-recovery.component';
import { NgxSmartChangePasswordComponent } from './ngx-smart-change-password/ngx-smart-change-password.component';
import { InputModule } from 'presentation-components-jmmacedo';
import { CoreComponentsModule } from 'core-components-jmmacedo';

/**
 * Module
 *
 * @export
 * @class AuthModule
 */
@NgModule({
  providers: [],
  declarations: [NgxSmartLoginComponent, NgxSmartRecoveryComponent, NgxSmartChangePasswordComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgxSmartAuthRoutingModule,
    PresentationComponentsModule,
    CoreComponentsModule,
    ReactiveFormsModule,
    InputModule,
    ButtonModule
  ],
  exports: [NgxSmartLoginComponent, NgxSmartRecoveryComponent, NgxSmartChangePasswordComponent]
})
export class NgxSmartAuthModule {}
