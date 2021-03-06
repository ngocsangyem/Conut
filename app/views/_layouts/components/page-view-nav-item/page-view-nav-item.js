import {
	addClass,
	selectorAll,
	parents,
	switchClass,
} from '../../../_helpers/DOM';

export default class PageViewNavItem {
	state = {
		name: '',
		id: '',
		components: [],
	};

	constructor(el) {
		this.el = el;
		this.render();
		this.handleEvents();
	}

	render() {
		this.el.innerHTML = `
			<a class="nav-link"  href="javascript:void(0)">
				<i class="fad fa-file"></i>
				<div class="page-title">
					<span class="page-name"></span>
					<span class="page-extension">.html</span>
				</div>
				<button class="btn-page-delete" type="button">
					<i class="fal fa-times"></i>
				</button>
			</a>
		`;

		this.pageLink = this.el.querySelector('.nav-link');
		this.pageName = this.el.querySelector('.nav-link .page-name');
	}

	update(next) {
		Object.assign(this.state, next);

		const name = this.state.name;

		addClass(this.pageLink, `nav-link-${name}`);
		this.pageLink.setAttribute('data-tab', name);
		this.pageLink.setAttribute('data-id', this.state.id);
		this.pageName.innerText = `${name}`;
	}

	handleEvents() {
		this.el
			.querySelector('.nav-link')
			.addEventListener('click', this.toggleTab);
		this.el
			.querySelector('.btn-page-delete')
			.addEventListener('click', (event) => {
				this.removePage(event);
			});
	}

	toggleTab(event) {
		if (!event.target.classList.contains('btn-page-delete')) {
			const tabNaves = selectorAll(
				parents(this, '.nav-list')[0],
				'nav-item'
			);
			const tabContents = selectorAll(
				parents(this, '.js-page-edit-tabs')[0],
				'page-view-content-item'
			);
			const navItem = this.parentNode;
			const tabName = this.getAttribute('data-tab');

			// switch active class between nav
			switchClass(navItem, tabNaves, 'is-active');
			switchClass(
				document.querySelector(
					`.page-view-content-item[data-content=${tabName}]`
				),
				tabContents,
				'is-active'
			);
		}
	}

	removePage(event) {
		const target = event.target;
		const navLink = target.parentNode;
		const pageName = navLink.getAttribute('data-tab');

		this.el.dispatchEvent(
			new CustomEvent('deletePage', {
				detail: {
					pageName,
				},
				bubbles: true,
			})
		);
	}
}
