import {createSiteMenuTemplate} from './view/site-menu.js';
import {createFilmCardTemplate} from './view/film-card.js';
import {createFilmsTemplate} from './view/films.js';
import {createFooterStatisticsTemplate} from './view/footer-statistics.js';
import {createPopupTemplate} from './view/popup.js';
import {createProfileTemplate} from './view/profile.js';
import {createShowMoreButtonTemplate} from './view/show-more-button.js';
import {createSortTemplate} from './view/sort.js';

const render = (container, template, place) => {
    container.insertAdjacentHTML(place, template);
};

const siteHeaderElement = document.querySelector('.header');
render(siteHeaderElement, createProfileTemplate(), 'beforeend');

const siteMainElement = document.querySelector('.main');
render(siteMainElement, createSiteMenuTemplate(), 'beforeend');
render(siteMainElement, createSortTemplate(), 'beforeend');
render(siteMainElement, createFilmsTemplate(), 'beforeend');

const siteFilmsElement = document.querySelector('.films');
render(siteMainElement, createFilmsTemplate(), 'beforeend');

for (let i = 0; i < 5; i++) {
    render(siteFilmsElement, createFilmCardTemplate(), 'beforeend');
}

render(siteMainElement, createShowMoreButtonTemplate(), 'beforeend');

render(siteMainElement, createPopupTemplate(), 'after');

const siteFooterStatisticsElement = document.querySelector('.footer__statistics');
render(siteFooterStatisticsElement, createFooterStatisticsTemplate(), 'beforeend');
