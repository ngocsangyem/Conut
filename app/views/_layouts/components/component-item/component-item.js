
export default class ComponentItem {
	state = {
		id: '',
		name: '',
		image: '',
	};

	constructor(el) {
		this.el = el;
		this.render();
	}

	render() {
		this.el.innerHTML = `
		<figure>
			<img class="component-item-name" src="" alt="">
			<figcaption>
				<a class="component-item-link" href="/" target="_blank"></a>
			</figcaption>
		</figure>
		`;

		this.componentImg = this.el.querySelector('.component-item-name');
		this.componentLink = this.el.querySelector('.component-item-link');
	}

	update(next) {
		Object.assign(this.state, next);

		this.componentImg.setAttribute('src', this.state.image);
		this.componentImg.setAttribute('alt', this.state.name);
		this.componentLink.innerHTML = this.state.name;
	}
}
