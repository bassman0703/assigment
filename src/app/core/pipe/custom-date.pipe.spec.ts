import {CustomDatePipe} from "./costum-date.pipe";

describe('CostumDatePipe', () => {
  it('create an instance', () => {
    const pipe = new CustomDatePipe();
    expect(pipe).toBeTruthy();
  });
});
