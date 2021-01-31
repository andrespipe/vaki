import { VakiReward } from '@vakers-data';

export default class RewardState {
  rewards: Array<VakiReward>;
  rewardsCart: Array<VakiReward>;
  rewardError: Error;
}

export const initializeState = (): RewardState => ({
  rewards: [],
  rewardsCart: [],
  rewardError: null,
});
