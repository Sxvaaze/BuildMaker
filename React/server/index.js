const express = require("express")
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "", // pwd not included
    database: "buildmaker",
});

db.connect((err) => {
    if (err) { throw err; }
    console.log("Mysql Connected");
})

app.listen(3001, () => {
    console.log("server started.");
})

app.post('/final', (req, res) => {
    const sql_c = "INSERT INTO components SET ?";
    const v = req.body;
    const post_c = {
        build_url: v.build_url,
        Component: v.component,
        image_url: v.product_image,
        product_name: v.product_name,
        product_price: v.product_price,
        product_rating_score: v.product_rating_score,
        product_ratings: v.product_ratings,
        product_store_count: v.product_store_count,
    }

    db.query(sql_c, post_c, (err, result) => {
        if (err) throw err;
    })
})

app.post('/finalbuild', (req, res) => {
    const sql_b = "INSERT INTO builds SET ?";
    
    const post_b = {
        url: req.body.url,
    }

    db.query(sql_b, post_b, (err, result) => {
        if (err) throw err;
    })
})

app.post('/req', (req, res) => {
    let sql = "SELECT * FROM buils";
    let query = db.query(sql, (err, results) => {
        if (err) throw err;
        console.log(results);
        res.send(results);
    })
})


app.get('/composition/:uuid', (req, res) => {
    const uuid = req.params.uuid;
    console.log(uuid);
    const sql = "SELECT * FROM components WHERE build_url = ?"
    db.query(sql, [uuid], (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    })
})