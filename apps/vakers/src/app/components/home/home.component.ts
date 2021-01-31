import { Component, OnInit } from '@angular/core';
import { Vaki } from '@vakers-data';
import { VakisService } from '@vakers-services/vakis.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'vaki-challenge-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  vakisList = new BehaviorSubject<Vaki[]>(null);

  constructor(private vakisService: VakisService) {}

  ngOnInit(): void {
    this.loadVakisList();
  }

  private loadVakisList(): void {
    this.vakisService.getVakisList().subscribe({
      next: this.handleVakisList.bind(this),
      error: this.handleLoadError.bind(this),
    });
  }

  private handleVakisList(vakisList: Vaki[]): void {
    this.vakisList.next(vakisList);
  }

  private handleLoadError(e: Error): void {
    console.error(e);
  }
}
