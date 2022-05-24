import express, { json } from 'express';
import cors from 'cors';
import chalk from 'chalk';
import multer from 'multer';

const app = express();
app.use(cors());
app.use(json());

const fileStorageEnfine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './images');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const multermid = multer({ storage: fileStorageEnfine });

app.get('/', (req, res) => {
    return res.send('Hello World');
});

app.post('/upload', multermid.single('file'), (req, res) => {
    console.log(req.file);
    return res.send('File upload success');
});

app.listen(5000, () => {
    console.log(chalk.bold.green('Server running'));
});
