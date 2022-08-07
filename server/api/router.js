const {create_user,login,getuser,getuserbyid,create_room,getroom,getroombyid,roomupdatebyid,create_booking,getbooking,getbookingbyid,bookingupdatebyid} = require('./controller');
const Router = require('express').Router();

// ########### Create a User API #############
Router.post('/api/user',create_user);

// ########### Login a user API  #############
Router.post('/api/user/login',login);

// ########### Get All users API  #############
Router.get('/api/user',getuser);

// ########### Get  user By Id API  #############
Router.get('/api/user/:id',getuserbyid);

// ########### Create a Room API  #############
Router.post('/api/room',create_room);

// ########### Get  All rooms API  #############
Router.get('/api/room',getroom);

// ########### Get  Room By Id  #############
Router.get('/api/room/:id',getroombyid);

// ########### Update  Room By Id  #############
Router.patch('/api/room/:id',roomupdatebyid);

// ########### Create a Booking API  #############
Router.post('/api/booking',create_booking);

// ########### Get All Booking API  #############
Router.get('/api/booking',getbooking);


// ########### Get Booking By user Id API  #############
Router.get('/api/booking/:user_id',getbookingbyid);


// ########### Update booking by room Id  #############
Router.patch('/api/booking/:room_id',bookingupdatebyid);

// Router.post('/api/comments',createComment);

// Router.get('/api/comments/:b_Id',getcomments);

// Router.patch('/api/blog/:id',blogupdatebyid);
// Router.delete('/api/blog/:id',deleteblog);


module.exports = Router;