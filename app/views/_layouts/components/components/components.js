import AccordionList from '../accordion-list/accordion-list';
import ComponentList from '../component-list/component-list';

export default class Components {
	state = {
		components: {},
	};

	constructor(el) {
		this.el = el;
		this.render();
		this.accordionList = new AccordionList(
			document.getElementById('components'),
			ComponentList
		);
	}

	render() {
		this.el.insertAdjacentHTML(
			'beforeend',
			'<div class="components" id="components"></div>'
		);
	}

	update(next) {
		Object.assign(this.state, next);

		this.accordionList.update({ ...this.state.components });
	}
}
