module.exports = (app, path) => {
	app.set('view engine', 'pug');
	app.set('views', path.resolve(__dirname, '../views'));
};
