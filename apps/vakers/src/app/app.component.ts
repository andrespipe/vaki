import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NavService } from '@vakers-services/nav.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'vaki-challenge-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('drawer') navDrawer: any;
  isHandset$: Observable<boolean>;

  constructor(private navService: NavService) {}

  ngOnInit(): void {
    this.isHandset$ = this.navService.isHandset;
  }

  ngAfterViewInit(): void {
    this.navService.setNavDrawer(this.navDrawer);
  }
}
