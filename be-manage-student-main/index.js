const cors = require('cors');
const express = require('express');
const app = express();
const sequelize = require('./config/db');
const studentRoutes = require('./routes/student.routes');

const Student = require('./models/student.model');

// Setup CORS
app.use(cors());

app.use(express.json());

// Route chính
app.use('/students', studentRoutes);

// Kết nối và sync DB
sequelize.authenticate()
  .then(() => {
    console.log('✅ Kết nối thành công với PostgreSQL');
    return sequelize.sync();
  })
  .then(() => {
    console.log('✅ Đồng bộ model');
  })
  .catch(err => {
    console.error('❌ Lỗi kết nối DB:', err);
  });

app.listen(4000, () => {
  console.log('🚀 Server đang chạy tại http://localhost:4000');
});
