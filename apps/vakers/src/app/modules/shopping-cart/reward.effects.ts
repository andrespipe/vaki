import { Injectable } from '@angular/core';
import { Actions, createEffect } from '@ngrx/effects';

@Injectable()
export class RewardEffects {
  constructor(private actions$: Actions) {}
}
