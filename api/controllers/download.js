const download = (app) => (req, res) => {
res.download('./files/test.txt', 'test.txt', function (err) {
    if (err) {
      // Handle error, but keep in mind the response may be partially-sent
      // so check res.headersSent
      console.log("error")
    } else {
      // decrement a download credit, etc.
      console.log("Removed download credit.")
    }
  })
}

exports.download = download