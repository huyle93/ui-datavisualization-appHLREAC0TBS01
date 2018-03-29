let request = require('request')

let options = {
  "url": "https://s3.amazonaws.com/hjhcapstone/data.json",
  "method": "GET"
}
// Parse JSON data
request(options,(err,resp,body)=>{
    var data = JSON.parse(body)
})