const express = require('express');
const comment = require('./controllers/userController');

const app = express();

app.use(express.json());

app.post("/api/comments/text", comment.create);
app.get("/api/comments", comment.read);
app.put("/api/comments/:id", comment.update);
app.delete("/api/comments/:id", comment.delete);

const port = 9999;
app.listen(port, () => {
    console.log(`Live on server port: ${port}`);
})