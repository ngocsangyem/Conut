export default class ComponentStore {
	state = {
		pages: [],
		accordions: [
			{
				name: 'Cards',
				id: 'QWERTYUI',
				components: [
					{
						id: '4VpF7',
						name: 'card-v1',
						image:
							'https://images.unsplash.com/photo-1603444190665-3f3810ba7f62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
					},
					{
						id: 'XeriC',
						name: 'card-v2',
						image:
							'https://images.unsplash.com/photo-1603444190665-3f3810ba7f62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
					},
					{
						id: 'xBtpl',
						name: 'card-v3',
						image:
							'https://images.unsplash.com/photo-1603444190665-3f3810ba7f62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
					},
					{
						id: 'zJnlS',
						name: 'card-v4',
						image:
							'https://images.unsplash.com/photo-1603444190665-3f3810ba7f62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
					},
					{
						id: 'ELKGS',
						name: 'card-v5',
						image:
							'https://images.unsplash.com/photo-1603444190665-3f3810ba7f62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
					},
					{
						id: 'q2KH8',
						name: 'card-v6',
						image:
							'https://images.unsplash.com/photo-1603444190665-3f3810ba7f62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
					},
					{
						id: '2sqjH',
						name: 'card-v7',
						image:
							'https://images.unsplash.com/photo-1603444190665-3f3810ba7f62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
					},
					{
						id: 'DphUF',
						name: 'card-v8',
						image:
							'https://images.unsplash.com/photo-1603444190665-3f3810ba7f62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
					},
					{
						id: 'Dl8zv',
						name: 'card-v9',
						image:
							'https://images.unsplash.com/photo-1603444190665-3f3810ba7f62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
					},
					{
						id: 'QjyNL',
						name: 'card-v10',
						image:
							'https://images.unsplash.com/photo-1603444190665-3f3810ba7f62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
					},
				],
			},
			{
				name: 'Shops',
				id: 'ASDFGHJK',
				components: [
					{
						id: 'jDF6y',
						name: 'card-v1',
						image:
							'https://images.unsplash.com/photo-1603444190665-3f3810ba7f62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
					},
					{
						id: '2KjT9',
						name: 'card-v2',
						image:
							'https://images.unsplash.com/photo-1603444190665-3f3810ba7f62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
					},
					{
						id: 'DXaHL',
						name: 'card-v3',
						image:
							'https://images.unsplash.com/photo-1603444190665-3f3810ba7f62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
					},
					{
						id: 'Sioeo',
						name: 'card-v4',
						image:
							'https://images.unsplash.com/photo-1603444190665-3f3810ba7f62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
					},
					{
						id: 'w6AmR',
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
		this.el = el;
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
				bubbles: true,
			})
		);
	}

	load() {
		if (localStorage.accordions === undefined) {
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
