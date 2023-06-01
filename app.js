/* Import VS Required */
const express = require('express'); //Import Express
const server = express();
const sequelize = require("./config/db");
const cors = require("cors");

/* Routes */
const userRoutes = require('./routes/userRoutes');
const blogRoutes = require('./routes/blogRoutes');
/* sync alter:true 
().then(()=>{}) => true
().catch(()=>{}) => error
*/
sequelize.sync().then(() => {
    console.log('DB Connection Start.');
    server.listen(process.env.port || 2030, () => {
        console.log('Server 2030 is listen');
    })
}).catch((error) => {
    console.log('Database connection error' + error);
});

server.use(cors({}));

server.get("/", (req, res) => {
    res.send("Node Test Project Start");
});

server.use([
    express.json({ limit: "50mb" }),
    express.urlencoded({ extended: false, limit: "50mb" }),
]);

// Server must use all extarnal Routes
server.use([
    userRoutes
]);