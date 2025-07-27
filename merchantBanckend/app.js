const express = require('express');
const userRoutes = require('./Routes/userRoutes');
const app = express();
const port = 5174;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

app.use('/', userRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});