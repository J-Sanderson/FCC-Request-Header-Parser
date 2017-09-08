function getIP(str) {
  return str;
}

function getLang(str) {
  return str;
}

function getOS(str) {
  return str;
}

module.exports = function(req) {
  return {
    ipaddress: getIP(req.connection.remoteAddress),
    language: getLang(req.headers['accept-language']),
    OS: getOS(req.headers['user-agent'])
  }
}