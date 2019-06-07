import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

/**
 *
 *
 * @export
 * @class NgxSmartChangePasswordComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'ngx-smart-change-password',
  templateUrl: './ngx-smart-change-password.component.html',
  styleUrls: ['./ngx-smart-change-password.component.scss']
})
export class NgxSmartChangePasswordComponent implements OnInit {
  @Input() apiUrl: string = '';
  @Input() userLabel: string = '';
  @Input() passwordLabel: string = '';
  @Input() confirmationLabel: string = '';
  @Input() buttonLabel: string = '';
  @Input() validatorLabel: string = '';
  @Input() passwordValidatorLabel: string = '';
  @Input() confirmationValidatorLabel: string = '';
  @Input() responseMsg: string = '';
  @Input() mainTitle: string = '';
  @Input() userPlaceholder: string = '';
  @Input() passwordPlaceholder: string = '';
  @Input() confirmationPlaceholder: string = '';
  @Input() recoveryRoute: string;
  @Input() minlengthUser: number;
  @Input() maxlengthUser: number;
  @Input() maxlengthPassword: number;
  @Input() minlengthPassword: number;
  @Input() maxlengthConfirmation: number;
  @Input() minlengthConfirmation: number;
  @Input() validators;
  @Output() manageData = new EventEmitter();
  public formCreatePassword: FormGroup;
  public user: any = '';
  public password: any = '';
  public confirmation: any = '';

  /**
   *Creates an instance of NgxSmartChangePasswordComponent.
   * @param {Router} _router
   * @memberof NgxSmartChangePasswordComponent
   */
  constructor(private _router: Router, private _pf: FormBuilder) {}

  /**
   * Cycle onInit
   *
   * @memberof NgxSmartChangePasswordComponent
   */
  ngOnInit() {
    this.createForm();
  }

  /**
   *
   *
   * @memberof NgxSmartChangePasswordComponent
   */
  createForm() {
    this.formCreatePassword = this._pf.group({
      user: new FormControl('', this.validators.user.validators),
      password: new FormControl('', this.validators.password.validators),
      confirmation: new FormControl('', this.validators.confirmation.validators)
    });
  }

  /**
   * Go to
   *
   * @memberof NgxSmartChangePasswordComponent
   */
  public goTo() {
    this._router.navigate([this.recoveryRoute]);
  }

  /**
   *
   *
   * @memberof NgxSmartChangePasswordComponent
   */
  changePassword() {
    const data = {
      user: this.formCreatePassword.get('user').value,
      password: this.formCreatePassword.get('password').value,
      confirmation: this.formCreatePassword.get('confirmation').value
    };
    this.manageData.emit(data);
  }
}
