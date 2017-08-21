import { fetch } from '../shared/fetch';
import { parse } from './avail-parse';

export function getAvail({ search, config }) {
  const request = fetch({ search, config });

  return new Promise(handler => {
    const mockAvail = ['avail1', 'avail2'];
    const parsedAvail = parse({ data: mockAvail, request });
    parsedAvail.request.config.fromServer = 'config from server';
    setTimeout(function() {
      handler(parsedAvail);
    }, 2000);
  });
}
