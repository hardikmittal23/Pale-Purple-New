const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',        // your MySQL username
    password: '',        // your MySQL password
    database: 'pale_purple' // your database name
});

db.connect(err => {
    if (err) throw err;
    console.log('MySQL Connected!');
});

// Example: Store cart item
app.post('/api/cart', (req, res) => {
    const { product_id, product_name, quantity } = req.body;
    const sql = 'INSERT INTO cart (product_id, product_name, quantity) VALUES (?, ?, ?)';
    db.query(sql, [product_id, product_name, quantity], (err, result) => {
        if (err) return res.status(500).send(err);
        res.json({ success: true, id: result.insertId });
    });
});

// Example: Get all cart items
app.get('/api/cart', (req, res) => {
    db.query('SELECT * FROM cart', (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));