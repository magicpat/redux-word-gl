/* @flow */

export default function times<T>(n: number, iteratee: (i: number) => T): Array<T> {
  const ret = [];

  for (let i = 1; i <= n; i++) {
    const result = iteratee(i);
    ret.push(result);
  }

  return ret;
}
