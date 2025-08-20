import express from "express";

const app = express();
app.use(express.json()) //This line imp for post,put,delete api's

const PORT = 5001;

/**
 * 1. Simple root route
 */

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/register",(req,res)=>{
  let userData = req.body
  console.log(userData)
 // res.json(userData)
  // or
  res.json({Msg:"user registered successfully"})
});


// Start server
app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});