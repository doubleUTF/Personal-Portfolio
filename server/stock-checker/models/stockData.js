const mongoose=require('mongoose');
const Schema= mongoose.Schema;

let stockDataSchema=new Schema({
  stock:{
    required:true,
    type:String,
    unique:true
  },
  likes:{
    type:[String],
  }
})

let StockData=mongoose.model('StockData', stockDataSchema)

module.exports={StockData};
