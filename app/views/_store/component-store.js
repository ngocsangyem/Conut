import { generateId } from '../_helpers/generateId';

export default class ComponentStore {
	state = {
		pages: [
			{
				name: 'index',
				id: generateId(5),
				components: [],
			},
			{
				name: 'about',
				id: generateId(5),
				components: [],
			},
		],
		accordions: [
			{
				name: 'Cards',
				id: generateId(5),
				components: [
					{
						id: generateId(5),
						name: 'card-v1',
						image:
							'https://images.unsplash.com/photo-1603444190665-3f3810ba7f62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
						html: '<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <link rel="stylesheet" href="./css/codyhouse.css"> <link rel="stylesheet" href="./css/card-v1.css"> <title>card-v1</title> </head> <body> <div class="container margin-top-lg"> <div class="grid gap-xs"> <div class="col-6@sm col-4@md margin-x-auto"> <div class="card card-v1"> <figure class="card__img"><img src="images/card-v1/images/card_1.jpeg" alt="Card preview img"/></figure> <div class="card__content"> <div class="card__text"> <h4 class="card__title">Title of the Card</h4> <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, suscipit.</p> </div> <div class="card__button"><a class="btn btn--subtle btn--sm" href="#0">Read more</a></div> </div> </div> </div> </div> </div> <script src="./js/card-v1.js"></script> </body> </html>',
					},
					{
						id: generateId(5),
						name: 'card-v2',
						image:
							'https://images.unsplash.com/photo-1605208285192-8de46a6ed7a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2251&q=80',
						html: '<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <link rel="stylesheet" href="./css/codyhouse.css"> <link rel="stylesheet" href="./css/card-v2.css"> <title>card-v2--link</title> </head> <body> <div class="container margin-top-lg"> <div class="grid gap-xs"> <div class="col-6@sm col-4@md margin-x-auto"><a class="card card-v2" href="#0"> <figure class="card__img"><img src="images/card-v2/images/card_3.jpeg" alt="Image description"/> <figcaption class="card__caption"> <div class="card__caption-title">Card Title</div> <div class="card__caption-description">Label</div> </figcaption> </figure></a></div> </div> </div> <script src="./js/card-v2.js"></script> </body> </html>',
					},
					{
						id: generateId(5),
						name: 'card-v3',
						image:
							'https://images.unsplash.com/photo-1605132652089-a60fc73cb55a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
						html: '<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <link rel="stylesheet" href="./css/codyhouse.css"> <link rel="stylesheet" href="./css/card-v3.css"> <title>card-v3</title> </head> <body> <div class="container margin-top-lg"> <div class="grid gap-xs"> <div class="col-6@sm col-4@md margin-x-auto"> <div class="card card-v3"><a class="card__link" href="#" title="Description of the link" aria-label="Description of the link"> <figure class="card__img"><img src="images/card-v3/images/card_1.jpeg" alt="Description of card v3"/></figure> <div class="card__content"><span class="card__label">Label</span> <h3 class="card__title">Lorem ipsum dolor sit amet.</h3> </div> <div class="card__footer"><span>Read more</span> <svg class="icon" viewBox="0 0 16 16"> <g fill="none" stroke-width="1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"> <line x1="0.5" y1="8.5" x2="15.5" y2="8.5"></line> <polyline points="10.5,3.5 15.5,8.5 10.5,13.5 "></polyline> </g> </svg> </div></a></div> </div> </div> </div> <script src="./js/card-v3.js"></script> </body> </html>',
					},
					{
						id: generateId(5),
						name: 'card-v4',
						image:
							'https://images.unsplash.com/photo-1605201100213-5c294da9bd97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
						html: '<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <link rel="stylesheet" href="./css/codyhouse.css"> <link rel="stylesheet" href="./css/card-v4.css"> <title>card-v4</title> </head> <body> <div class="container margin-top-lg"> <div class="grid gap-xs"> <div class="col-6@sm col-4@md margin-x-auto"> <div class="card card-v4 card--img-padding"> <div class="card__content"> <h3 class="card__title">Lorem ipsum dolor sit amet.</h3> <p class="card__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia minus culpa commodi.</p> <div class="card__buttons"><a class="card__button btn btn--subtle" href="#">Learn more</a><a class="card__button btn btn--primary" href="#">Buy</a></div> </div> <figure class="card__img"><img src="images/card-v4/images/card_1.jpeg" alt="Description of card v3"/></figure> </div> </div> </div> </div> <script src="./js/card-v4.js"></script> </body> </html>',
					},
					{
						id: generateId(5),
						name: 'card-v5',
						image:
							'https://images.unsplash.com/photo-1605050825077-289f85b6cf43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
						html: '<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <link rel="stylesheet" href="./css/codyhouse.css"> <link rel="stylesheet" href="./css/card-v5.css"> <title>card-v5</title> </head> <body> <div class="container margin-top-lg"> <div class="grid gap-xs"> <div class="col-6@sm col-4@md margin-x-auto"> <div class="card card-v5"><a class="card__link" href="" title="Description of the link" aria-label="Description of the link"> <figure class="card__img"><img src="images/card-v5/images/card_1.jpeg" alt="Card preview img"/></figure></a> <div class="card__content"> <h3 class="card__title">Lorem ipsum dolor sit amet</h3> <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, maiores!</p> <p><a class="btn btn--primary btn--sm" href="#">Read more</a></p> </div> </div> </div> </div> </div> <script src="./js/card-v5.js"></script> </body> </html>',
					},
					{
						id: generateId(5),
						name: 'card-v6',
						image:
							'https://images.unsplash.com/photo-1576867983235-20533dc29144?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
						html: '<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <link rel="stylesheet" href="./css/codyhouse.css"> <link rel="stylesheet" href="./css/card-v6.css"> <title>card-v6</title> </head> <body> <div class="container margin-top-lg"> <div class="grid gap-xs"> <div class="col-6@sm col-4@md margin-x-auto"> <div class="card card-v6"><a class="card__link" href="#" title="Description of the link" aria-label="Description of the link"> <figure class="card__img"><img src="images/card-v6/images/card_1.jpeg" alt="Description of the link"/></figure> <div class="card__content"><span class="card__label">Label</span> <h3 class="card__title">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3> </div> <div class="card__icon"> <svg class="icon" viewBox="0 0 12 12"> <g stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <line x1="11.5" y1="6" x2="0.5" y2="6"></line> <polyline points="7.5 2 11.5 6 7.5 10"></polyline> </g> </svg> </div></a></div> </div> </div> </div> <script src="./js/card-v6.js"></script> </body> </html>',
					},
					{
						id: generateId(5),
						name: 'card-v7',
						image:
							'https://images.unsplash.com/photo-1605177438106-6fc2146d8a32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80',
						html: '<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <link rel="stylesheet" href="./css/codyhouse.css"> <link rel="stylesheet" href="./css/card-v7.css"> <title>card-v7</title> </head> <body> <div class="container margin-top-lg"> <div class="grid gap-xs"> <div class="col-6@sm col-4@md margin-x-auto"> <div class="card card-v7"><a class="card__link" href="#" title="Description of the link" aria-label="Description of the link"> <figure class="card__img"><img src="images/card-v7/images/card_1.jpeg" alt="Description of the link"/></figure></a> <div class="card__content"><span class="card__label">Label</span> <h3 class="card__title"><a href="#" title="Description of the link" aria-label="Description of the link">Lorem ipsum dolor sit amet.</a></h3> </div> <div class="card__buttons"> <button class="card__button btn btn--subtle btn--sm">Share</button> <button class="card__button btn btn--subtle btn--sm"> <svg class="icon" aria-hidden="true" viewBox="0 0 16 16"> <g> <path d="M14.682,2.318c-1.757-1.757-4.607-1.757-6.364,0C8.197,2.439,8.104,2.577,8,2.707 C7.896,2.577,7.803,2.439,7.682,2.318c-1.757-1.757-4.607-1.757-6.364,0c-1.757,1.757-1.757,4.607,0,6.364L8,15l6.682-6.318 C16.439,6.925,16.439,4.075,14.682,2.318z"></path> </g> </svg><span>Like</span> </button> </div> </div> </div> </div> </div> <script src="./js/card-v7.js"></script> </body> </html>',
					},
					{
						id: generateId(5),
						name: 'card-v8',
						image:
							'https://images.unsplash.com/photo-1605175519272-70ee5dd143c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2251&q=80',
						html: '<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <link rel="stylesheet" href="./css/codyhouse.css"> <link rel="stylesheet" href="./css/card-v8.css"> <title>card-v8</title> </head> <body> <div class="container margin-top-lg"> <div class="grid gap-xs"> <div class="col-6@sm col-4@md margin-x-auto"> <div class="card card-v8"><a class="card__link" href="#" title="Description of the link" aria-label="Description of the link"> <figure class="card__img"><img src="images/card-v8/images/card_2.jpg" alt="Description of the link"/></figure> <div class="card__content"> <p class="card__label">Label</p> <h4 class="card__title"><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis molestias pariatur voluptate et vel iure.</span></h4> </div></a></div> </div> </div> </div> <script src="./js/card-v8.js"></script> </body> </html>',
					},
					{
						id: generateId(5),
						name: 'card-v9',
						image:
							'https://images.unsplash.com/photo-1605208285448-cbe4ade0bf7f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2251&q=80',
						html: '<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <link rel="stylesheet" href="./css/codyhouse.css"> <link rel="stylesheet" href="./css/card-v9.css"> <title>card-v9</title> </head> <body> <div class="container margin-top-lg"> <div class="grid gap-xs"> <div class="col-6@sm col-4@md margin-x-auto"> <div class="card card-v9"><a class="card__link" href="#" title="Description of the link" aria-label="Description of the link" style="background-image: url(\'images/card-v9/images/card_1.jpeg\')"> <div class="card__body"> <div class="card__content"> <p class="card__label">Category</p> <h3 class="card__title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, atque.</h3> </div> <div class="card__button"><span><i>Read more</i></span></div> </div></a></div> </div> </div> </div> <script src="./js/card-v9.js"></script> </body> </html>',
					},
					{
						id: generateId(5),
						name: 'card-v10',
						image:
							'https://images.unsplash.com/photo-1605114323356-bb2bbe0267e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
						html: '<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <link rel="stylesheet" href="./css/codyhouse.css"> <link rel="stylesheet" href="./css/card-v10.css"> <title>card-v10</title> </head> <body> <div class="container margin-top-lg"> <div class="grid gap-xs"> <div class="col-6@sm col-4@md margin-x-auto"> <div class="card card-v10"><a class="card__link" href="#" title="Description of the link" aria-label="Description of the link"><img src="images/card-v10/images/card_1.jpeg" alt="Description of the link"/></a> <div class="card__body"> <div class="card__body-container"> <div class="card__content"> <p class="card__label">Category</p> <h2 class="card__title"><a href="">Almost before we knew it, we had left the ground</a></h2> <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> </div> <footer class="card__footer"> <ul class="card__social-list"> <li class="card__social-item card__social-item--like"> <button class="card__social-btn reset" aria-label="Like this content along with 120 other people" type="button"> <svg class="icon" viewBox="0 0 12 12"> <g> <path d="M11.045,2.011a3.345,3.345,0,0,0-4.792,0c-.075.075-.15.225-.225.3-.075-.074-.15-.224-.225-.3a3.345,3.345,0,0,0-4.792,0,3.345,3.345,0,0,0,0,4.792l5.017,4.718L11.045,6.8A3.484,3.484,0,0,0,11.045,2.011Z"></path> </g> </svg><span>120</span> </button> </li> <li class="card__social-item card__social-item--comment"> <button class="card__social-btn reset" aria-label="Comment" type="button"> <svg class="icon" viewBox="0 0 12 12"> <g> <path d="M6,0C2.691,0,0,2.362,0,5.267s2.691,5.266,6,5.266a6.8,6.8,0,0,0,1.036-.079l2.725,1.485A.505.505,0,0,0,10,12a.5.5,0,0,0,.5-.5V8.711A4.893,4.893,0,0,0,12,5.267C12,2.362,9.309,0,6,0Z"></path> </g> </svg><span>Comment</span> </button> </li> <li class="card__social-item card__social-item--share"> <button class="card__social-btn reset" aria-label="Share" type="button"> <svg class="icon" viewBox="0 0 12 12"> <g> <path d="M6,4C2.975,4,0,5.8,0,11,1.575,8.45,3.6,8,6,8v3l6-5L6,1Z"></path> </g> </svg><span>Share</span> </button> </li> </ul> </footer> </div> </div> </div> </div> </div> </div> <script src="./js/card-v10.js"></script> </body> </html>',
					},
				],
			},
		],
	};
	storeTimeout = null;

	constructor(el) {
		this.el = el;
		this.handleEvents();
	}

	handleEvents() {
		this.el.addEventListener('deletePage', (event) => {
			const id = event.detail.id;

			this.dispatch({
				pages: this.state.pages.filter((page) => page.id !== id),
			});
		});
	}

	store() {
		clearTimeout(this.storeTimeout);

		this.storeTimeout = setTimeout(() => {
			try {
				localStorage.accordions = JSON.stringify(this.state);
			} catch (err) {
				console.warn(err);
			}
		}, 100);
	}

	dispatch(next) {
		Object.assign(this.state, next);
		this.store();

		this.el.dispatchEvent(
			new CustomEvent('accordionsData', {
				detail: this.state,
				bubbles: true,
			})
		);
	}

	load() {
		if (localStorage.accordions === undefined) {
			this.dispatch(this.state);
			return;
		}
		try {
			this.dispatch(JSON.parse(localStorage.accordions));
		} catch (err) {
			console.warn(err);
		}
	}
}
