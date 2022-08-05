const {create_user,login,getuser, getuserbyid,create_room,create_booking,getroom,getroombyid,getbooking,getbookingbyid} = require('./service');

module.exports = {
    create_user: (req,res,next)=>{  
        let body = req.body;
        create_user(body,(err,result)=>{
            if(err){
                res.status(400).json({success:false,message: err})
            }else{
                res.status(200).json({success:true,message: result})

            }
        })
    },
    login: (req,res)=>{
        let body = req.body;
        login(body,(err,result)=>{
            if(err){
                res.status(400).json({success:false,message:err})
            }else{
                if(!result){
                    res.status(400).json({success:false,message:'Invalid Login Details!'})
                }else{
                    if(body.password == result.password){
                        res.status(200).json({success:true, message:result})
                    }else{
                        res.status(400).json({success:false, message:'Invalid Login Details!'})

                    }

                }
            }
        })

    },
    getuser: (req,res)=>{
        getuser((err,result)=>{
            if(err){
                res.status(400).json({success:false,message:err})
            }else{
               
                res.status(200).json({success:true,message:result})
            }
        })
    },
    getuserbyid: (req,res)=>{
        let _id = req.params.id;
        getuserbyid(_id,(err,result)=>{
            if(err){
                res.status(400).json({success:false,message:err})
            }else{
                if(!result){
                    res.status(400).json({success:false,message:'user Not found'})
                }else{
                res.status(200).json({success:true, message:result})

                }
            }
        })

    },
    create_room: (req,res)=>{
        let body = req.body;
        create_room(body,(err,result)=>{
            if(err){
                res.status(400).json({success:false,message: err})
            }else{
                res.status(200).json({success:true,message: result})

            }
        })
    },
    create_booking: (req,res)=>{
        let body = req.body;
        create_booking(body,(err,result)=>{
            if(err){
                res.status(400).json({success:false,message: err})
            }else{
                res.status(200).json({success:true,message: result})

            }
        })
    },
    getroom: (req,res)=>{
        getroom((err,result)=>{
            if(err){
                res.status(400).json({success:false,message:err})
            }else{
               
                res.status(200).json({success:true,message:result})
            }
        })
    },
    getroombyid: (req,res)=>{
        let _id = req.params.id;
        getroombyid(_id,(err,result)=>{
            if(err){
                res.status(400).json({success:false,message:err})
            }else{
                if(!result){
                    res.status(400).json({success:false,message:'user Not found'})
                }else{
                res.status(200).json({success:true, message:result})

                }
            }
        })

    },
    getbooking: (req,res)=>{
        getbooking((err,result)=>{
            if(err){
                res.status(400).json({success:false,message:err})
            }else{
               
                res.status(200).json({success:true,message:result})
            }
        })
    },
    getbookingbyid: (req,res)=>{
        let user_id = req.params.user_id;
        getbookingbyid(user_id,(err,result)=>{
            if(err){
                res.status(400).json({success:false,message:err})
            }else{
                if(!result){
                    res.status(400).json({success:false,message:'Blog Not found'})
                }else{
                res.status(200).json({success:true, message:result})

                }
            }
        })

    },
    // blogupdatebyid: (req,res)=>{
    //     let id = req.params.id;
    //     let body = req.body;
    //     body.id = id;
    //     blogupdatebyid(body,(err,result)=>{
    //         if(err){
    //             res.status(400).json({success:false,message:err})
    //         }else{
    //             if(!result){
    //                 res.status(400).json({success:false,message:'Blog Not found'})
    //             }else{
    //             res.status(200).json({success:true, message:result})

    //             }
    //         }
    //     })

    // },
    // deleteblog: (req,res)=>{
    //     let id = req.params.id;
    //     deleteblog(id,(err,result)=>{
    //         if(err){
    //             res.status(400).json({success:false,message:err})
    //         }else{
    //             if(!result){
    //                 res.status(400).json({success:false,message:'Blog Not found'})
    //             }else{createComment
    //             res.status(200).json({success:true, message:result})

    //             }
    //         }
    //     })
    // },
    // getcomments: (req,res)=>{
    //     let b_Id = req.params.b_Id;
    //     getcomments(b_Id,(err,result)=>{
    //         if(err){
    //             res.status(400).json({success:false,message:err})
    //         }else{
    //             if(!result){
    //                 res.status(400).json({success:false,message:'Comments Not found'})
    //             }else{
    //             res.status(200).json({success:true, message:result})

    //             }
    //         }
    //     })

    // }

}