module.exports = function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  var parsed = {ipaddress: null, language: null, OS: null};
  res.send(JSON.stringify(parsed));
}