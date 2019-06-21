import { NgxSmartRecoveryService } from './ngx-smart-recovery.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'ngx-smart-recovery',
  templateUrl: './ngx-smart-recovery.component.html',
  styleUrls: ['./ngx-smart-recovery.component.scss']
})
export class NgxSmartRecoveryComponent implements OnInit {
  @Input() apiUrl: string = '/v1/login';
  @Input() userLabel: string = '';
  @Input() emailLabel: string = '';
  @Input() buttonLabel: string = '';
  @Input() validatorLabel: string = '';
  @Input() responseMsg: string = '';
  @Input() mainTitle: string = '';
  @Input() lowTitle: string = '';
  @Input() userPlaceholder: string = '';
  @Input() emailPlaceholder: string = '';
  @Input() recoveryRoute: string;
  @Input() minlengthUser: number;
  @Input() maxlengthUser: number;
  @Input() maxlengthEmail: number;
  @Input() minlengthEmail: number;
  @Input() validators;
  @Output() manageData = new EventEmitter();
  public formRetrievePassword: FormGroup;
  public user: any = '';
  public email: any = '';
  /**
   *Creates an instance of NgxSmartRecoveryComponent.
   * @param {Router} _router
   * @memberof NgxSmartRecoveryComponent
   */
  constructor(
    private _router: Router,
    private _pf: FormBuilder,
    private _recoverySrv: NgxSmartRecoveryService
  ) {}

  /**
   * Cycle onInit
   *
   * @memberof NgxSmartRecoveryComponent
   */
  ngOnInit() {
    this.createForm();
  }

  /**
   *
   *
   * @memberof NgxSmartRecoveryComponent
   */
  createForm() {
    this.formRetrievePassword = this._pf.group({
      user: new FormControl('', this.validators.user.validators),
      email: new FormControl('', this.validators.email.validators)
    });
  }

  /**
   * Go to
   *
   * @memberof NgxSmartRecoveryComponent
   */
  public goTo() {
    this._router.navigate([this.recoveryRoute]);
  }

  /**
   *
   *
   * @memberof NgxSmartRecoveryComponent
   */
  retrievePassword() {
    const data = {
      user: this.formRetrievePassword.get('user').value,
      email: this.formRetrievePassword.get('email').value
    };
    this.manageData.emit(data);
  }
}
