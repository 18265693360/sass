const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({ // 定义用户的数据结构
    name: String,
    email: {
        unique: true, // 唯一
        type: String
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        default: "https://www.baidu.com/link?url=ZDcBk5HGwpY0--cgH8TUiO-3i4KAjhKUUQx2nBxk1-XEfNT0B4AijOpYQlXg5VzSeAtnIXvgXbrfukaA2vnvMAVdYvfiaGd6LK1YFBhC36Omo9foD38p1lpb_woFesC6w23WrVFXWTqHmXDkxDta_nggeeYUCLoTYdeXGAMKjhi-ZpHa3q5Vr1srGoHUIt srsS5-rVvYojCXOpjuKtySIWJ111p7qiCD5NnENSzCb1u1x6uE2BZMIWuIpLq35XPPyHTjQR6DZxu3xmGD97MmyWmFAoH_Wthup4vPPiUHOZ6yi7lywVKV1VXaC_fgtfAMhLgVnI87tmw0D2xbBDwv3pp7NniA1TPtyMGBnn61h8ccZ92llNNSgmHzXTJhVMkTe6IbxyrI0tskZJ3ZCuR_0Y6YpIzNS0LjY9yTS_fHlD-1UMujH6fWuFpCDzFNfVtRBeg-eRnpzLPxSIWMjmSbVU_Il3_6iTAdmH47c-2z9DjaygTMTl3iTRB6Nh78E6D5&wd=&eqid=c79a6e0100086e89000000025c7e579c"
    }
}, {
    versionKey: false,
    timestamps: {createdAt: "createTime", updatedAt: "updatedTime"}
});

module.exports = mongoose.model("user", userSchema);