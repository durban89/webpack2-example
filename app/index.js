import Koa from 'koa';
import koaLogger from 'koa-logger';
import bodyParser from 'koa-bodyparser';
import render from 'koa-ejs';
import co from 'co';
import serve from "koa-static"
import router from './router';
import path from 'path';

const app = new Koa();

app.use(bodyParser());
app.use(koaLogger());
app.use(serve(__dirname + "/../static"));
app.use(router.routes()).use(router.allowedMethods());

render(app, {
  root: path.join(__dirname, '/view'),
  layout: 'layout',
  viewExt: 'ejs',
  cache: false,
  debug: true
});
app.context.render = co.wrap(app.context.render);


module.exports = app;
