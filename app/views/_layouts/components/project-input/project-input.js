import { parents } from '../../../_helpers/DOM';

export default class ProjectInput {
	constructor(el) {
		this.el = el;
		this.render();
		this.handleEvents();
	}

	render() {
		this.el.insertAdjacentHTML(
			'beforeend',
			'<section class="project-input position-relative padding-y-xl"> <div class="position-relative z-index-2"> <div class="container max-width-lg"> <div class="grid gap-sm"> <div class="col-2"></div><div class="col-8"> <div class="site-logo margin-bottom-sm"> <figure> <img src="/static/images/donut_logo.svg" alt="logo"> </figure> </div><div class="input-group"> <input class="form-control flex-grow" id="projectName" type="text" name="projectName" placeholder="Enter your project\'s name"> <button class="margin-left-sm btn btn--primary site-name-submit-btn" id="site-name-submit-btn"> Let go </button> </div></div><div class="col-2"></div></div></div></div><div class="grid-bg-fx z-index-1" aria-hidden="true"> <div class="container max-width-lg height-100%"> <div class="grid-bg-fx__grid grid gap-sm color-contrast-higher color-opacity-10%"> <div class="col-2"></div><div class="col-2"></div><div class="col-2"></div><div class="col-2"></div><div class="col-2"></div><div class="col-2"></div></div></div></div></section>'
		);
	}

	handleEvents() {
		this.el
			.querySelector('#site-name-submit-btn')
			.addEventListener('click', this.hideSiteInput);
	}

	hideSiteInput() {
		parents(this, '.project-input')[0].style.display = 'none';
	}
}
