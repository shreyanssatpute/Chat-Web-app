const express = require("express");     //run our http server 
const cors = require("cors");           //to call this server from any other origin
const { default: axios } = require("axios");

const app = express();                      
app.use(express.json());
app.use(cors({ origin: true }));        //this code is used to do the functionality specified in line 2 

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const r = await axios.put(
        'https://api.chatengine.io/users/' ,
        {username: username ,secret: username, first_name: username},
        {headers: {"private-key":"0b03793f-7cbf-4be8-b075-0085b34a1f0c"}}
    )
    return res.status(r.status).json(r.data)
  } catch (e) {
    return res.status(e.response.status).json(e.response.data)

  }
});

app.listen(3001);