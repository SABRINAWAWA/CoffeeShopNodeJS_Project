const { Controller } = require('vertex360')({ site_id: process.env.TURBO_APP_ID })
const Menu = require('../models/Menu')

class MenuController extends Controller {
  constructor () {
    super(Menu, process.env)
  }

  async get (params) {
    const menus = await Menu.find(params, Controller.parseFilters(params))
    return Menu.convertToJson(menus)
  }

  async getById (id) {
    const menu = await Menu.findById(id)
    if (menu == null) {
      throw new Error(`${Menu.resourceName} ${id} not found.`)
    }

    return menu.summary()
  }

  async post (body) {
    const menu = await Menu.create(body)
    return menu.summary()
  }

  async put (id, params) {
    const menu = await Menu.findByIdAndUpdate(id, params, { new: true })
    return menu.summary()
  }

  async delete (id) {
    const menu = await Menu.findByIdAndRemove(id)
    return menu
  }
}

module.exports = new MenuController()

