const axios = require('axios')

module.exports = async function() {
    return axios.get("https://raw.githubusercontent.com/rymaju/rymaju/master/README.md")
      .then(res => res.data) 
  };