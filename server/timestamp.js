var timestamp = (req,res,next)=>{
  let date=new Date();
  res.json({"unix":date.getTime(),"utc":date.toUTCString()})
}

var timestamp_dateString = (req,res,next)=>{
  let dateString=req.params.date_string;
  let date;

  if (/^\d+$/.test(dateString)){
    // Integer in ms
    date=new Date(Number(dateString))
  } else {
    // Date string
    date=new Date(dateString);
  }
  if (date=='Invalid Date'){
    return res.json({"error":"Invalid Date"})
  }
  res.json({"unix":date.getTime(),"utc":date.toUTCString()})
}

module.exports={timestamp,timestamp_dateString}
