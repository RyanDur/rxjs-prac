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
        next: (value: string) => actual.push(value),
        complete: () => {
          expect(actual).toEqual([
            'Result (0): 0',
            'Result (0): 1',
            'Result (1): 0',
            'Result (0): 2',
            'Result (1): 1',
            'Result (0): 3',
            'Result (1): 2',
            'Result (0): 4',
            'Result (1): 3',
            'Result (1): 4'
          ]);
          done();
        }
      });
    }, 10000);
  });
});
