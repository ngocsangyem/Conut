import PageViewContentItem from '../page-view-content-item/page-view-content-item';
import { addClass } from '../../../_helpers/DOM';
export default class PageViewContents {
	state = {
		pages: {},
	};

	constructor(el) {
		this.el = el;
		this.render();
	}

	render() {
		this.el.insertAdjacentHTML(
			'beforeend',
			'<div class="page-view-contents"></div>'
		);

		this.pageViewContents = this.el.querySelector('.page-view-contents');
	}

	update(next) {
		Object.assign(this.state, next);

		const pages = this.state.pages;
		const container = this.el.querySelector('.page-view-contents');
		const obsolete = new Set(container.children);
		const childrenByKey = new Map();

		// Always set active class for first tab when delete page
		this.el.addEventListener('deletePage', () => {
			addClass(container.children[0], 'is-active');
		});

		obsolete.forEach((child) => {
			childrenByKey.set(child.getAttribute('data-key'), child);
		});

		const children = Object.keys(pages).map((p, index) => {
			const page = pages[p];
			let child = childrenByKey.get(page.id);

			if (child) {
				obsolete.delete(child);
			} else {
				child = document.createElement('div');
				child.className =
					index === 0
						? 'page-view-content-item is-active'
						: 'page-view-content-item';
				child.setAttribute('data-key', page.id);
				child.setAttribute('data-content', page.name);
				this.pageViewContentItem = new PageViewContentItem(child);
			}

			this.pageViewContentItem.update({ ...page });
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
