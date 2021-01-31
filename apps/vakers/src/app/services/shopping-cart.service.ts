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
    // this.cartRewards.subscribe((el) => console.log('cartRewards', { el }));
  }

  public addReward(reward: VakiReward): void {
    console.log('add to cart', reward);
    // const {
    //   cartRewards: { value: rewards },
    // } = this;
    // const newRewards = [...rewards, reward];
    // this.cartRewards.next(newRewards);
  }

  public removeReward(rewardId: string): void {
    const {
      cartRewards: { value: rewards },
    } = this;
    const rewardIdx = rewards.findIndex((reward) => reward.id === rewardId);
    const newRewards = [...rewards];
    newRewards.splice(rewardIdx, 1);
    this.cartRewards.next(newRewards);
  }
}
