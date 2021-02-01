import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Vaki, VakiReward } from '@vakers-data';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VakisService {
  vakisList: Observable<Vaki[]>;
  currentVaki = new BehaviorSubject<Vaki>(null);
  vakiUrl = new BehaviorSubject<string>(null);

  constructor(private firestore: AngularFirestore) {
    this.vakisList = this.firestore.collection<Vaki>('Vaki').valueChanges();
    this.setupVakiLoader();
  }

  private setupVakiLoader(): void {
    this.vakiUrl.subscribe((url) => {
      this.firestore
        .collection<Vaki>('Vaki', (ref) => ref.where('url', '==', url))
        .valueChanges()
        .subscribe((myVakis: Vaki[]) => {
          const currentVaki = myVakis?.length ? myVakis[0] : null;
          this.currentVaki.next(currentVaki);
        });
    });
  }

  public loadVaki(url: string): void {
    this.vakiUrl.next(url);
  }

  public unloadVaki(): void {
    this.vakiUrl.next(null);
  }

  public getVakiRewards(): Observable<VakiReward[]> {
    const {
      currentVaki: { value: vaki },
    } = this;
    if (vaki) {
      return this.firestore
        .collection<VakiReward>('VakiReward', (ref) =>
          ref.where('key', '==', vaki.url)
        )
        .valueChanges({ idField: 'id' });
    }
    return of([]);
  }

  public takeVakiReward(rewardId: string): Observable<boolean> {
    const observable = new Observable<boolean>((subscriber) => {
      const ref = this.firestore
        .collection('VakiReward')
        .doc<VakiReward>(rewardId);
      ref
        .get()
        .toPromise()
        .then((reward) => {
          const claimed = reward.get('claimed');
          ref.update({ claimed: claimed + 1 });
          subscriber.next(true);
          // const quantityAvailable = reward.get('quantityAvailable');
          // if (claimed < quantityAvailable) {
          //   ref.update({ claimed: claimed + 1 });
          //   subscriber.next(true);
          // } else {
          //   subscriber.next(false);
          // }
          subscriber.complete();
        });
    });

    return observable;
  }

  public takeBackVakiReward(rewardId: string): void {
    const ref = this.firestore
      .collection('VakiReward')
      .doc<VakiReward>(rewardId);
    ref
      .get()
      .toPromise()
      .then((reward) => {
        const claimed = reward.get('claimed');
        if (claimed > 0) {
          ref.update({ claimed: claimed - 1 });
        }
      });
  }
}
