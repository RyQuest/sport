const mongoose=require('mongoose');

const validator=require('validator');

const bcrypt = require('bcryptjs');

const TeamPrizePoolSchema=new mongoose.Schema({

    user_id:[{ type: mongoose.Schema.Types.ObjectId, ref: 'users' }],
    
    team_id:[{ type: mongoose.Schema.Types.ObjectId, ref: 'teams' }],
    
    prize_pool_id:[{ type: mongoose.Schema.Types.ObjectId, ref: 'prize_pools' }],
    
    created_at:{
        type:String,
        default:new Date()
    },
    updated_at:{
        type:String,
        default:null
    }
})

var TeamPrizePoolInfo =  mongoose.model('team_prize_pools',TeamPrizePoolSchema);

module.exports = {TeamPrizePoolInfo:TeamPrizePoolInfo};

