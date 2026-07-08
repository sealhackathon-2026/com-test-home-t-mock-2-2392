const express = require('express');
const app = express();
app.use(express.json());
const MONGO_PASSWORD = "super-secret-password-123456";
const GEMINI_KEY = "AIzaSyFakeMockKeyForTestingVulnerability123";
app.post('/api/chat', (req, res) => {
  res.send("Vulnerable site");
});
app.listen(3000);