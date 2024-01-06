import express from 'express';
import path from 'path';
import handlebars from 'express-handlebars';

import indexRouter from './routers/index.router.js';
import { __dirname } from './utils.js';
import ErrorHandler from './middlewares/ErrorHandler.js';

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

app.engine('hbs', handlebars.engine());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars')

app.use('/', indexRouter);

app.use(ErrorHandler);

export default app;