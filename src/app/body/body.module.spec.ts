import { BodyModule } from './body.module';

describe('BodyModule', () => {
  let bodyModule: BodyModule;

  beforeEach(() => {
    bodyModule = new BodyModule();
  });

  it('should create an instance', () => {
    expect(bodyModule).toBeTruthy();
  });
});
