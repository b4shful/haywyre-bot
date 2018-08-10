module.exports = () => {

  var http = require('http');
  var url = require('url');

  function triggerIftttMakerWebhook(event, key, value1, value2, value3) {
    const iftttNotificationUrl = `https://maker.ifttt.com/trigger/${event}/with/key/${key}`;
    const postData = JSON.stringify({ value1, value2, value3 });

    var parsedUrl = url.parse(iftttNotificationUrl);
    var post_options = {
      hostname: parsedUrl.hostname,
      port: parsedUrl.port,
      path: parsedUrl.path,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': postData.length
      }
    };

    // Set up the request
    var post_req = http.request(post_options, function(res) {
      res.setEncoding('utf8');
      res.on('data', function(chunk) {
        console.log('Response: ' + chunk);
      });
    });

    // Trigger a POST to the url with the body.
    post_req.write(postData);
    post_req.end();
  }

};