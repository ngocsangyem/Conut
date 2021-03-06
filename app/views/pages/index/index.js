import PageViewNav from '../../_layouts/components/page-view-nav/page-view-nav';
import PageViewContents from '../../_layouts/components/page-view-contents/page-view-contents';
import ComponentStore from '../../_store/component-store';
import ProjectInput from '../../_layouts/components/project-input/project-input';
import SidePanel from '../../_layouts/components/sidepanel/sidepanel';
import Components from '../../_layouts/components/components/components';
import Grids from '../../_layouts/components/grids/grids';

export class IndexPage {
	state = {
		pages: {},
		components: {},
		grids: {},
	};

	constructor(el) {
		this.el = el;
		this.render();
		this.sidePanel = new SidePanel(
			document.querySelector('.pages-edit-main')
		);
		this.components = new Components(
			document.querySelector('.pages-edit-sidepanel')
		);
		this.grids = new Grids(document.querySelector('.pages-edit-sidepanel'));
		this.pageViewNav = new PageViewNav(
			document.querySelector('.js-page-edit-tabs')
		);
		this.pageViewContents = new PageViewContents(
			document.querySelector('.js-page-edit-tabs')
		);
		this.projectInput = new ProjectInput(this.el);

		// Catch data
		this.load();
	}

	load() {
		const store = new ComponentStore(this.el);

		this.el.addEventListener('appData', (event) => {
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
			<div class="pages-edit-view">
				<div class="page-edit-tabs js-page-edit-tabs">
				</div>
			</div>
		</section>
		`;
	}

	update(next) {
		Object.assign(this.state, next);

		this.pageViewNav.update({
			pages: this.state.pages,
		});
		this.pageViewContents.update({
			pages: this.state.pages,
		});
		this.components.update({
			components: this.state.components,
		});
		this.grids.update({
			grids: this.state.grids,
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
