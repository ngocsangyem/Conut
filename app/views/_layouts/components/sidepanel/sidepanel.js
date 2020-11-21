export default class SidePanel {
	constructor(el) {
		this.el = el;
		this.render();
	}

	render() {
		this.el.insertAdjacentHTML(
			'afterbegin',
			'<aside class="pages-edit-sidepanel"><button class="sidepanel-button sidepanel-button--goto"> Grids <i class="fal fa-chevron-right"></i> </button></aside>'
		);
	}
}
