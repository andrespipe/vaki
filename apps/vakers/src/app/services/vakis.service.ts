import { Injectable } from '@angular/core';
import { Vaki, vaki, vakiReward, VakiReward } from '@vakers-data';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class VakisService {
  currentVaki = new BehaviorSubject<Vaki>(null);
  isVakiLoading = new BehaviorSubject<boolean>(false);

  public loadVaki(url: string): void {
    console.warn('loadVaki', url);
    this.isVakiLoading.next(true);
    setTimeout(() => {
      this.currentVaki.next(vaki);
      this.isVakiLoading.next(false);
    }, 1000);
  }

  public unloadVaki(): void {
    this.currentVaki.next(null);
  }

  public getVakisList(): Observable<Vaki[]> {
    const vakiList: Vaki[] = new Array(10);
    vakiList.fill(vaki);
    return of(vakiList).pipe(delay(1000));
  }

  public getVakiRewards(): Observable<VakiReward[]> {
    const {
      currentVaki: { value: vaki },
    } = this;
    if (vaki) {
      const vakiRewards: VakiReward[] = new Array(10);
      vakiRewards.fill(vakiReward);
      return of(vakiRewards).pipe(delay(1000));
    }
    return of([]);
  }
}
