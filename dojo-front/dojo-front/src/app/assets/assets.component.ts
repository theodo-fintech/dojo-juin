import { Component, OnInit } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { RealtiesService } from 'src/shared/services/realties.service';
import { REALTY_TYPE, Realty } from '../../shared/interface/realty';
import { UserService } from '../home/services/user.service';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.scss'],
})
export class AssetsComponent implements OnInit {
  assets$!: Observable<Realty[]>;
  apartments: Realty[] = [];
  participatives: Realty[] = [];

  constructor(
    private realtiesService: RealtiesService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userService
      .fetchUserRealties()
      .pipe(map((assets) => assets.map((asset) => asset.realty)))
      .pipe(tap(console.log))
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
}
