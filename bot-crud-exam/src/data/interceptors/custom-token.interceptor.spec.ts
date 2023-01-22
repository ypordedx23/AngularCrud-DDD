import { TestBed } from '@angular/core/testing';

import { CustomTokenInterceptor } from './custom-token.interceptor';

describe('CustomTokenInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      CustomTokenInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: CustomTokenInterceptor = TestBed.inject(CustomTokenInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
