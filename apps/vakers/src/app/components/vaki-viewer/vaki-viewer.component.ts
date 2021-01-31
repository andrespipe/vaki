import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Vaki } from '@vakers-data';
import { VakisService } from '@vakers-services/vakis.service';
import RewardState from '@vakers-store/reward.state';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as RewardActions from '@vakers-store/reward.actions';

@Component({
  selector: 'vaki-challenge-vaki-viewer',
  templateUrl: './vaki-viewer.component.html',
  styleUrls: ['./vaki-viewer.component.scss'],
})
export class VakiViewerComponent implements OnInit, OnDestroy {
  currentVaki: BehaviorSubject<Vaki>;
  subscription: Subject<void>;
  rewardsStore: Observable<RewardState>;

  constructor(
    private route: ActivatedRoute,
    private vakisService: VakisService,
    private store: Store<{ rewards: RewardState }>
  ) {
    this.subscription = new Subject();
    this.rewardsStore = this.store.pipe(select('rewards'));
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
    console.warn({ vaki });
    this.loadVakiRewards();
  }

  private loadVakiRewards(): void {
    this.rewardsStore.pipe(takeUntil(this.subscription)).subscribe();
    this.store.dispatch(RewardActions.GetRewardsBegin());
  }
}
