const express = require('express');
const {boot} = require('star-men-engine');

const app = express();

// if node will be used to serve static files
app.use('/public', express.static('./public'));

const PORT = process.env.PORT || 6500;

(async () => {
    try {
        
        await boot(app);
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (err) {
        console.error(err);
    }
})();

