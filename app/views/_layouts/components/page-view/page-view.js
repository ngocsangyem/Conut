import Component from '../../../_store/lib/component';
import store from '../../../_store/index';

import { switchClass } from '../../../_helpers/DOM/switchClass';

export default class PageView extends Component {
	constructor() {
		super({
			store,
			element: document.querySelector('.js-page-tabs'),
		});
	}

	init() {
		this.render();
	}

	render() {
		const self = this;

		self.element.innerHTML = `
		<div class="page-view-nav ${store.state.pages.length > 1 ? 'more-pages' : ''}">
			<ul>
				${store.state.pages
					.map((page, index) => {
						return `
							<li class="${index === 0 ? 'is-active' : ''} nav-item" data-tab="${index}"">
								<a class="page nav-link page-${page}" id="page-${page}" href="javascript:void(0)">
									<i class="fad fa-file"></i>
									<span>${page}.html</span>
									<button class="btn-page-delete" type="button">
										<i class="fal fa-times"></i>
									</button>
								</a>
							</li>
					`;
					})
					.join('')}
			</ul>
		</div>
		<div class="page-view-contents">
			${store.state.pages
				.map((page, index) => {
					return `
					<div class="page-view-content ${
						index === 0 ? 'is-active' : ''
					}" data-content="${index}">
						
					</div>
				`;
				})
				.join('')}
		</div>
		`;

		this.switchTabs(
			Array.from(self.element.querySelectorAll('.nav-item')),
			Array.from(self.element.querySelectorAll('.page-view-content'))
		);
		this.deletePage(
			Array.from(self.element.querySelectorAll('.btn-page-delete'))
		);
	}

	switchTabs(navItems, contentItems) {
		navItems.forEach((page) => {
			page.addEventListener('click', (event) => {
				if (!event.target.classList.contains('btn-page-delete')) {
					const pageIndex = page.getAttribute('data-tab');
					switchClass(page, navItems, 'is-active');
					switchClass(
						this.element.querySelector(
							`[data-content='${pageIndex}']`
						),
						contentItems,
						'is-active'
					);
				}
			});
		});
	}

	deletePage(buttonDeletes) {
		buttonDeletes.forEach((button, index) => {
			button.addEventListener('click', function () {
				store.dispatch('clearPageByIndex', { index });
			});
		});
	}
}
