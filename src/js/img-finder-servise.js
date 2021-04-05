const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '20863158-29067fba5694837f6dcd32f98';

export default class ImgFinderServise {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchImg() {
    const url = `${BASE_URL}/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`;

    return fetch(url)
      .then(response => response.json())
      .then(({ hits }) => {
        this.incrementPage();
        return hits;
      });
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
