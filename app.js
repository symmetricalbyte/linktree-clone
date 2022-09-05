const express = require("express");
const app = express();
const PORT = 80;

app.use(express.static('src'));

app.listen(PORT, () => {
    console.log("Application started and Listening on port " + PORT);
});

app.get('*', function(req, res){
    res.status(404).send('<script> window.location.replace(\'https://404.simetrii.me\') </script>');
});