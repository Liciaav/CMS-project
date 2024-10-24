import express from 'express';
import { pool, connectToDb } from './connection.ts';
await connectToDb();
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Hardcoded query: DELETE FROM course_names WHERE id = 3;
pool.query(`DELETE FROM course_names WHERE id = $1`, [3], (err, result) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(`${result.rowCount} row(s) deleted!`);
    }
});

// Query database
pool.query('SELECT * FROM course_names', (err, result) => {
    if (err) {
        console.log(err);
    }
    else if (result) {
        console.log(result.rows);
    }
});

// Default response for any other request (Not Found)
app.use((_req, res) => {
    res.status(404).end();
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});