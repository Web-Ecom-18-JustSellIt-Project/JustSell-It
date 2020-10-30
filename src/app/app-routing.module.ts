import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './ui/layout/layout.component';

const routes: Routes = [
    { path: '', component: LayoutComponent, children: [
        {
          path: '',
          // If this path is the 'full' match...
          pathMatch: 'full',
          // ...redirect to this route.
          redirectTo: '/landingpage',
        },
        // Here we will add our application pages
        { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
        { path: 'about', loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule) },
        { path: 'landingpage', loadChildren: () => import('./pages/landingpage/landingpage.module').then(m => m.LandingpageModule) },
        { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
        { path: 'cart', loadChildren: () => import('./pages/cart/cart.module').then(m => m.CartModule) },
        { path: 'user', loadChildren: () => import('./pages/user/user.module').then(m => m.UserModule) },
        { path: 'admin', loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule) },
        { path: 'signup', loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupModule) },
        { path: 'vendor', loadChildren: () => import('./pages/vendor/vendor.module').then(m => m.VendorModule) },


      ],
    },
    

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
