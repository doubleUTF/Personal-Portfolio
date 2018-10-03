import { AnonForumModule } from './anon-forum.module';

describe('AnonForumModule', () => {
  let anonForumModule: AnonForumModule;

  beforeEach(() => {
    anonForumModule = new AnonForumModule();
  });

  it('should create an instance', () => {
    expect(anonForumModule).toBeTruthy();
  });
});
