import { Injectable } from '@angular/core';
import { VakiReward } from '@vakers-data';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  cartRewards: BehaviorSubject<VakiReward[]>;

  constructor() {
    this.cartRewards = new BehaviorSubject([]);
  }

  public addReward(reward: VakiReward): BehaviorSubject<VakiReward[]> {
    const {
      cartRewards: { value: rewards },
    } = this;
    const newRewards = [...rewards, reward];
    this.cartRewards.next(newRewards);
    return this.cartRewards;
  }

  public removeReward(reward: VakiReward): BehaviorSubject<VakiReward[]> {
    const {
      cartRewards: { value: rewards },
    } = this;
    const rewardIdx = rewards.findIndex((r) => r.id === reward.id);
    if (rewardIdx > -1) {
      const newRewards = [...rewards];
      newRewards.splice(rewardIdx, 1);
      this.cartRewards.next(newRewards);
    }

    return this.cartRewards;
  }
}
