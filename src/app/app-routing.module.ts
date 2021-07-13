import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'welcome',
  },
  {
    path: 'welcome',
    loadChildren: () =>
      import('./public/welcome/welcome.module').then(
        (m) => m.WelcomePageModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./public/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./public/signup/signup.module').then((m) => m.SignupPageModule),
  },
  {
    path: 'terms',
    loadChildren: () =>
      import('./public/terms/terms.module').then((m) => m.TermsPageModule),
  },
  {
    path: 'privacy',
    loadChildren: () =>
      import('./public/privacy/privacy.module').then(
        (m) => m.PrivacyPageModule
      ),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
