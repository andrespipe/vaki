import { createAction, props } from '@ngrx/store';
import { VakiReward } from '@vakers-data';

export const GetRewards = createAction('[Reward] - Get rewards');
export const GetRewardsBegin = createAction('[Reward] - Get reward begin');

export const GetRewardsSuccessful = createAction(
  '[Reward] - Get rewards successful',
  props<{ payload: VakiReward[] }>()
);

export const GetRewardCart = createAction('[Reward] - Get rewards cart');

export const GetRewardCartSuccessful = createAction(
  '[Reward] - Get rewards cart successful',
  props<{ payload: VakiReward[] }>()
);

export const AddRewardToCart = createAction(
  '[Reward] - Add to cart',
  props<{ payload: VakiReward }>()
);

export const AddToCartSuccess = createAction(
  '[Reward] - Add to cart successful'
);

export const RemoveFromCart = createAction(
  '[Reward] - Remove from cart',
  props<{ payload: VakiReward }>()
);

export const RemoveFromCartSuccessful = createAction(
  '[Reward] - Remove from cart successful'
);

export const RewardError = createAction('[Reward] - Error', props<Error>());
