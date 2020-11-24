const express = require('express');
const app = express();

app.use(express.static('./page/'));

app.listen(12306, function(){
    console.log('服务器已启动');
});