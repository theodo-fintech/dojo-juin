import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { RealtiesService } from 'src/shared/services/realties.service';
import { REALTY_TYPE, Realty } from '../../shared/interface/realty';

@Component({
  selector: 'app-invest',
  templateUrl: './invest.component.html',
  styleUrls: ['./invest.component.scss'],
})
export class InvestComponent implements OnInit {
  filtersForm!: FormGroup;

  protected readonly REALTY_TYPE = REALTY_TYPE;
  availableRealties$!: Observable<Realty[]>;

  constructor(
    private fb: FormBuilder,
    private realtiesService: RealtiesService,
  ) {}

  ngOnInit() {
    this.filtersForm = this.fb.group({
      type: ['', { nonNullable: true }],
    });

    this.availableRealties$ = this.realtiesService.fetchRealties();

    this.onTypeChanges();
  }

  onTypeChanges() {
    this.type?.valueChanges.subscribe((type) => {
      this.availableRealties$ = this.realtiesService.fetchRealties(type);
    });
  }

  get type() {
    return this.filtersForm.get('type');
  }

  refreshRealties() {
    this.availableRealties$ = this.realtiesService.fetchRealties();
  }
}
