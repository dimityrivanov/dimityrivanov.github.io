const { exec } = require("child_process");


var express = require("express");
var app = express();
app.listen(3000, () => {
 console.log("Server running on port 3000");
});

app.get("/on", (req, res, next) => {
    exec("echo 'on 0' | cec-client RPI -s -d 1", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        exec("echo 'on 0' | cec-client RPI -s -d 1");
        console.log(`stdout: ${stdout}`);
    });

    res.json(["Tony","Lisa","Michael","Ginger","Food"]);
   });


   app.get("/off", (req, res, next) => {

    exec("echo 'standby 0' | cec-client RPI -s -d 1", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });

    res.json(["Tony","Lisa","Michael","Ginger","Food"]);
   });

