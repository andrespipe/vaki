import { Component, OnInit } from '@angular/core';
import { ICurrency } from '@vakers-data';
import { CurrencyService } from '@vakers-services/currency.service';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'vaki-challenge-ui-toolbar',
  templateUrl: './ui-toolbar.component.html',
  styleUrls: ['./ui-toolbar.component.scss'],
})
export class UiToolbarComponent implements OnInit {
  selectedCountryCurrency = 'COP';
  currency: BehaviorSubject<ICurrency[]>;

  constructor(private currencyService: CurrencyService) {
    this.currency = this.currencyService.currency;
  }

  ngOnInit(): void {}
}
