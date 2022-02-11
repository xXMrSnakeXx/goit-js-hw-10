import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import { fetchCountries } from './js/fetchCountries';
import { refs } from './js/refs';
import { createCountryList, createCountryInfo } from './js/markupCountryCard';

const DEBOUNCE_DELAY = 300;

refs.countryInput.addEventListener(`input`, debounce(onInputSearch, DEBOUNCE_DELAY));

function onInputSearch() {
  const name = refs.countryInput.value.trim();
  if (name === '') {
    refs.countryList.innerHTML = '';
    refs.countryInfo.innerHTML = '';
    return;
  }

  fetchCountries(name)
    .then(countries => {
      refs.countryList.innerHTML = '';
      refs.countryInfo.innerHTML = '';
      if (countries.length === 1) {
        refs.countryList.insertAdjacentHTML('beforeend', createCountryList(countries));
        refs.countryInfo.insertAdjacentHTML('beforeend', createCountryInfo(countries));
      } else if (countries.length >= 10) {
        Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
      } else {
        refs.countryList.insertAdjacentHTML('beforeend', createCountryList(countries));
      }
    })
    .catch(error => Notiflix.Notify.failure('Oops, there is no country with that name.'));
}
