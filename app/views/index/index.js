import AccordionList from '../_layouts/components/accordion-list/accordion-list';
import PageViewNav from '../_layouts/components/page-view-nav/page-view-nav';
import PageViewContents from '../_layouts/components/page-view-contents/page-view-contents';
import ComponentStore from '../_store/component-store';

export class IndexPage {
	state = {
		accordions: [],
		pages: [],
	};

	constructor(el) {
		this.el = el;
		this.render();
		this.accordionList = new AccordionList(
			document.querySelector('.pages-edit-sidepanel')
		);
		this.pageViewNav = new PageViewNav(
			document.querySelector('.js-page-edit-tabs')
		);
		this.pageViewContents = new PageViewContents(
			document.querySelector('.js-page-edit-tabs')
		);
		this.App();
	}

	App() {
		const store = new ComponentStore(this.el);

		this.el.addEventListener('accordionsData', (event) => {
			this.update(event.detail);
		});

		store.load();
	}

	render() {
		this.el.innerHTML = `
		<header class="header-editor">
			<div class="container">
				<nav class="navbar">
					<a class="navbar-brand" href="">
						<img src="/static/images/donut_logo.svg" alt="logo">
					</a>
					<div class="navbar-nav">
						<a class="nav-item nav-theme" href="javascript:void(0)">
							<i class="fal fa-paint-roller"></i>
							Themes
						</a>
						<a class="nav-item nav-settings" href="javascript:void(0)">
							<i class="fal fa-cog"></i>
							Settings
						</a>
						<a class="nav-item nav-css" href="javascript:void(0)">
							<i class="fal fa-brackets-curly"></i>
							Css
						</a>
						<a class="nav-item nav-js" href="javascript:void(0)">
							<i class="fal fa-brackets"></i>
							Js
						</a>
					</div>
				</nav>
			</div>
		</header>
		<section class="pages-edit-main">
			<aside class="pages-edit-sidepanel">
			</aside>
			<div class="pages-edit-view">
				<div class="page-edit-tabs js-page-edit-tabs">
				</div>
			</div>
		</section>
		<section class="project-input position-relative padding-y-xl">
			<div class="position-relative z-index-2">
				<div class="container max-width-lg">
					<div class="grid gap-sm">
						<div class="col-2"></div>
						<div class="col-8">
							<div class="site-logo margin-bottom-sm">
								<figure>
									<img src="/static/images/donut_logo.svg" alt="logo">
								</figure>
							</div>
							<div class="input-group">
								<input class="form-control flex-grow" id="projectName" type="text"
									name="projectName" placeholder="Enter your project's name">
								<button class="margin-left-sm btn btn--primary">
									Let go
								</button>
							</div>
						</div>
						<div class="col-2"></div>
					</div>
				</div>
			</div>
			<div class="grid-bg-fx z-index-1" aria-hidden="true">
				<div class="container max-width-lg height-100%">
					<div class="grid-bg-fx__grid grid gap-sm color-contrast-higher color-opacity-10%">
						<div class="col-2"></div>
						<div class="col-2"></div>
						<div class="col-2"></div>
						<div class="col-2"></div>
						<div class="col-2"></div>
						<div class="col-2"></div>
					</div>
				</div>
			</div>
		</section>
		`;
	}

	update(next) {
		Object.assign(this.state, next);

		this.accordionList.update({
			accordions: this.state.accordions,
		});
		this.pageViewNav.update({
			pages: this.state.pages,
		});
		this.pageViewContents.update({
			pages: this.state.pages,
		});
	}

	static init() {
		const index = new IndexPage(document.getElementById('app'));
		return index;
	}
}

(function () {
	IndexPage.init();
})();
