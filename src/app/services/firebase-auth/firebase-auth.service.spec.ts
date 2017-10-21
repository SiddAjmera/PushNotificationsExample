import { TestBed, inject } from '@angular/core/testing';

import { FirebaseAuthService } from './firebase-auth.service';

describe('FireAuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirebaseAuthService]
    });
  });

  it('should be created', inject([FirebaseAuthService], (service: FirebaseAuthService) => {
    expect(service).toBeTruthy();
  }));
});
