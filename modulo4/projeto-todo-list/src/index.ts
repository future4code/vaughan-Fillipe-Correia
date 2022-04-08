import express, { Request, Response } from 'express';
import cors from 'cors';
import connection from './connection';
import { AddressInfo } from 'net';


const app = express();
app.use(express.json());
app.use(cors());






app.listen(process.env.PORT || 3003, () => {
 if (process.env.NODE_ENV !== 'test') {
 console.log('Server started on port 3003!');
}
});