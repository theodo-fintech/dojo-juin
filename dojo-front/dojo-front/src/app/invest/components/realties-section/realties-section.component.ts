import {Component, Input} from '@angular/core';
import {PageEvent} from '@angular/material/paginator';
import {Realty} from 'src/shared/interface/realty';

@Component({
  selector: 'app-realties-section',
  templateUrl: './realties-section.component.html',
  styleUrls: ['./realties-section.component.scss'],
})
export class RealtiesSectionComponent {
  @Input() realties!: Realty[];

  pageSize!: number;
  currentPageIndex!: number;
  pagedRealties!: Realty[];

  ngOnInit() {
    this.pageSize = 5;
    this.currentPageIndex = 0;
    this.pagedRealties = this.realties.slice(0, this.pageSize);
  }

  handlePageEvent(event: PageEvent) {
    this.currentPageIndex = event.pageIndex;
    this.pagedRealties = this.realties.slice(0, this.pageSize);
  }
}
