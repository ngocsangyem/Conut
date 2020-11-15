import PageViewNavItem from '../page-view-nav-item/page-view-nav-item';
import { addClass, removeClass } from '../../../_helpers/DOM';
export default class PageViewNav {
	state = {
		pages: {},
	};

	constructor(el) {
		this.el = el;
		this.render();
	}

	render() {
		this.el.innerHTML = `
			<div class="page-view-nav">
				<ul class="nav-list">
				</ul>
			</div>
		`;

		this.pageViewNav = this.el.querySelector('.page-view-nav');
	}

	update(next) {
		Object.assign(this.state, next);

		const pages = this.state.pages;
		Object.keys(pages).length > 1
			? addClass(this.pageViewNav, 'more-pages')
			: removeClass(this.pageViewNav, 'more-pages');

		const container = this.el.querySelector('.page-view-nav ul');
		const obsolete = new Set(container.children);
		const childrenByKey = new Map();

		obsolete.forEach((child) => {
			childrenByKey.set(child.getAttribute('data-key'), child);
		});

		const children = Object.keys(pages).map((p, index) => {
			const page = pages[p];
			let child = childrenByKey.get(page.id);

			if (child) {
				obsolete.delete(child);
				// Always set active class for first tab when delete page
				addClass(container.children[0], 'is-active');
			} else {
				child = document.createElement('li');
				child.className =
					index === 0 ? 'nav-item is-active' : 'nav-item';
				child.setAttribute('data-key', page.id);
				child.setAttribute('data-page', page.name);
				this.pageViewNavItem = new PageViewNavItem(child);
			}

			this.pageViewNavItem.update({ ...page });
			return child;
		});

		obsolete.forEach((child) => {
			container.removeChild(child);
		});

		children.forEach((child, index) => {
			if (child !== container.children[index]) {
				container.insertBefore(child, container.children[index]);
			}
		});
	}
}
