import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TimeToEnd } from './pipes/time-to-end.pipe';
import { UiToolbarComponent } from './components/ui-toolbar/ui-toolbar.component';
import { VakiViewerComponent } from './components/vaki-viewer/vaki-viewer.component';
import { VakiCurrencyPipe } from './pipes/vaki-currency.pipe';
import { VakiCollectorComponent } from './components/vaki-collector/vaki-collector.component';

import { AppRoutingModule } from './modules/app-routing.module';
import { DataModule } from './modules/data.module';
import { SharedUiModule } from './modules/shared-ui.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TimeToEnd,
    UiToolbarComponent,
    VakiCollectorComponent,
    VakiCurrencyPipe,
    VakiViewerComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    DataModule,
    FormsModule,
    ReactiveFormsModule,
    SharedUiModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
