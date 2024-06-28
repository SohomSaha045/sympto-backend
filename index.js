const express = require("express");
const app = express();
const {searchGoogleMaps,searchGoogleMapsByLocation} = require("./function");
const cors = require("cors");

app.use(cors()); 
app.use(express.json()); 
app.get('/',async (req,res)=>{
  res.send('Server Live');
})
app.get("/Coordinates", async (req, res) => {
  var doc= req.body.Doc;
  var lat= req.body.Lat;
  var log= req.body.Log;
  // console.log(req.body.Doc);
  const data = await searchGoogleMaps(doc,lat,log);
  //   const data = await scrapeWebsite();
  // console.log(data);
  //   res.send(data);
  res.json(data);
  // res.json({});
});
app.get("/Location", async (req, res) => {
  var doc= req.body.Doc;
  var location=req.body.Location;
  const data = await searchGoogleMapsByLocation(doc,location);
 
  res.json(data);
 
});

// Start the server
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
