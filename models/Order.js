const { Model } = require('vertex360')({ site_id: process.env.TURBO_APP_ID })

const props = {
  name:{type:String, default:"", display:true},
  phone:{type:String, default:""},
  email:{type:String, default:""}, 
  order:{type:String, default:""},
  size:{type:String, default:""},
  schema: { type: String, default: 'order', immutable: true },
  timestamp: { type: Date, default: new Date(), immutable: true }
}

class Order extends Model {
  constructor () {
    super()
    this.schema(props)
  }
}

module.exports = Order
