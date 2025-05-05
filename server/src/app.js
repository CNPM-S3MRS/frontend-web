const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const spacesRoutes = require('./routes/space');
const reservationsRoutes = require('./routes/reservation');
const errorHandler = require('./middlewares/errorHandler');


const PORT = process.env.PORT || 5000;

const app = express();

// Middleware
app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/spaces', spacesRoutes);
app.use('/api/reservations', reservationsRoutes);


// Error handling middleware
app.use(errorHandler);

// Root route
app.use('/', (req,res) => {
    res.send('HCMUT Smart Study Space API is running')
}) ;

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;