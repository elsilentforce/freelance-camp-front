import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { HomePageComponent } from './homepage/homepage.component'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
