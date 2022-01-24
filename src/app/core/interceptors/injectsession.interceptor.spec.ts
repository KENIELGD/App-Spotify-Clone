import { TestBed } from '@angular/core/testing';

import { InjectsessionInterceptor } from './injectsession.interceptor';

describe('InjectsessionInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      InjectsessionInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: InjectsessionInterceptor = TestBed.inject(InjectsessionInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
