import { Validators } from '@angular/forms';
import { ApiService } from './../../../../../ngx-core/src/lib/api/api.service';
import { Injectable } from '@angular/core';

/**
 *
 *
 * @export
 * @class RecoveryService
 */
@Injectable({
  providedIn: 'root'
})
export class NgxSmartRecoveryService {
  /**
   *Creates an instance of RecoveryService.
   * @memberof RecoveryService
   */
  constructor(private _apiSrv: ApiService) {}

  /**
   * Auth service
   *
   * @param {string} url
   * @param {string} user_cod
   * @param {string} password
   * @memberof NgxSmartRecoveryService
   */
  retrieve(url: string, user_cod: string, password: string) {
    const options = {};
    const body = this.encrypt(user_cod, password);
    return this._apiSrv.post(url, body, options);
  }

  /**
   * Encrypt password
   *
   * @private
   * @param {string} user_cod
   * @param {string} password
   * @returns
   * @memberof NgxSmartRecoveryService
   */
  private encrypt(user_cod: string, password: string) {
    const body = {
      user_cod: user_cod,
      password: password
    };

    return body;
  }
}
