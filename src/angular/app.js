import { getAvail } from '../ota/rentals';

(function() {
  ('use strict');
  const search = {
    pickup: {
      datetime: new Date()
    }
  };
  const config = {
    otaConfg: true
  };
  const availSearchRequest = { search, config };
  console.log('availSearchRequest', availSearchRequest);

  const fetch = async function() {
    const response = await getAvail(availSearchRequest);
    console.log('availSearchResponse', response);
    console.info(availSearchRequest.config === response.request.config);
  };

  fetch();
})();
