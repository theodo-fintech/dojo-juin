import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";

describe('UserService', () => {
  let service: UserService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(UserService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve user level', () => {
    let level: number = 0;
    const mockUserLevel = {
      level: 1
    };
    service
      .getUserLevel()
      .subscribe((_level) => (level = _level));

    const req = httpTestingController.expectOne(
      '/bff/user/level',
    );
    req.flush(mockUserLevel);

    expect(level).toEqual(mockUserLevel.level);
  });
});
