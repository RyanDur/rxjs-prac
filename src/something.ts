import {interval, of, Subscription, Observable} from 'rxjs';
import {filter, map, take, flatMap} from 'rxjs/operators';

const dataSource = of(1, 2, 3, 4, 5);
const values = [] as number[];

const subscription: Subscription = dataSource
  .pipe(
    filter(value => value >= 2),
    map(value => value + 1)
  )
  // log: 2, 3, 4, 5, 6
  .subscribe(value => {
    values.push(value);
  });

export const something = {subscription, values};


const source$ = interval(1000).pipe(take(2));

export const fiveResults$: Observable<unknown> = source$.pipe(
  flatMap(val =>
    interval(1000).pipe(
      map(i => `Result (${val}): ${i}`),
      take(5)
    )
  )
);
