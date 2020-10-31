import ComponentItem from '../component-item/component-item';

export default class ComponentList {
	componentItem = new ComponentItem();

	render(components) {
		return `
		<div class="component-list js-component-list">
			${components.map((component) => this.componentItem.render(component)).join('')}
		</div>
		`;
	}
}
