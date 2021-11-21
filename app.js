const express = require('express')

const path = require('path')


const homeRouter=require('./routes/home.route')
const authRouter=require('./routes/auth.route')

const productRouter=require('./routes/product.route')
const app = express();
app.set('port', (process.env.PORT || 5000));


app.use(express.static(path.join(__dirname, 'assets')))
app.use(express.static(path.join(__dirname, 'image')))

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use('/',homeRouter)
app.use('/',authRouter)
app.use('/product',productRouter)



app.get('/', (req, res, next) => {
    res.render('index')
}).listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});