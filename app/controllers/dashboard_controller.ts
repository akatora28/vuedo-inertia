import type { HttpContext } from '@adonisjs/core/http'

export default class DashboardController {
  // TODO - add in some queries to populate this w/ data
  async show({ inertia }: HttpContext) {
    return inertia.render('dashboard')
  }
}
