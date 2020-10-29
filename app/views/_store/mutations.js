export default {
	addItem(state, payload) {
		state.items.push(payload);

		return state;
	},
	clearPageByIndex(state, payload) {
		state.pages.splice(payload.index, 1);

		return state;
	},
};
