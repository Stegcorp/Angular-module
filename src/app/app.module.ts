import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './components/app/app.component';
import {HttpClientModule} from '@angular/common/http';
import {UsersComponent} from './components/users/users.component';
import {RouterModule, Routes} from '@angular/router';
import {SingleUserComponent} from './components/single-user/single-user.component';

const routes: Routes = [
  {
    path: 'users', component: UsersComponent,
    children: [
      {path: 'details/:id', component: SingleUserComponent}
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    SingleUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
