import {Injectable} from '@angular/core';
import {environment} from '@environment/environment';

@Injectable()
export class AppUrl {
    static get APP_URL(): string {
        return environment.appUrl + 'api/';
        // return  'api/';
      }
      static get ADMIN_APP_URL(): string {
        return environment.appUrl + 'admin/';
        // return 'admin/';
      }
      static IMAGE_PROXY_URL(height = 400, width = 500): string {
        return environment.imageUrl;
      }
      static get CLIENT_ADMIN_HR_POLICIES(): string {
        return AppUrl.APP_URL + 'hr-policies';
      }
}