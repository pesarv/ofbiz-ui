import {HttpClient} from 'aurelia-fetch-client';
import {Company} from './Company';

export class Marketdata {
  companies = [];
  pageSize = 10;
  filters = [
    {value: '', keys: ['company', 'code', 'active', 'address']}
  ];

  constructor() {
    this.company = '';
    this.code = '';
    this.active = '';
    this.address = '';
    this.city = '';
  }

  bind() {
    let client = new HttpClient();

    return client.fetch('data.json')
      .then(response => response.json())
      .then(companies => this.companies = companies);
  }

  submitData() {
    let company = {
      company: this.company,
      code: this.code,
      active: this.active,
      address: this.address,
      city: this.city
    };

    this.companies.unshift(company);
  }

  addCompany() {
    if (this.active && this.address && this.code && this.city && this.company) {
      this.companies.push(new Company(this.company, this.code, this.active, this.active, this.city));

      this.company = '';
      this.code = '';
      this.active = '';
      this.address = '';
      this.city = '';
    }
  }
  updateCompany() {
    if (this.active && this.address && this.code && this.city && this.company) {
      this.companies.push(new Company(this.company, this.code, this.active, this.active, this.city));

      this.company = '';
      this.code = '';
      this.active = '';
      this.address = '';
      this.city = '';
    }
  }
  removeCompany(company) {
    let index = this.companies.indexOf(company);
    if (index !== -1) {
      this.companies.splice(index, 1);
    }
    this.removeCompanyFromDatabase(index);
  }
  removeCompanyFromDatabase(index) {
    let companies = JSON.parse(localStorage.getItem('companies'));
    companies.splice(index, 1);
    localStorage.setItem('companies', JSON.stringify(companies));
  }
}
