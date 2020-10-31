export default {
	clearPageByIndex(context, payload) {
		context.commit('clearPageByIndex', payload);
	},

	toggleAccordion(context, payload) {
		context.commit('toggleAccordion', payload)
	}
};
