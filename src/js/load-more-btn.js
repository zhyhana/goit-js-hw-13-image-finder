export default class LoadMoreBtn {
  constructor({ selector, hidden = false }) {
    this.refs = this.getRefs(selector);

    hidden && this.isHide();
  }

  getRefs(selector) {
    const refs = {};
    refs.button = document.querySelector(selector);
    refs.label = refs.button.querySelector('.label');
    refs.spinner = refs.button.querySelector('.spinner');

    return refs;
  }

  enable() {
    this.refs.button.disabled = false;
    this.refs.label.textContent = 'Загрузить  ещё';
    this.refs.spinner.classList.add('is-hidden');
  }

  disable() {
    this.refs.button.disabled = true;
    this.refs.label.textContent = 'Сейчас будет...';
    this.refs.spinner.classList.remove('is-hidden');
  }

  isShow() {
    this.refs.button.classList.remove('is-hidden');
  }

  isHide() {
    this.refs.button.classList.add('is-hidden');
  }
}
