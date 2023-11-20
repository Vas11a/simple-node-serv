const express = require('express');
const cors = require('cors');

const app = express();

// Используйте middleware для обработки CORS
app.use(cors());

// Используйте встроенный middleware для обработки данных в формате JSON
app.use(express.json());

app.get('/', (req, res) => {
  res.send('ok');
});

app.post('/api/data', (req, res) => {
  const data = req.body;
  console.log('Полученные данные:', data);
  res.json({ message: 'Данные успешно получены' });
});

// Используйте переменную среды для определения порта, если она задана; в противном случае, используйте порт 3001
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
