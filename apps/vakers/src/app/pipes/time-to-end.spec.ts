import { TimeToEnd } from './time-to-end.pipe';

describe('TimeToEnd', () => {
  it('create an instance', () => {
    const pipe = new TimeToEnd();
    expect(pipe).toBeTruthy();
  });
});
