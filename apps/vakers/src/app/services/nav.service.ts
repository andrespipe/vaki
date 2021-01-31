import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { shareReplay } from 'rxjs/operators';
// import { MatDrawer } from '@angular/material';

@Injectable({
  providedIn: 'root',
})
export class NavService {
  isHandset: Observable<boolean>;

  _navDrawer: any;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.isHandset = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
      map((result) => result.matches),
      shareReplay()
    );
  }

  public toggleNav(): void {
    this._navDrawer.toggle();
  }

  public setNavDrawer(drawer: any): void {
    this._navDrawer = drawer;
  }
}
