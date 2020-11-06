import PageViewNav from '../page-view-nav/page-view-nav';
import PageViewContents from '../page-view-contents/page-view-contents';

export default class PageViewTabs {
	state = {
		pages: ['index'],
	};
	pageViewNav = new PageViewNav();
	pageViewContents = new PageViewContents();

	constructor(el) {
		this.render(el);
	}

	render(el) {
		el.innerHTML = `
			${this.pageViewNav.render(this.state.pages)}
			${this.pageViewContents.render(this.state.pages)}
		`;
	}
}
