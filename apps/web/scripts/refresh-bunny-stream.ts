const url =
  'https://video.bunnycdn.com/library/344861/videos?page=1&itemsPerPage=100&orderBy=date';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    AccessKey: '',
  },
};

fetch(url, options)
  .then((res) => res.json())
  .then((json) => console.log(json))
  // eslint-disable-next-line unicorn/prefer-top-level-await
  .catch((err) => console.error(err));
