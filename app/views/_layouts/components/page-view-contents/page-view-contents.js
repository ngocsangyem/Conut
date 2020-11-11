import PageViewContentItem from '../page-view-content-item/page-view-content-item';
import { addClass } from '../../../_helpers/DOM';
export default class PageViewContents {
	state = {
		pages: [],
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
	}

	update(next) {
		Object.assign(this.state, next);

		const container = this.el.querySelector('.page-view-contents');
		const obsolete = new Set(container.children);
		const childrenByKey = new Map();

		obsolete.forEach((child) => {
			childrenByKey.set(child.getAttribute('data-key'), child);
		});

		const children = this.state.pages.map((page, index) => {
			let child = childrenByKey.get(page.id);

			if (child) {
				obsolete.delete(child);
				// Always set active class for first tab when delete page
				addClass(container.children[0], 'is-active');
			} else {
				console.log('2');
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
