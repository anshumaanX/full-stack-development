const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello world');
});


app.post("/conversation", function(req, res){
    console.log(req.body)
    console.log(req.headers)
    console.log(req.headers["authorization"])
    res.send({
        msg: "2 + 2 = 4"
    })
})
app.listen(PORT,function() {
    console.log(`Server started on port ${PORT}`);
});