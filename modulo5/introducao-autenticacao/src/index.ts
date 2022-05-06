import app from "./app"
import {signUp} from './endpoints/signUp'
import {getUserByEmail} from './endpoints/getUserByEmail'
import {login} from './endpoints/login'
import {getDataByActiveToken} from './endpoints/getDataByToken'

app.post('/signup', signUp)
app.get('/user/:email', getUserByEmail)
app.post('/login', login)
app.get('/token', getDataByActiveToken)