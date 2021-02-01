import { createReducer, on } from '@ngrx/store';
import RewardState, { initializeState } from '@vakers-store/reward.state';
import * as RewardActions from '@vakers-store/reward.actions';
import { Action } from '@ngrx/store';
import { VakiReward } from '@vakers-data';

const initialState = initializeState();

const rewardReducer = createReducer(
  initialState,
  on(RewardActions.GetRewardsBegin, (state) => state),
  on(RewardActions.GetRewards, (state) => {
    return state;
  }),
  on(RewardActions.GetRewardsSuccessful, (state, { payload }) => {
    return { ...state, rewards: payload };
  }),
  on(RewardActions.GetRewardCart, (state) => state),
  on(RewardActions.GetRewardCartSuccessful, (state, { payload }) => {
    return { ...state, rewardsCart: payload, totalPrice: calcTotal(payload) };
  }),
  on(RewardActions.AddRewardToCart, (state) => {
    return state;
  }),
  on(RewardActions.AddToCartSuccess, (state, { payload }) => {
    return { ...state, rewardsCart: payload, totalPrice: calcTotal(payload) };
  }),
  on(RewardActions.RemoveFromCartSuccessful, (state, { payload }) => {
    return { ...state, rewardsCart: payload, totalPrice: calcTotal(payload) };
  }),
  on(
    RewardActions.RewardError,
    (state: RewardState, error: Error): RewardState => {
      console.error(error);
      return { ...state, rewardError: error };
    }
  )
);

const calcTotal = (vakiRewards: VakiReward[]): number => {
  if (vakiRewards && vakiRewards.length) {
    const total = vakiRewards.reduce(
      (pre, cur) => pre + parseInt(cur.value),
      0
    );
    return total;
  }
  return 0;
};

export function RewardReducer(
  state: RewardState | undefined,
  action: Action
): RewardState {
  return rewardReducer(state, action);
}
