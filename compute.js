// Auto-generated Compute Node Skeleton for GlobalBlockInc
const express = require('express');
const app = express();
const port = 6000;

app.use(express.json());

// Compute Task Endpoint
app.post('/compute-task', (req, res) => {
  res.send('Compute task received and processing.');
});

app.listen(port, () => {
  console.log(`GlobalBlock Compute Node listening on port ${port}`);
});
