const mongoose = require('mongoose'),
    uri = "product-manager-db";

mongoose.connect(`mongodb://localhost/${uri}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("You're now in the mainframe..."))
    .catch((err) => console.log("Error... ",err))