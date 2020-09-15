import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FirstPageComponent } from './first-page/first-page.component';
import { SyncStatusComponent } from './sync-status/sync-status.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    SyncStatusComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
