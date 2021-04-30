const PostController = require('./PostController')
const ItemController=require('./ItemController')
const OrderController=require('./OrderController')
const MenuController=require('./MenuController')

module.exports = {
  post: PostController,
  item: ItemController,
  order: OrderController,
  menu: MenuController
}
