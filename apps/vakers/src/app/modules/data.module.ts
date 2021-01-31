import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { EffectsModule } from '@ngrx/effects';
import { environment } from '@vakers-env';
import { NgModule } from '@angular/core';
import { RewardEffects } from '@vakers-store/reward.effects';
import { RewardReducer } from '@vakers-store/reducers/reward.reducer';
import { StoreModule } from '@ngrx/store';

@NgModule({
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    StoreModule.forRoot({ rewards: RewardReducer }),
    EffectsModule.forRoot([RewardEffects]),
  ],
})
export class DataModule {}
