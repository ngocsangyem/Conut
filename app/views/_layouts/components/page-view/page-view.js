import Component from '../../../_store/lib/component';
import store from '../../../_store/index';

export default class PageView extends Component {
	constructor() {
		super({
			store,
			element: document.querySelector('.js-page-tabs'),
		});
	}

	render() {
		const self = this;

		self.element.innerHTML = `
		<div class="page-view-nav ${store.state.pages.length > 1 ? 'views' : ''}">
			<ul>
				${store.state.pages
					.map((page, index) => {
						return `
							<li class="${index === 0 ? 'is-active' : ''}" data-page="${page}">
								<a class="page page-${page}" id="page-${page}" href="javascript:void(0)" data-tab="${index}">
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
			${store.state.pages.map((page) => {
				return `
					<div class="page-view-content" data-content="${page}">
						
					</div>
				`;
			})}
		</div>
		`;
	}
}
