import { Component, OnInit } from '@angular/core';
import {map, take} from 'rxjs';
import { REALTY_TYPE, Realty } from '../../shared/interface/realty';
import { UserService } from '../home/services/user.service';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.scss'],
})
export class AssetsComponent implements OnInit {
  apartments: Realty[] = [];
  participatives: Realty[] = [];

  constructor(
    private userService: UserService
  ) {}

  ngOnInit() {
    this.fetchRealties()
  }

  private fetchRealties(){
    this.userService
      .fetchUserRealties()
      .pipe(map((assets) => assets.map((asset) => asset.realty)))
      .pipe(take(1))
      .subscribe((realties) => {
        this.apartments = this.filterRealtiesByType(
          realties,
          REALTY_TYPE.APARTMENT
        );
        this.participatives = this.filterRealtiesByType(
          realties,
          REALTY_TYPE.PARTICIPATIVE
        );
      });
  }

  private filterRealtiesByType(realties: Realty[], type: REALTY_TYPE) {
    return realties.filter((realty) => realty.deedType === type);
  }

  refreshRealties() {
    this.fetchRealties()
  }
}
