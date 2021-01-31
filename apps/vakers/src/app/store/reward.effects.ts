import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { VakiReward } from '@vakers-data';
import { ShoppingCartService } from '@vakers-services/shopping-cart.service';
import { VakisService } from '@vakers-services/vakis.service';
import * as RewardActions from '@vakers-store/reward.actions';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

@Injectable()
export class RewardEffects {
  constructor(
    private vakisService: VakisService,
    private shoppingCartService: ShoppingCartService,
    private action$: Actions
  ) {}

  GetRewards$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(RewardActions.GetRewardsBegin),
      mergeMap((action) => {
        return this.vakisService.getVakiRewards().pipe(
          map((data: VakiReward[]) => {
            return RewardActions.GetRewardsSuccessful({ payload: data });
          }),
          catchError((error: Error) => {
            return of(RewardActions.RewardError(error));
          })
        );
      })
    )
  );

  GetCart$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(RewardActions.GetRewardCart),
      mergeMap((action) => {
        return this.shoppingCartService.cartRewards.pipe(
          map((data: VakiReward[]) => {
            console.log('Cart updated', { data });
            return RewardActions.GetRewardCartSuccessful({ payload: data });
          })
        );
      })
    )
  );

  AddToCart$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(RewardActions.AddRewardToCart),
      mergeMap((action) => {
        this.shoppingCartService.addReward(action.payload);
        return of(RewardActions.AddToCartSuccess());
      })
    )
  );
}
