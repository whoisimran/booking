const Users = require('../database/userdb');
const rooms = require('../database/roomdb');
const bookings = require('../database/booking');

// Code start from here .....

module.exports = {
    create_user: (data,callback)=>{
        let userDetails = new Users(data);
        userDetails.save((err, result) => {
            if(!err){
                return callback(null,result)
            }    
            else{
                return callback(null,err)
            }    
        });
    
    },
      login: (data,callback)=>{
        let email = data.email;
        Users.findOne({email:email},(err,result)=>{
            if(err){
                return callback(null,err);
            }else{
                return callback(null,result);
            }
        })
    },
    getuser: (callback)=>{
        Users.find((err,result)=>{
            if(err){
                return callback(null,err);
            }else{
                return callback(null,result);
            }
        })
    },
    getuserbyid: (_id,callback)=>{
        Users.findOne({_id},(err,result)=>{
            if(err){
                return callback(null,err);
            }else{
                return callback(null,result);
            }
        })
    },
    create_room: (data,callback)=>{
        let room = new rooms(data);
        room.save((err, result) => {
            if(!err){
                return callback(null,result)
            }    
            else{
                return callback(null,err)
            }    
        });
    
    },
    create_booking: (data,callback)=>{
        let booking = new bookings(data);
        booking.save((err, result) => {
            if(!err){
                return callback(null,result)
            }    
            else{
                return callback(null,err)
            }    
        });
    
    },
    getroom: (callback)=>{
        rooms.find((err,result)=>{
            if(err){
                return callback(null, err)
            }else{
                return callback(null,result)
            }
        })
    },
    getroombyid: (_id,callback)=>{
        rooms.findOne({_id},(err,result)=>{
            if(err){
                return callback(null,err);
            }else{
                return callback(null,result);
            }
        })
    },
    getbooking: (callback)=>{
        bookings.find((err,result)=>{
            if(err){
                return callback(null, err)
            }else{
                return callback(null,result)
            }
        })
    },
    getbookingbyid: (user_id,callback)=>{
        bookings.findOne({user_id:user_id},(err,result)=>{
            if(err){
                return callback(null,err);
            }else{
                return callback(null,result);
            }
        })
    }
    // blogupdatebyid: (data,callback)=>{
    //     blogs.findByIdAndUpdate(data.id,data,(err,result)=>{
    //         if(err){
    //             return callback(null, err)
    //         }else{
    //             return callback(null,result)
    //         }
    //     })
    // },
    //  deleteblog: (id,callback)=>{
    //     blogs.findByIdAndDelete(id,(err,result)=>{
    //         if(err){
    //             return callback(null,err)
    //         }else{
    //             return callback(null,result);
    //         }
    //     })
    // },
    // getcomments: (b_Id,callback)=>{
    //     comments.find({b_Id},(err,result)=>{
    //         if(err){
    //             return callback(null,err);
    //         }else{
    //             return callback(null,result);
    //         }
    //     })
    // },


}