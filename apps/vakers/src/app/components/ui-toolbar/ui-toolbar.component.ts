import { Component } from '@angular/core';
import { ICurrency } from '@vakers-data';
import { CurrencyService } from '@vakers-services/currency.service';
import { NavService } from '@vakers-services/nav.service';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'vaki-challenge-ui-toolbar',
  templateUrl: './ui-toolbar.component.html',
  styleUrls: ['./ui-toolbar.component.scss'],
})
export class UiToolbarComponent {
  currentCurrency: BehaviorSubject<ICurrency>;
  currency: BehaviorSubject<ICurrency[]>;

  constructor(
    private currencyService: CurrencyService,
    private navService: NavService
  ) {
    this.currency = this.currencyService.currency;
    this.currentCurrency = this.currencyService.currentCurrency;
  }

  public toggleNav(): void {
    this.navService.toggleNav();
  }

  public onSelectCurrency({ code }): void {
    this.currencyService.setCurrency(code);
  }
}
