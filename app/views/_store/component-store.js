export default class ComponentStore {
	state = {
		pages: [],
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
	storeTimeout = null;

	constructor(el) {
		const _self = this;

		this.el = el;
		el.accordionStore = {
			dispatch: _self.dispatch,
			load: _self.load(),
		};
	}

	store() {
		clearTimeout(this.storeTimeout);

		this.storeTimeout = setTimeout(() => {
			try {
				localStorage.accordions = JSON.stringify(this.state);
			} catch (err) {
				console.warn(err);
			}
		}, 100);
	}

	dispatch(next) {
		Object.assign(this.state, next);
		this.store();

		this.el.dispatchEvent(
			new CustomEvent('accordionsData', {
				detail: this.state,
				bubbles: false,
			})
		);
	}

	load() {
		if (!localStorage || !localStorage.accordions) {
			console.log(this);
			this.dispatch(this.state);
			return;
		}

		try {
			this.dispatch(JSON.parse(localStorage.accordions));
		} catch (err) {
			console.warn(err);
		}
	}
}
