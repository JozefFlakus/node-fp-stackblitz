import * as O from 'fp-ts/lib/Option';
import * as E from 'fp-ts/lib/Either';
import * as T from 'fp-ts/lib/Task';
import * as TE from 'fp-ts/lib/TaskEither';
import { pipe } from 'fp-ts/lib/function';

/**
 * ------------
 * Episode 4: TaskEither monad
 * ------------
 */

const result = pipe(
  O.fromNullable(null),
  O.getOrElse(() => 'test_4')
);

console.log(result);
