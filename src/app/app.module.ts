import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {AppRouting} from './app.routing';
import {AuthModule} from './modules/auth/auth.module';
import {LoggedModule} from './modules/auth/logged.module';
import {AuthorizationService} from './modules/services/authorization.service';
import {LocalStorageService} from './modules/services/localstorage.service';
import {ToastNoAnimationModule} from 'ngx-toastr';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CustomFormsModule} from 'ng2-validation';
import {
  HTTP_INTERCEPTORS,
  HttpClientModule
} from '@angular/common/http';
import {NotificationService} from './modules/services/notification.service';
import {RestService} from './rest/rest.service';
import {AuthInterceptor} from './rest/auth.interceptor';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule, SETTINGS} from '@angular/fire/firestore';
import {environment} from '../environments/environment';
import {NgAuthService} from './modules/services/auth.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MaterialModule} from './modules/material/material.module';
import {PortalModule} from './containers/portal/portal.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRouting,
    AuthModule,
    LoggedModule,
    FormsModule,
    CustomFormsModule,
    HttpClientModule,
    ToastNoAnimationModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    PortalModule,
  ],
  providers: [
    AuthorizationService,
    LocalStorageService,
    RestService,
    NgAuthService,
    NotificationService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: SETTINGS, useValue: {experimentalAutoDetectLongPolling: true}},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
