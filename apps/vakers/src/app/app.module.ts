import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { UiToolbarComponent } from './components/ui-toolbar/ui-toolbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { HomeComponent } from './components/home/home.component';
import { VakiViewerComponent } from './components/vaki-viewer/vaki-viewer.component';
import { AppRoutingModule } from './modules/app-routing.module';
import { StoreModule } from '@ngrx/store';
import { RewardReducer } from '@vakers-store/reducers/reward.reducer';
import { EffectsModule } from '@ngrx/effects';
import { RewardEffects } from '@vakers-store/reward.effects';
import { VakiCollectorComponent } from './components/vaki-collector/vaki-collector.component';
import { TimeToEnd } from './pipes/time-to-end.pipe';
import { VakiCurrencyPipe } from './pipes/vaki-currency.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UiToolbarComponent,
    HomeComponent,
    VakiViewerComponent,
    VakiCollectorComponent,
    TimeToEnd,
    VakiCurrencyPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatBadgeModule,
    MatSelectModule,
    MatTabsModule,
    MatInputModule,
    MatMenuModule,
    MatFormFieldModule,
    MatProgressBarModule,
    AppRoutingModule,
    StoreModule.forRoot({ rewards: RewardReducer }),
    EffectsModule.forRoot([RewardEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
