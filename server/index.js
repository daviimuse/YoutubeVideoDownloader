const express = require('express')
const ytdl =  require('ytdl-core')
//npmjs.com/package/ytdl-core
const cors = require('cors')

const app = express()
app.use(cors())


app.get("/download", async(req, res) =>{
    try {
        const url = req.query.url;
        const videoID = await ytdl.getURLVideoID(url)
        const metaInfo = await ytdl.getInfo(url)

        let data = {
            url : "https://ww.youtube.com/embed" + videoID,
            info : metaInfo.formats,
        }
        return res.send(data)
    } catch (error) {
        return res.status(500)
    }
})

app.listen(4000, ()=>{
        console.log("Server running on port 4000.")
})


