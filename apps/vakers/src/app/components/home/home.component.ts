import { Component, OnInit } from '@angular/core';
import { Vaki } from '@vakers-data';
import { VakisService } from '@vakers-services/vakis.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'vaki-challenge-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  vakisList: Observable<Vaki[]>;

  constructor(private vakisService: VakisService) {}

  ngOnInit(): void {
    this.vakisList = this.vakisService.vakisList;
  }
}
