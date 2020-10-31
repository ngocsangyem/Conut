export default class ComponentItem {
	render(component) {
		return `
		<div class="component-item">
			<figure>
				<img
					src="${component.image}"
					alt="${component.name}">
				<figcaption>
					<a href="/" target="_blank">${component.name}</a>
				</figcaption>
			</figure>
		</div>
		`;
	}
}
