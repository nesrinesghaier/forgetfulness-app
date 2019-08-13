import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';
import {Ionic4DatepickerModule} from '@logisticinfotech/ionic4-datepicker';
import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {NotificationComponent} from './home/dates/notification/notification.component';
import {CreditModalPageModule} from './home/credit/modal/credit-modal/credit-modal.module';

@NgModule({
    declarations: [AppComponent, NotificationComponent],
    entryComponents: [NotificationComponent],
    imports: [BrowserModule, IonicModule.forRoot(), Ionic4DatepickerModule, AppRoutingModule, CreditModalPageModule],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
