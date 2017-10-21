import { TestBed, inject } from '@angular/core/testing';

import { FcmPushService } from './fcm-push.service';

describe('FcmPushService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FcmPushService]
    });
  });

  it('should be created', inject([FcmPushService], (service: FcmPushService) => {
    expect(service).toBeTruthy();
  }));
});
