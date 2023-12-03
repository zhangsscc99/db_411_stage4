// 引入必要的模块
const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const path = require('path');
const bodyParser = require('body-parser')

// 创建一个 Express 应用
const app = express();

// 应用中间件
app.use(cors());  // 允许跨域请求
//app.use(express.json());  // 解析 JSON 请求体
app.use(bodyParser.json())

// 设置数据库连接
const db = mysql.createConnection({
  host: '34.66.97.248',  // Google Cloud SQL 实例的公共 IP 地址
  user: 'root',           // 数据库用户名
  password: 'peterking',  // 数据库密码
  // database: 'cs411',      // 数据库名，根据实例名称推断
  port: 3306  
  // host: '35.226.124.117',  // 数据库地址
  // user: 'root',  // 数据库用户
  // password: 'test1234',  // 数据库密码
  // port: 3306
  // //database: 'cs411-gcp-instance'  // 数据库名
});

// 连接数据库
// db.connect(error => {
//   if (error) throw error;
//   console.log('Database connected successfully.');
// });

// db.connect;
db.connect(error => {
  if (error) {
    console.error('Error connecting to the database:', error);
    return;
  }
  console.log('Database connected successfully.');
});

const sql = 'select * from blogs';



// API路由 - 获取所有数据
app.get('/api/data', (req, res) => {
    // 执行一个简单的SQL查询
    connection.query('SELECT * FROM your_table_name', (err, results) => {
      if (err) {
        //res.status(500).send('Error executing the query');
        console.error('error', error);
        return;
      } else {
        console.log('result', result);
        res.json(results);
      }
    });
  });

// 在生产环境中提供 React 构建的静态文件
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../build')));

//   app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../build', 'index.html'));
//   });
// }

// 设置服务器端口
const PORT = process.env.PORT || 3001;

// 启动服务器
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
