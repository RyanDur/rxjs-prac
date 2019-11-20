import {fiveResults$, something} from '../something';

describe('something', () => {
  it('should test something', () => {
    something.subscription.unsubscribe();
    expect(something.values).toEqual([3, 4, 5, 6]);
  });

  describe('combineAll', () => {
    /*
    2 values from source will map to 2 (inner) interval observables that emit every 1s.
    combineAll uses combineLatest strategy, emitting the last value from each
    whenever either observable emits a value
    */

    it('should ', (done) => {
      const actual: string[] = [];
      fiveResults$.subscribe({
        next: val => val.subscribe({
          next: v => actual.push(v)
        }),
        complete: () => {
          expect(actual).toEqual(['Result (0): 0']);
          done();
        }
      });
    });
  });
});
