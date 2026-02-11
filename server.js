const express = require('express');
const app = express();

app.get('/', 
    (req, res)=>{
        console.log('Here');
        res.send('Hi');
    });

app.get('/potato',
    (req, res)=>{
        console.log('There');
        res.send('<p>Here are your potatoes</p>')
    }
)
app.get('/download',
    (req, res)=>{
        console.log('Downloading');
        res.download(server.js);
    }
)



app.listen(3030);