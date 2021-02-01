import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Vaki } from '@vakers-data';
import { NavService } from '@vakers-services/nav.service';
import { VakisService } from '@vakers-services/vakis.service';
import { Observable, BehaviorSubject } from 'rxjs';
@Component({
  selector: 'vaki-challenge-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('drawer') navDrawer: any;
  isHandset$: Observable<boolean>;
  currentVaki: BehaviorSubject<Vaki>;

  constructor(
    private navService: NavService,
    private vakisService: VakisService
  ) {
    this.currentVaki = this.vakisService.currentVaki;
  }

  ngOnInit(): void {
    this.isHandset$ = this.navService.isHandset;
  }

  ngAfterViewInit(): void {
    this.navService.setNavDrawer(this.navDrawer);
  }
}
