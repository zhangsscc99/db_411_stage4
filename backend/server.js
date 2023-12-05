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
app.use(express.json());  // 解析 JSON 请求体
app.use(bodyParser.json())

// 设置数据库连接
const db = mysql.createConnection({
  host: '35.226.124.117',  // 数据库地址
  user: 'root',  // 数据库用户
  password: 'test1234',  // 数据库密码
  port: 3306
  //database: 'test'  // 数据库名
});


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


  app.get('/hello', (req, res) => {
    res.send('hello from server');
  });

  // ...

// API路由 - 显示所有数据库
app.get('/show-databases', (req, res) => {
  db.query('SHOW DATABASES;', (err, results) => {
    if (err) {
      console.error('Error fetching databases:', err);
      res.status(500).send('Error fetching databases');
      return;
    }
    console.log('Databases:', results);
    res.json(results);
  });
});


app.get('/api/delayed-flights', (req, res) => {
  const query = `
    SELECT
      a.City,
      COUNT(f.FlightID) AS NumberOfDelayedFlights,
      SUM(f.DelayLength) AS TotalDelayLength,
      AVG(f.DelayLength) AS AverageDelayLength,
      SUM(CASE WHEN f.AirSystemDelay > 0 THEN 1 ELSE 0 END) AS AirSystemDelays,
      SUM(CASE WHEN f.SecurityDelay > 0 THEN 1 ELSE 0 END) AS SecurityDelays,
      SUM(CASE WHEN f.AirlineDelay > 0 THEN 1 ELSE 0 END) AS AirlineDelays,
      SUM(CASE WHEN f.LateAircraftDelay > 0 THEN 1 ELSE 0 END) AS LateAircraftDelays,
      SUM(CASE WHEN f.WeatherDelay > 0 THEN 1 ELSE 0 END) AS WeatherDelays
    FROM
      cs_411.Flight f
    JOIN
      cs_411.Airport a ON f.DepartureAirportID = a.AirportID OR f.DestinationAirportID = a.AirportID
    WHERE
      f.DelayLength > 0
    GROUP BY
      a.City
    ORDER BY
      TotalDelayLength DESC
    LIMIT 15;
  `;




  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching flight delay data:', err);
      res.status(500).send('Error fetching flight delay data');
      return;
    }
    res.json(results);
  });
});

// 路由：获取用户信息
// app.get('/api/get-user-info', (req, res) => {
//   const sql = 'SELECT UserId, Password, BookingId FROM User LIMIT 10'; // 查询前10条记录
//   db.query(sql, (err, result) => {
//     if (err) {
//       console.error('Error executing query: ' + err);
//       res.status(500).json({ error: 'Database error' });
//     } else {
//       res.json(result);
//     }
//   });
// });

app.get('/api/get-user-reservation-info', (req, res) => {
  const sql = `
    SELECT
      u.UserId,
      r.FlightID,
      r.BookingID
    FROM
      User u
    INNER JOIN
      Reservation r ON u.UserId = r.UserID
    LIMIT 10`; // 查询前10条记录
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error executing query: ' + err);
      res.status(500).json({ error: 'Database error' });
    } else {
      res.json(result);
    }
  });
});


// 路由：获取用户和预订信息
app.post('/api/login-and-find-reservation', (req, res) => {
  const { userId, flightId, bookingId } = req.body;
  const sql = `
    SELECT
      f.FlightID,
      a.AirportName,
      AVG(f.DelayLength) AS AvgDelayLength,
      GROUP_CONCAT(DISTINCT f.DelayReason) AS DelayReason
    FROM
      Reservation r
    INNER JOIN
      Flight f ON r.FlightID = f.FlightID
    INNER JOIN
      Airport a ON f.DepartureAirportID = a.AirportID
    WHERE
      r.UserID = ? AND r.FlightID = ? AND r.BookingID = ?`;
  

   

  // 使用数据库连接执行 SQL 查询
  db.query(sql, [userId, flightId, bookingId], (error, results) => {
    if (error) {
      console.error('Error executing SQL query:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      if (results.length === 0) {
        // 如果没有找到匹配的数据
        res.status(404).json({ error: 'No matching data found' });
      } else {
        // 返回查询结果
        res.json(results);
      }
    }
  });
});


// // 路由处理用户登录和查询预订信息
// app.post('/api/login-and-find-reservation', (req, res) => {
//   // 从请求体中提取数据
//   const { userId, password, bookingId } = req.body;

//   // 验证用户身份的 SQL 语句
//   const validateUserSql = 'SELECT UserId FROM cs_411.User WHERE UserId = ? AND Password = ?';

//   // 查询预订信息的 SQL 语句
//   const findReservationSql = `
//     SELECT
//       r.FlightID,
//       a.AirportName,
//       AVG(f.DelayLength) AS AvgDelayLength,
//       CASE
//         WHEN f.AirSystemDelay > 0 THEN 'AirSystemDelay'
//         WHEN f.SecurityDelay > 0 THEN 'SecurityDelay'
//         WHEN f.AirlineDelay > 0 THEN 'AirlineDelay'
//         WHEN f.LateAircraftDelay > 0 THEN 'LateAircraftDelay'
//         WHEN f.WeatherDelay > 0 THEN 'WeatherDelay'
//         ELSE 'None'
//       END AS DelayReason
//     FROM cs_411.Reservation r
//     INNER JOIN cs_411.Flight f ON r.FlightID = f.FlightID
//     INNER JOIN cs_411.Airport a ON f.DepartureAirportID = a.AirportID
//     WHERE r.BookingID = ?
//     GROUP BY r.FlightID;
//   `;

//   // 首先验证用户身份
//   db.query(validateUserSql, [userId, password], (userErr, userResults) => {
//     if (userErr || userResults.length === 0) {
//       // 发生错误或未找到用户
//       res.status(401).json({ error: 'Unauthorized: Incorrect UserId or Password' });
//       return;
//     }

//     // 用户验证成功，查询预订信息
//     db.query(findReservationSql, [bookingId], (reservationErr, reservationResults) => {
//       if (reservationErr) {
//         // 查询过程中发生错误
//         res.status(500).json({ error: 'Error fetching reservation details' });
//         return;
//       }

//       // 返回查询结果
//       res.json(reservationResults);
//     });
//   });
// });


// ...


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
