import express from 'express';
import cors from 'cors';
import router from './src/routes';

const app = express();
// enable CORS using npm package
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api/v1', router);

app.listen(process.env.PORT || 3002, () => {
  console.log('Your app is connected with 3001!');
});
