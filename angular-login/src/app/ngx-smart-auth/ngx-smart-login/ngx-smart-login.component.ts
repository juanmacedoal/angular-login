import { CustomValidator } from './../../../../../ngx-presn/src/lib/input/custom-validators';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';

/**
 *
 *
 * @export
 * @class NgxSmartLoginComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'ngx-smart-login',
  templateUrl: './ngx-smart-login.component.html',
  styleUrls: ['./ngx-smart-login.component.scss']
})
export class NgxSmartLoginComponent implements OnInit {
  @Input() recoveryLabel: string;
  @Input() userLabel: string;
  @Input() passwordLabel: string;
  @Input() buttonLabel: string;
  @Input() validatorLabel: string;
  @Input() userPlaceholder: string;
  @Input() passwordPlaceholder: string;
  @Input() recoveryRoute: string;
  @Input() apiUrl: string;
  @Input() minlengthUser: number;
  @Input() maxlengthUser: number;
  @Input() maxlengthPassword: number;
  @Input() minlengthPassword: number;
  @Input() mainTitle: string;
  @Input() lowTitle: string;
  @Input() area: string;
  @Input() leasingReanting: string;
  @Input() responseMsg: string;
  @Input() validators;
  @Output() manageData = new EventEmitter();
  public iconTitle: string;
  public lowTitleState: boolean;
  public areaState: boolean;
  public formLogin: FormGroup;
  public user: any = '';
  public password: any = '';

  /**
   *Creates an instance of NgxSmartLoginComponent.
   * @param {Router} _router
   * @memberof NgxSmartLoginComponent
   */
  constructor(private _router: Router, private _pf: FormBuilder) {}

  /**
   * Cycle onInit
   *
   * @memberof NgxSmartLoginComponent
   */
  ngOnInit() {
    this.createForm();
  }

  /**
   *
   *
   * @memberof NgxSmartLoginComponent
   */
  createForm() {
    this.formLogin = this._pf.group({
      user: new FormControl('', this.validators.user.validators),
      password: new FormControl('', this.validators.password.validators)
    });
  }

  /**
   * Go to
   *
   * @memberof NgxSmartLoginComponent
   */
  public goTo() {
    this._router.navigate([this.recoveryRoute]);
  }

  /**
   *
   *
   * @memberof NgxSmartLoginComponent
   */
  login() {
    const data = {
      user: this.formLogin.get('user').value,
      password: this.formLogin.get('password').value
    };
    this.manageData.emit(data);
  }
}
