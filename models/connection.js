var mongoose = require('mongoose');

var options = {
    connectTimeoutMS: 5000,
    useUnifiedTopology : true,
    useNewUrlParser: true,
}

mongoose.connect('mongodb+srv://Clabb:Clarouche@cluster0.agzxd.mongodb.net/morningnews?retryWrites=true&w=majority',
    options,
    function(err){
        if (err == null) {
            console.log('success')
        } else {
            console.log(err)
        }
    }
)

module.exports = mongoose