import express from 'express';

const app = express();
app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.post('/leads', (req, res) => {
  // placeholder lead handling
  const lead = req.body;
  res.status(201).json({ message: 'Lead received', lead });
});

app.post('/verify-insurance', (req, res) => {
  const info = req.body;
  // placeholder verification logic
  res.json({ eligible: true, info });
});

app.post('/book-appointment', (req, res) => {
  const appointment = req.body;
  res.status(201).json({ message: 'Appointment booked', appointment });
});

export default app;

if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Clinic backend listening on port ${port}`);
  });
}
