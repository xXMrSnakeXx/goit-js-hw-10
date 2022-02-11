export function createCountryList(countries) {
  const markup = countries
    .map(({ name, flags }) => {
      return `
            <li class="country-list__item">
            <div class="country-list__wrapper">
            
                <img class="country-list__flag" src="${flags.svg}" alt="Flag of ${name.official}" width ="45"  height ="45">
                <h2 class="country-list__name">${name.official}</h2>
                </div>
            </li>
            `;
    })
    .join('');
  return markup;
}
export function createCountryInfo(countries) {
  const markup = countries
    .map(({ capital, population, languages }) => {
      return `<ul class="country-info__list">
              <li class="country-info__item"><p><b>Capital:</b> ${capital}</p></li>
              <li class="country-info__item"><p><b>Population:</b> ${population}</p></li>
              <li class="country-info__item"><p><b>Languages:</b> ${Object.values(languages).join(
                ', ',
              )}</p></li>
          </ul>`;
    })
    .join('');
  return markup;
}
