const mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");
const catSchema = new mongoose.Schema({
  name: { type: String, required: true },
  colour: String,
  evil: Boolean,
});

const catModel = mongoose.model("cat", catSchema);

mongoose
  .connect("mongodb+srv://jdavid:jimmy123@cluster0.ikbaof7.mongodb.net/test")
  .then(() => {
    console.log("yay");
  })
  .catch((err) => {
    console.log("boo");
  });

module.exports = { catModel };
