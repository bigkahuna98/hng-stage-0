const express = require('express');
const cors = require('cors');
const app = express();

// 1. Enable CORS so the HNG validator bot can access your API from its domain
app.use(cors());

// 2. The Home Route (The "Static" part)
app.get('/', (req, res) => {
    res.send('<h1>HNG Stage 0 - DevOps Task</h1><p>Status: Active</p>');
});

// 3. The API Route (The "Dynamic" part)
app.get('/api', (req, res) => {
    const responseData = {
        "email": "your-registered-email@example.com", // Change this!
        "current_datetime": new Date().toISOString(), // Generates real-time UTC
        "github_url": "https://github.com/yourusername/your-repo-name" // Change this!
    };
    
    res.status(200).json(responseData);
});

// 4. Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
