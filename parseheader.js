function getIP(str) {
  //IPv6 string begins with :
  if (str.substr(0, 1) === ':') {
    //IP will be the last item in a colon seperated list
    str = str.split(':');
    return str[str.length - 1];
  } else {
    //IPv4, no editing required
    return str;
  }
}

function getLang(str) {
  //get first item in comma seperated list
  str = str.split(',')
  return str[0];
}

function getOS(str) {
  //OS is held in the first set of brackets
  str = str.split(/[\(\)]/);
  return str[1];
}

module.exports = function(req) {
  return {
    ipaddress: getIP(req.connection.remoteAddress),
    language: getLang(req.headers['accept-language']),
    OS: getOS(req.headers['user-agent'])
  }
}