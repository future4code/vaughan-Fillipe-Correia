import app from "./app"
import createUser from './endpoints/createUser'
import {getCEP} from './endpoints/getCEP'
import {getFullCEP} from './endpoints/getFullCEP'

app.post('/users/signup', createUser)

// app.get('/cep/:cep', getCEP)

app.get('/cep/:cep', getFullCEP)