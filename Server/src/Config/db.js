const { connect } = require("mongoose");

module.exports = () => {
  return connect(
    "mongodb+srv://dhruv:qwer1234@cluster0.tb33g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );
};
