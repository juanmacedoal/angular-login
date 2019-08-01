import { CustomValidator } from './../../projects/ngx-presn/src/lib/input/custom-validators';
import { LangService } from 'core-components-jmmacedo';
import { Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public recoveryLabel: string = this._langSrv.instant('Recuperar contraseña');
  public buttonLabel: string = this._langSrv.instant('Entrar');
  public validatorLabel: string = this._langSrv.instant('Los datos introducidos no son correctos');
  public userPlaceholder: string = this._langSrv.instant('Código de Usuario');
  public passwordPlaceholder: string = this._langSrv.instant('Password');
  public mainTitle: string = this._langSrv.instant('LOGIN.TITLE_WELCOME');
  public area: string = this._langSrv.instant('LOGIN.TITLE_PRESCRIPTOR');
  public leasingReanting: string = this._langSrv.instant('LOGIN.TITLE_LEASING_RENTING');
  public iconTitle: string = this._langSrv.instant('Leasing y Renting');
  public homeRoute: string = 'home';
  public recoveryRoute: string = '/auth/recovery';
  public apiUrl: string = '/v1/login';
  public minlengthUser: number = 12;
  public maxlengthUser: number = 12;
  public maxlengthPassword: number = 16;
  public minlengthPassword: number = 8;
  public responseMsg: string = '';
  public userLabel: string = '';
  public passwordLabel: string = '';
  public validators;

  /**
   *Creates an instance of LoginComponent.
   * @param {Router} _router
   * @memberof LoginComponent
   */
  constructor(private _router: Router, private _langSrv: LangService) {}

  /**
   * Cycle onInit
   *
   * @memberof LoginComponent
   */
  ngOnInit() {
    this.setValidators();
  }

  /**
   *
   *
   * @memberof LoginComponent
   */
  setValidators() {
    this.validators = {
      user: {
        validators: [
          Validators.required,
          Validators.maxLength(this.maxlengthUser),
          Validators.minLength(this.minlengthUser),
          CustomValidator.alphanumericValidator
        ]
      },
      password: {
        validators: [
          Validators.required,
          Validators.minLength(this.minlengthPassword),
          Validators.maxLength(this.maxlengthPassword)
        ]
      }
    };
  }

  /**
   * Go to
   *
   * @param url
   */
  public goTo(url: string) {
    this._router.navigate([url]);
  }

  /**
   *
   *
   * @param {*} data
   * @memberof LoginComponent
   */
  manageData(data) {
    const response = this.login(this.apiUrl, data.user, data.password);
    this.goTo('/home');
  }

  /**
   *
   *
   * @private
   * @param {string} apiUrl
   * @param {string} user
   * @param {string} password
   * @memberof LoginComponent
   */
  private login(apiUrl: string, user: string, password: string) {
    // this._sanLoginSrv.auth(this.apiUrl, user, password).subscribe(data => {
    //   this._router.navigate([this.homeRoute]);
    //   this.responseMsg = data['description'];
    //   return data;
    // });
  }
}
