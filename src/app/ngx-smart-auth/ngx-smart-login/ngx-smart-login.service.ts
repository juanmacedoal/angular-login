import { ApiService } from 'core-components-jmmacedo';
import { Injectable } from '@angular/core';

/**
 *
 *
 * @export
 * @class NgxSmartLoginService
 */
@Injectable({
  providedIn: 'root'
})
export class NgxSmartLoginService {
  /**
   *Creates an instance of LoginService.
   * @memberof NgxSmartLoginService
   */
  constructor(private _apiSrv: ApiService) {}

  /**
   * Auth service
   *
   * @param {string} url
   * @param {string} user_cod
   * @param {string} password
   * @memberof NgxSmartLoginService
   */
  auth(url: string, user_cod: string, password: string) {
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
   * @memberof NgxSmartLoginService
   */
  private encrypt(user_cod: string, password: string) {
    const body = {
      user_cod: user_cod,
      password: password
    };

    return body;
  }
}
