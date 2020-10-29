import store from '../_store/index';

import Sidepane from '../_layouts/components/sidepane/sidepane';
import PageView from '../_layouts/components/page-view/page-view';

export class IndexPage {
	constructor() {
		const sidepaneInstance = new Sidepane();
		const pageViewInstance = new PageView();

		sidepaneInstance.init();
		pageViewInstance.init();
	}

	static init() {
		const index = new IndexPage();
		return index;
	}
}

(function () {
	IndexPage.init();
})();
