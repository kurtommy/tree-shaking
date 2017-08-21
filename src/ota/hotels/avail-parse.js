import { parse as superPase } from '../shared/parse';

export function parse({ data, request }) {
  let parsedObj = superPase({ data, request });
  parsedObj.data = parsedObj.data.map(data => 'mapped data');
  return parsedObj;
}
