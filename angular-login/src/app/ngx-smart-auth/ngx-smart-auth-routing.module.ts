import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxSmartLoginComponent } from './ngx-smart-login/ngx-smart-login.component';
import { NgxSmartRecoveryComponent } from './ngx-smart-recovery/ngx-smart-recovery.component';
import { NgxSmartChangePasswordComponent } from './ngx-smart-change-password/ngx-smart-change-password.component';

const routes: Routes = [
  {
    path: 'auth',
    component: NgxSmartLoginComponent
  },
  {
    path: '',
    component: NgxSmartLoginComponent
  },
  {
    path: 'recovery',
    component: NgxSmartRecoveryComponent
  },
  {
    path: 'change-password',
    component: NgxSmartChangePasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgxSmartAuthRoutingModule {}
