import express from 'express';
import config from './config';
import nunjucks from 'nunjucks';
import {join} from 'path';
const app = express();
nunjucks.configure( config.viewpath, {
	autoescape: true,
	express: app,
	watch: true,
	noCache: false
})


app.use( '/static', express.static(join(__dirname, '../static/')));
app.use( '/node_modules', express.static(join(__dirname, '../node_modules/')));

app.get( '/' ,(req,res) =>{
    res.render( 'index.html' );
});

app.get( '/acount/register', ( req, res ) => {
	res.render( 'register.html');
})

app.get( '/acount/login', ( req, res) => {
	res.render( 'login.html' );
});
app.listen( config.port, config.host, () => {
	console.log( 'runing' );
});