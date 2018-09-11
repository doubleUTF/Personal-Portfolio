var file_metadata=(req,res,next)=>{
  res.json({
  type:req.file.mimetype,
  filename:req.file.originalname,
  size:req.file.size
})
}

module.exports={file_metadata}
