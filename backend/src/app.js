const express=require('express');
const cors=require('cors');

require('dotenv').config();

const app=express();
app.use(cors());
app.use(express.json());

//Routes

const convertRoutes=require('./routes/convertRoutes');

app.use('/convert',convertRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to codeConverter Backend '); // Sending a simple response for the root route
}); 

const PORT=process.env.PORT || 5000;
app.listen(PORT,()=> console.log(`server is running on port http://localhost:${PORT}`))
