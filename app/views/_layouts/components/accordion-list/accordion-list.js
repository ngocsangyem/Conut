import AccordionItem from '../accordion-item/accordion-item';

export default class AccordionList {
	state = {
		accordions: [
			{
				name: 'Cards',
				components: [
					{
						name: 'card-v1',
						image:
							'https://images.unsplash.com/photo-1603444190665-3f3810ba7f62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
					},
					{
						name: 'card-v2',
						image:
							'https://images.unsplash.com/photo-1603444190665-3f3810ba7f62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
					},
					{
						name: 'card-v3',
						image:
							'https://images.unsplash.com/photo-1603444190665-3f3810ba7f62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
					},
					{
						name: 'card-v4',
						image:
							'https://images.unsplash.com/photo-1603444190665-3f3810ba7f62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
					},
					{
						name: 'card-v5',
						image:
							'https://images.unsplash.com/photo-1603444190665-3f3810ba7f62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
					},
					{
						name: 'card-v6',
						image:
							'https://images.unsplash.com/photo-1603444190665-3f3810ba7f62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
					},
					{
						name: 'card-v7',
						image:
							'https://images.unsplash.com/photo-1603444190665-3f3810ba7f62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
					},
					{
						name: 'card-v8',
						image:
							'https://images.unsplash.com/photo-1603444190665-3f3810ba7f62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
					},
					{
						name: 'card-v9',
						image:
							'https://images.unsplash.com/photo-1603444190665-3f3810ba7f62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
					},
					{
						name: 'card-v10',
						image:
							'https://images.unsplash.com/photo-1603444190665-3f3810ba7f62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
					},
				],
			},
			{
				name: 'Shops',
				components: [
					{
						name: 'card-v1',
						image:
							'https://images.unsplash.com/photo-1603444190665-3f3810ba7f62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
					},
					{
						name: 'card-v2',
						image:
							'https://images.unsplash.com/photo-1603444190665-3f3810ba7f62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
					},
					{
						name: 'card-v3',
						image:
							'https://images.unsplash.com/photo-1603444190665-3f3810ba7f62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
					},
					{
						name: 'card-v4',
						image:
							'https://images.unsplash.com/photo-1603444190665-3f3810ba7f62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
					},
					{
						name: 'card-v5',
						image:
							'https://images.unsplash.com/photo-1603444190665-3f3810ba7f62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
					},
				],
			},
		],
	};
	accordionItem = new AccordionItem();

	constructor(el) {
		this.render(el);
		this.accordionItem.toggleAccordion(el);
	}

	render(el) {
		el.innerHTML = `
			<div class="accordion-list js-accordion-list">
				${this.state.accordions
					.map((accordion) => this.accordionItem.render(accordion))
					.join('')}
			</div>
		`;
	}
}
