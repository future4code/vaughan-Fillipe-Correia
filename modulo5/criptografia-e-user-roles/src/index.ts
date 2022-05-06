import app from "./app"
import {signUp} from './endpoints/signUp'
import {getUserByEmail} from './endpoints/getUserByEmail'
import {login} from './endpoints/login'
import {getDataByActiveToken} from './endpoints/getDataByToken'

// import {signUp} from './exercícios';
// import {login} from './exercícios';

// app.post('/signup', signUp)
app.get('/user/:email', getUserByEmail)
// app.post('/login', login)
app.get('/token', getDataByActiveToken)

app.post('/signup', signUp)
app.post('/login', login)