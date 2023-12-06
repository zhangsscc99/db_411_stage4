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
  const { userId, password, bookingId } = req.body;
  const sql = `

  SELECT
  f.FlightID,
  a.AirportName,
  AVG(f.DelayLength) AS AvgDelayLength,
  sum(f.AirSystemDelay) as total_AirSystemDelay,
  sum(f.SecurityDelay) as total_SecurityDelay,
  sum(f.AirlineDelay) as total_AirlineDelay,
  sum(f.LateAircraftDelay) as total_LateAircraftDelay,
  sum(f.WeatherDelay) as total_WeatherDelay
FROM
  cs_411.User as u
  JOIN
  cs_411.Reservation as r ON u.UserId = r.UserId
  JOIN
  cs_411.Flight as f 
  ON r.FlightID = f.FlightID
  join
  cs_411.Airport as a on 
a.AirportID = f.DepartureAirportID 
WHERE
  u.UserID = ? AND u.Password = ?  
  AND r.BookingID = ?
group by f.FlightID`;




  db.query(sql, [userId, password, bookingId], (err, result) => {
    if (err) {
      console.error('Error executing query: ' + err);
      res.status(500).json({ error: 'Database error' });
    } else {
      res.json(result);
    }
  });
});


// 处理POST请求
app.post('/api/find-alternative-flights', (req, res) => {
  const { FlightID, DepartureAirportID, DestinationAirportID, DepartureTime } = req.body;

  // 执行SQL查询
  const sql = `
    SELECT 
      alt_flight.FlightID AS AlternativeFlightID,
      alt_flight.DepartureTime AS AlternativeDepartureTime,
      alt_flight.ArrivalTime AS AlternativeArrivalTime,
      alt_airline.AirlineName AS AlternativeAirline
    FROM
      cs_411.User u
    JOIN
      cs_411.Reservation r ON u.UserId = r.UserID
    JOIN
      cs_411.Flight original_flight ON r.FlightID = original_flight.FlightID
    JOIN
      cs_411.Flight alt_flight ON original_flight.DepartureAirportID = alt_flight.DepartureAirportID
                             AND original_flight.DestinationAirportID = alt_flight.DestinationAirportID
                             AND original_flight.FlightID != alt_flight.FlightID
    JOIN
      cs_411.Airline alt_airline ON alt_flight.AirlineID = alt_airline.AirlineID
    WHERE 
      original_flight.FlightID = ? 
      AND original_flight.DepartureAirportID = ? 
      AND original_flight.DestinationAirportID = ? 
      AND original_flight.DepartureTime = ?`;

  db.query(sql, [FlightID, DepartureAirportID, DestinationAirportID, DepartureTime], (err, results) => {
    if (err) {
      console.error('Error executing SQL query: ', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
  
});





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
