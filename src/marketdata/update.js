import {Company} from './Company';

export class update {
  updatedCompany = new Company('', '', '', '', '');
  constructor(company, code, active, address, city) {
    this.company = company;
    this.code = code;
    this.active = active;
    this.address = address;
    this.city = city;
  }
  updateCompany() {
    this.updatedCompany.company = this.company.company
    if (this.updatedCompany.name === '') {
      this.updatedCompany.name = this.company.name;
    }
    if (this.updatedCompany.duration  === '') {
      this.updatedCompany.duration = this.company.duration;
    }
    if (this.updatedCompany.price  === '') {
      this.updatedCompany.price = this.company.price;
    }
    if (this.updatedCompany.description  === '') {
      this.updatedCompany.description = this.company.description;
    }
    this.updatedCompany.updateCompany(this.updatedCompany).subscribe();
  }
  companyNotChanged() {
    if (this.updatedCompany.company === '') {
      if (this.updatedCompany.active === '') {
        if (this.updatedCompany.address === '') {
          if (this.updatedCompany.city === '') {
            return true;
          }
        }
      }
    }
    return false;
  }
}
