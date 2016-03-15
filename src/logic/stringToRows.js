import { chain } from 'lodash';

export default function stringToRows(str: string, rowLength: number): Array<Array<Element>> {
  return chain(str)
    .reduce((rows, val, i) => {
      const rowIndex = Math.floor(i / rowLength);

      if (rows[rowIndex] == null) {
        rows[rowIndex] = [];
      }

      const elementValue = (val === '-' ? null : val);

      rows[rowIndex].push({ value: elementValue });

      return rows;
    }, [])
    .value();
}
