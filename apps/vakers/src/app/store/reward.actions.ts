import { createAction, props } from '@ngrx/store';
import { VakiReward } from '@vakers-data';

export const GetRewards = createAction('[Reward] - Get rewards');
export const GetRewardsBegin = createAction('[Reward] - Get reward begin');

export const GetRewardsSuccessful = createAction(
  '[Reward] - Get rewards successful',
  props<{ payload: VakiReward[] }>()
);

export const RewardError = createAction('[Reward] - Error', props<Error>());
