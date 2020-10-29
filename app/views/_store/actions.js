export default {
	addItem(context, payload) {
		context.commit('addItem', payload);
	},

	clearPageByIndex(context, payload) {
		context.commit('clearPageByIndex', payload);
	},
};
