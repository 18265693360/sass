const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    name: String
}, {
    versionKey: false,
    timestamps: {createdAt: "createTime", updatedAt: "updateTime"}
});

module.exports = mongoose.model("category",categorySchema);