import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    loadChildren: () =>
      import('./home/home-module')
        .then(m => m.HomeModule)
  },

  {
    path: 'products',
    loadChildren: () =>
      import('./products/products-module')
        .then(m => m.ProductsModule)
  },

  {
    path: 'orders',
    loadChildren: () =>
      import('./orders/orders-module')
        .then(m => m.OrdersModule)
  },

  {
    path: 'cart',
    loadChildren: () =>
      import('./cart/cart-module')
        .then(m => m.CartModule)
  }

];