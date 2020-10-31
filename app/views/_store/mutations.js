export default {
	clearPageByIndex(state, payload) {
		state.pages.splice(payload.index, 1);

		return state;
	},

	toggleAccordion(state, payload) {
		state.components[payload.index].isOpen = !state.components[
			payload.index
		].isOpen;

		return state;
	},
};
