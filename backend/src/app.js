const express = require('express');

const app = express();

app.use(express.json());

/**
 * Health check used by CI and monitoring.
 * Responds with the team's API format: { data, error }.
 */
app.get('/api/v1/health', (req, res) => {
  res.status(200).json({ data: { status: 'ok' }, error: null });
});

module.exports = app;
