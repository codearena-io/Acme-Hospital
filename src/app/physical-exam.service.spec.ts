import { TestBed, inject } from '@angular/core/testing';

import { PhysicalExamService } from './physical-exam.service';

describe('PhysicalExamService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhysicalExamService]
    });
  });

  it('should be created', inject([PhysicalExamService], (service: PhysicalExamService) => {
    expect(service).toBeTruthy();
  }));
});
