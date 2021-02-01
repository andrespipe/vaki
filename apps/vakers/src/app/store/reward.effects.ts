import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { VakiReward } from '@vakers-data';
import { ShoppingCartService } from '@vakers-services/shopping-cart.service';
import { VakisService } from '@vakers-services/vakis.service';
import * as RewardActions from '@vakers-store/reward.actions';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';

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
        return this.vakisService.takeVakiReward(action.payload.id).pipe(
          map((data: Boolean) => {
            if (data) {
              const cartList = this.shoppingCartService.addReward(
                action.payload
              ).value;
              return RewardActions.AddToCartSuccess({ payload: cartList });
            } else {
              return RewardActions.AddToCartError(
                new Error('Unable to add to cart')
              );
            }
          })
        );
      })
    )
  );

  RemoveFromCart$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(RewardActions.RemoveFromCart),
      mergeMap((action) => {
        return this.vakisService.takeBackVakiReward(action.payload.id).pipe(
          map((data) => {
            if (data) {
              const value = this.shoppingCartService.removeReward(
                action.payload
              ).value;
              return RewardActions.RemoveFromCartSuccessful({ payload: value });
            } else {
              return RewardActions.RemoveFromCartError(
                new Error('Unable to remove from cart')
              );
            }
          })
        );
      })
    )
  );
}
