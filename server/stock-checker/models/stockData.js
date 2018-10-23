const mongoose=require('mongoose');
const Schema= mongoose.Schema;

let stockDataSchema=new Schema({
  stock:{
    required:true,
    type:String
  },
  likes:{
    type:[String],
  }
})

let StockData=mongoose.model('StockData', stockDataSchema)

module.exports={StockData};
