import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { CompanyTableElement } from './shared/company-table-element';

import { URLSearchParams } from "@angular/http";

// const List: CompanyTableElement[] = [
//   { id: 1, companyFullName: 'Ma' },
//   { id: 2, companyFullName: 'Mb' },
//   { id: 3, companyFullName: 'Mc' },
//   { id: 11, companyFullName: 'Md' },
//   // { id: 22, companyFullName: 'Me' },
//   // { id: 31, companyFullName: 'Mf' },
//   // { id: 41, companyFullName: 'Mh' },
//   // { id: 22, companyFullName: 'Mn' },
//   // { id: 23, companyFullName: 'Mr' },
//   // { id: 21, companyFullName: 'Mu' },
//   // { id: 4, companyFullName: 'Mk' },
//   // { id: 5, companyFullName: 'Mz' }
// ];
const RList: CompanyTableElement[] = [
  {
    Id: 1, Name: 'Ma', ShortName: 'M',
    Address: 'ss',
    CompanyWebSite: 'ss',
    ContactName: 'ff',
    ContactPhone: 'dd',
    ContactEmail: 'ff',
    LogoURL: 'ee',
    Latitude: 0,
    Longitude: 0,
    CultureInfoId: 'j',
    CultureInfoName: 'g'
  },
  {
    Id: 1, Name: 'Ma', ShortName: 'M',
    Address: 'ss',
    CompanyWebSite: 'ss',
    ContactName: 'ff',
    ContactPhone: 'dd',
    ContactEmail: 'ff',
    LogoURL: 'ee',
    Latitude: 0,
    Longitude: 0,
    CultureInfoId: 'j',
    CultureInfoName: 'g'
  }

];

@Injectable()
export class CompanyService {

  constructor(private http: Http) { }
  getCompanyTableElement() {
    return this.http.get('http://superadmin.iot-smartfactory.net/Services/reqActionWithoutAuth.aspx?m=get&ep=/admin-api/Company')
      .map(res => res.json());
  }
  getAnotherCompanyTableElement(): CompanyTableElement[] {
    return RList;
  }
  getCurrentTime() {
    return this.http.get('http://superadmin.iot-smartfactory.net/Services/reqActionWithoutAuth.aspx?m=get&ep=/admin-api/Company')
      .map(res => res.json());
  }
  deleteCompanyTableElement(id: number) {
    return this.http.post('http://superadmin.iot-smartfactory.net/Services/reqActionWithoutAuth.aspx?m=delete&ep=/admin-api/Company/' + id, "")
      .map(res => res.json());
  }
  saveCompanyTableElement(data:CompanyTableElement) {
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('Name', data.Name);
    urlSearchParams.append('ShortName', data.ShortName);
    urlSearchParams.append('Address', data.Address);
    urlSearchParams.append('CompanyWebSite', data.CompanyWebSite);
    urlSearchParams.append('ContactEmail', data.ContactEmail);
    urlSearchParams.append('ContactName', data.ContactName);
    urlSearchParams.append('ContactPhone', data.ContactPhone);
    urlSearchParams.append('LogoURL', data.LogoURL);
    urlSearchParams.append('Longitude', data.Longitude.toString());
    urlSearchParams.append('Latitude', data.Latitude.toString());
    urlSearchParams.append('CultureInfoId', data.CultureInfoId);
    urlSearchParams.append('CultureInfoName', data.CultureInfoName);
    let body = urlSearchParams.toString();

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post('http://superadmin.iot-smartfactory.net/Services/reqActionWithoutAuth.aspx?m=put&ep=/admin-api/Company/'+data.Id, body, {
      headers: headers
    }).map(res => res.json());
  }
  addNewCompanyTableElement(data: CompanyTableElement) {
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('Name', data.Name);
    urlSearchParams.append('ShortName', data.ShortName);
    urlSearchParams.append('Address', data.Address);
    urlSearchParams.append('CompanyWebSite', data.CompanyWebSite);
    urlSearchParams.append('ContactEmail', data.ContactEmail);
    urlSearchParams.append('ContactName', data.ContactName);
    urlSearchParams.append('ContactPhone', data.ContactPhone);
    urlSearchParams.append('LogoURL', data.LogoURL);
    urlSearchParams.append('Longitude', data.Longitude.toString());
    urlSearchParams.append('Latitude', data.Latitude.toString());
    urlSearchParams.append('CultureInfoId', data.CultureInfoId);
    urlSearchParams.append('CultureInfoName', data.CultureInfoName);
    let body = urlSearchParams.toString();

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post('http://superadmin.iot-smartfactory.net/Services/reqActionWithoutAuth.aspx?m=post&ep=/admin-api/Company', body, {
      headers: headers
    }).map(res => res.json());
  }
}
