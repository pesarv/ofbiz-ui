import { bindable } from 'aurelia-framework';
import { Router } from "aurelia-router";

@inject(Router)
export class Shuffle {
  @bindable selectProduct;

  constructor(router) {
    this.router = router;
  }

  // TODO: should not be hard-coded, but come from BE?
  products = [
    {
      name: 'project',
      url: 'project'
    },
    {
      name: 'crm',
      url: '' // TODO: replace with proper url
    },
    {
      name: 'accounting',
      url: ''
    },
    {
      name: 'contacts',
      url: ''
    },
    {
      name: 'manufacturing',
      url: ''
    },
    {
      name: 'marketing',
      url: ''
    },
    {
      name: 'invoicing',
      url: ''
    }
  ];

  handleSelect(product) {
    this.selectProduct({ product: product });
  }

  redirectTo(s) {
    if (s === 'marketing') {
      this.router.navigate('/affiliate-manager');
    }
  }

}
