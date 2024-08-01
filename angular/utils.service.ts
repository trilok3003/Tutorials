import {Injectable} from '@angular/core';

@Injectable()
export class UtilsService {

  static pick(object, keys) {
    const res = {};
    keys.forEach((key) => {
      if (object[key] || object[key] === 0 || object[key] === false) {
        res[key] = object[key];
      }
    });
    return res;
  }

  static parseWeight(weight = '') {
    const w: any = weight + '';
    let result = '';
    const digits = '-0123456789.';
    for (const i in w) {
      if (digits.indexOf(w[i]) > -1) {
        result += w[i];
      }
    }
    return isNaN(parseFloat(result)) ? 0 : parseFloat(result);
  }

  static getDatepickerDate(date) {
    const array = date.split('-');
    const mainDate = {
      year: parseInt(array[0]),
      month: parseInt(array[1]),
      day: parseInt(array[2])
    };
    return mainDate;
  }

  static deleteEmptyKeys(object) {
    const obj = object;
    if (object) {
      // tslint:disable-next-line: forin
      for (const key in obj) {
        if (obj[key] === undefined || obj[key] === null || obj[key].length <= 0) {
          delete obj[key];
        }
        // if(typeof(obj[key]) === 'object'){
        //   obj[key].forEach((element,i) => {
        //     for (const innerKey in element) {
        //       if (obj[key][i][innerKey] === undefined || obj[key][i][innerKey] === null || obj[key][i][innerKey].length <= 0){
        //         delete obj[key][i][innerKey];
        //       }
        //     }
        //   });
        // }
      }
    }
    return obj;
  }

  static formControlValueInitializer(obj, keyName, nestedKey?, type?) {
    if (obj) {
      if (obj[`${keyName}`]) {
        if (type === 'OTHER_DETAILS') {
          return obj[`${keyName}`][`${nestedKey}`] ? obj[`${keyName}`][`${nestedKey}`] : '';
        }
        return obj[`${keyName}`];
      } else {
        return '';
      }
    } else {
      return '';
    }
  }

  static checkValue(key) {
    if (!key) {
      return '-'
    }
    return key;
  }
}