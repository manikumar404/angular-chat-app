import { TestBed } from '@angular/core/testing';

import { FriendsStateService } from './friends-state.service';

describe('FriendsStateService', () => {
  let service: FriendsStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FriendsStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
