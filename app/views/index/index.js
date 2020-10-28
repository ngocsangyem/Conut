import store from '../_store/index';

import Sidepane from '../_layouts/components/sidepane/sidepane';

export class IndexPage {
	constructor() {
		const sidepaneInstance = new Sidepane();
		sidepaneInstance.render();
	}

	static init() {
		const index = new IndexPage();
		return index;
	}
}

(function () {
	IndexPage.init();
})();
