import AccordionList from '../accordion-list/accordion-list';
import GridList from '../grid-list/grid-list';
import { addClass, removeClass } from '../../../_helpers/DOM';

export default class Grids {
	state = {
		grids: {},
	};

	constructor(el) {
		this.el = el;
		this.render();
		this.handleEvents();
		this.accordionList = new AccordionList(
			document.getElementById('grids'),
			GridList
		);
	}

	render() {
		this.el.insertAdjacentHTML(
			'beforeend',
			'<div class="grids" id="grids"><button class="sidepanel-button sidepanel-button--back"><i class="fal fa-chevron-left"></i> Back </button></div>'
		);
	}

	update(next) {
		Object.assign(this.state, next);

		this.accordionList.update({ ...this.state.grids });
	}

	handleEvents() {
		this.el
			.querySelector('.sidepanel-button--goto')
			.addEventListener('click', () => {
				this.openGrids();
			});

		this.el
			.querySelector('.sidepanel-button--back')
			.addEventListener('click', () => {
				this.closeGrids();
			});
	}

	openGrids() {
		addClass(this.el.querySelector('.grids'), 'is-opened');
	}

	closeGrids() {
		removeClass(this.el.querySelector('.grids'), 'is-opened');
	}
}
