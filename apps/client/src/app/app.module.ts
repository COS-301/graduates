import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FeatureModule as ClientShellFeatureModule } from '@graduates/client/shell/feature';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

//component imports
import { StudentProfileModule } from '@graduates/client/student-profile/feature';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    ClientShellFeatureModule,
    StudentProfileModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
