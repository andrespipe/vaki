import { Component, OnInit } from '@angular/core';
import RewardState from '@vakers-store/reward.state';
import { select, Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { VakiReward } from '@vakers-data';
import * as RewardActions from '@vakers-store/reward.actions';
import { CurrencyService } from '@vakers-services/currency.service';

@Component({
  selector: 'vaki-challenge-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  parseInt = parseInt;
  rewardsStore: Observable<RewardState>;
  isCartOnView = new BehaviorSubject<boolean>(false);
  currentCurrency;

  constructor(
    private store: Store<{ rewards: RewardState }>,
    private currencyService: CurrencyService
  ) {
    this.rewardsStore = this.store.pipe(select('rewards'));
    this.currentCurrency = this.currencyService.currentCurrency;
  }

  ngOnInit(): void {}

  public toggleCart(): void {
    const {
      isCartOnView: { value },
    } = this;
    this.isCartOnView.next(!value);
  }

  public removeFromCart(reward: VakiReward): void {
    this.store.dispatch(RewardActions.RemoveFromCart({ payload: reward }));
  }
}
