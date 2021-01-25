import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { UiToolbarComponent } from './components/ui-toolbar/ui-toolbar.component';
import { FormsModule } from '@angular/forms';
import { ShoppingCartModule } from './modules/shopping-cart/shopping-cart.module';

@NgModule({
  declarations: [AppComponent, UiToolbarComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,
    ShoppingCartModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
