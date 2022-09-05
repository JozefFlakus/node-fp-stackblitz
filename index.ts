import * as O from 'fp-ts/lib/Option';
import { pipe } from 'fp-ts/lib/function';

const result = pipe(
  O.fromNullable(null),
  O.getOrElse(() => 'test')
);

console.log(result);
