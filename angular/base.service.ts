import {HttpClient, HttpErrorResponse, HttpEventType, HttpHeaders, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {AlertService} from './alert.service';
import {UtilsService} from '@helpers/utils/utils.service';
import {CustomParamsEncoderHelper} from './customEncoder.helper.service';
import {AppUrl} from '@shared/constants';

/**
 * @title Base Service for Reusable
 */
@Injectable()
export class BaseService {
  constructor(public readonly http: HttpClient, public readonly alertService: AlertService) {
  }

  public joinMessages(array) {
    let string = '';
    array.forEach(message => {
      string = string + message;
    });
    return string;
  }

  public postRequest(url, data = {}, deleteEmptyKeys = true, showPopup = true) {
    if (deleteEmptyKeys) {
      data = UtilsService.deleteEmptyKeys(data);
      // data = UtilsService.filterEmptyFields(data);
    }
    return this.http.post(url, data).pipe(
      map(res => {
        if (res['message'] && showPopup) {
          this.alertService.showSuccess({title: 'Success', message: res['message']});
        }
        return res['data'];
      }),
      catchError(err => {
        return this.handleError(err);
      })
    );
  }

  public patchRequest(url, data = {}) {
    data = UtilsService.deleteEmptyKeys(data);
    return this.http.patch(url, data).pipe(
      map(res => {
        if (res['message']) {
          this.alertService.showSuccess({title: 'Success', message: res['message']});
        }
        return res['data'];
      }),
      catchError(err => {
        return this.handleError(err);
      })
    );
  }

  public deleteRequest(url, data = {}, deleteEmptyKeys = true) {
    if (deleteEmptyKeys) {
      data = UtilsService.deleteEmptyKeys(data);
    }
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: data
    }
    return this.http.delete(url, options).pipe(
      map(res => {
        if (res['message']) {
          this.alertService.showSuccess({title: 'Success', message: res['message']});
        }
        return res['data'];
      }),
      catchError(err => {
        return this.handleError(err);
      })
    );
  }

  public putRequest(url, data = {}, deleteEmptyKeys = true, alertBlock = false) {
    if (deleteEmptyKeys) {
      data = UtilsService.deleteEmptyKeys(data);
      // data = UtilsService.filterEmptyFields(data);
    }
    return this.http.put(url, data).pipe(
      map(res => {
        if (res['message'] && !alertBlock) {
          this.alertService.showSuccess({title: 'Success', message: res['message']});
        }
        return res['data'];
      }),
      catchError(err => {
        return this.handleError(err);
      })
    );
  }

  toHttpParams(params) {
    return Object.getOwnPropertyNames(params)
      .reduce((p, key) => p.set(key, params[key]), new HttpParams({encoder: new CustomParamsEncoderHelper()}));
  }

  public getRequest(url, params = {}): Observable<any> {
    params = this.toHttpParams(params);
    return this.http.get(url, {params}).pipe(
      map(res => {
        return res['data'];
      }),
      catchError(err => {
        return this.handleError(err);
      })
    );
  }

  public handleError(error: HttpErrorResponse) {
    if (error instanceof ErrorEvent) {
      console.error('This is client side error:', `Error: ${error.error.message}`);
    } else {
      console.error('This is server side error:', `Error: ${error.error.error} and status: ${error.status}`);
    }
    switch (error.error.type) {
      case 'INTERNAL_SERVER_ERROR':
      case 'FORBIDDEN_ERROR':
      case 'INVALID_CREDENTIALS':
      case 'BUSINESS_LOGIC_ERROR':
      case 'RESOURCE_NOT_FOUND':
        this.alertService.showErrors(error.error.error);
        return throwError(error.error.error);
      case 'VALIDATION':
        const errorMessageObject = error.error.message;
        const showErrorMessageObject = this.returnArrayOfErrors(errorMessageObject);
        this.alertService.showErrors(showErrorMessageObject);
        this.alertService.setValidationsErrors(showErrorMessageObject);
        return throwError(showErrorMessageObject);
      default:
        return throwError(error.error.error);
    }
    return throwError(error);
  }

  public returnArrayOfErrors(errorMessageObject) {
    const parsedArray = [];
    Object.keys(errorMessageObject).forEach(message => {
      const keyName = (message.split('.').join(' ')).replace(/([A-Z])/g, ' $1').replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
      const description = this.joinMessages(errorMessageObject[message]).split('.').join(' ');
      const errorObject = {
        keyName,
        description,
        completeMessage: `${keyName} : ${description}`
      };
      parsedArray.push(errorObject);
    });
    return parsedArray;
  }

  public uploadRequest(uploadURL, data) {
    return this.http.post<any>(uploadURL, data, {
      reportProgress: true,
      observe: 'events',
    }).pipe(map((event) => {

        switch (event.type) {

          case HttpEventType.UploadProgress:
            const progress = Math.round(100 * event.loaded / event.total);
            return {status: 'progress', message: progress};

          case HttpEventType.Response:
            return event.body;
          default:
            return `Unhandled event: ${event.type}`;
        }
      })
    );
  }
 public getPopUpDetailsTicketById(params) {
    // params = {id, type};
    return this.getRequest(AppUrl.GET_POP_UP_DETAILS_TICKET_BY_ID, params)
  }
}

/**
 *  Base Service
 */
