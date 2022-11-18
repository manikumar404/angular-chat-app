import { TestBed } from '@angular/core/testing';

import { FriendsFacadeService } from './friends-facade.service';

describe('FriendsFacadeService', () => {
  let service: FriendsFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FriendsFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
