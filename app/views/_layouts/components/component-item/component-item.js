export default class ComponentItem {
	state = {
		id: '',
		name: '',
		image: '',
	};

	constructor(el) {
		this.el = el;
	}

	render() {
		this.el.innerHTML = `
		<div class="component-item" data-key="${state.component.id}">
			<figure>
				<img src="${state.component.image}" alt="${state.component.name}">
				<figcaption>
					<a href="/" target="_blank">${state.component.name}</a>
				</figcaption>
			</figure>
		</div>
		`;
	}

	update(next) {
		Object.assign(this.state, next);
	}
}
