import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Vaki, VakiReward } from '@vakers-data';
import { VakisService } from '@vakers-services/vakis.service';
import RewardState from '@vakers-store/reward.state';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as RewardActions from '@vakers-store/reward.actions';
import { CurrencyService } from '@vakers-services/currency.service';

@Component({
  selector: 'vaki-challenge-vaki-viewer',
  templateUrl: './vaki-viewer.component.html',
  styleUrls: ['./vaki-viewer.component.scss'],
})
export class VakiViewerComponent implements OnInit, OnDestroy {
  currentVaki: BehaviorSubject<Vaki>;
  subscription: Subject<void>;
  rewardsStore: Observable<RewardState>;
  currentCurrency;

  constructor(
    private route: ActivatedRoute,
    private vakisService: VakisService,
    private store: Store<{ rewards: RewardState }>,
    private currencyService: CurrencyService
  ) {
    this.subscription = new Subject();
    this.rewardsStore = this.store.pipe(select('rewards'));
    this.currentCurrency = this.currencyService.currentCurrency;
  }

  ngOnInit(): void {
    this.currentVaki = this.vakisService.currentVaki;
    this.currentVaki.subscribe(this.handleVaki.bind(this));
    this.route.params.subscribe(this.handleRoute.bind(this));
  }

  ngOnDestroy(): void {
    this.vakisService.unloadVaki();
    this.subscription.next();
    this.subscription.complete();
  }

  private handleRoute(params): void {
    const { vakiName } = params;
    this.vakisService.loadVaki(vakiName);
  }

  private handleVaki(vaki: Vaki): void {
    this.loadVakiRewards();
  }

  private loadVakiRewards(): void {
    this.rewardsStore.pipe(takeUntil(this.subscription)).subscribe();
    this.store.dispatch(RewardActions.GetRewardsBegin());
    this.store.dispatch(RewardActions.GetRewardCart());
  }

  public addRewardToCart(reward: VakiReward): void {
    this.store.dispatch(RewardActions.AddRewardToCart({ payload: reward }));
  }
}
