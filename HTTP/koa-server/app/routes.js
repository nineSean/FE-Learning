module.exports = function(app) {
	var Router 		= require('koa-router'),
		indexCtrl 	= require('./controllers/index');

	var router = new Router();

	router
		.get('/', indexCtrl.index)
		.get('/jquery', indexCtrl.jquery)
        .post('/', indexCtrl.post)

	app.use(router.middleware());
};
