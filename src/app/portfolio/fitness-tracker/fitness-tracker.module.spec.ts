import { FitnessTrackerModule } from './fitness-tracker.module';

describe('FitnessTrackerModule', () => {
  let fitnessTrackerModule: FitnessTrackerModule;

  beforeEach(() => {
    fitnessTrackerModule = new FitnessTrackerModule();
  });

  it('should create an instance', () => {
    expect(fitnessTrackerModule).toBeTruthy();
  });
});
