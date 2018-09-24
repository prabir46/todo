var mongoose = require ('mongoose');

var usersSchema = new mongoose.Schema({
    email: {
        type: String,
        validate: {
            validator: function(v) {
                var re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
                return re.test(v);
            },
            message: '{VALUE} is not a valid E-mail!'            
        },
        unique: true,
        require: true

},
   password:{
    type: String,
    minlength: 5,
    require: true
   },
   firstname: {
    type: String
},
lastname: {
    type: String
},
username: {
  type: String
},
   created: {
       type: Date,
       default: Date.now           
       
   },
   isdeleted:
   {
       type: Number,
       default: 0
   }
});

const users = module.exports = mongoose.model('User',usersSchema);