import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ICurrency, Vaki } from '@vakers-data';
import { CurrencyService } from '@vakers-services/currency.service';
import { VakisService } from '@vakers-services/vakis.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'vaki-challenge-vaki-collector',
  templateUrl: './vaki-collector.component.html',
  styleUrls: ['./vaki-collector.component.scss'],
})
export class VakiCollectorComponent implements OnInit {
  currency: BehaviorSubject<ICurrency[]>;
  currentCurrency: BehaviorSubject<ICurrency>;
  currentVaki: BehaviorSubject<Vaki>;
  round = Math.round;

  formVakiCollect = this.fb.group({
    currency: [, Validators.required],
    qty: [, Validators.required],
  });

  constructor(
    private vakisService: VakisService,
    private currencyService: CurrencyService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.currentVaki = this.vakisService.currentVaki;
    this.currency = this.currencyService.currency;
    this.currentCurrency = this.currencyService.currentCurrency;
    this.currentCurrency.subscribe(this.handleCurrency.bind(this));
  }

  private handleCurrency(currency: ICurrency): void {
    if (currency) {
      const { code } = currency;
      this.formVakiCollect.get('currency').setValue(code);
    }
  }

  public handleCurrencyChange({ value }): void {
    this.currencyService.setCurrency(value);
  }
}
