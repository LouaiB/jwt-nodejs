const mongoose = require('mongoose');

const RefreshSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true
    },
});

const Refresh = mongoose.model('Refresh', RefreshSchema);
module.exports = Refresh;