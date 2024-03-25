import type { HttpContext } from '@adonisjs/core/http'

import User from '#models/user'
import { signInValidator } from '#validators/auth/sign_in'

export default class AuthController {
  // This is GET /sign_in
  async showSignIn({ inertia }: HttpContext) {
    return inertia.render('auth/sign_in')
  }

  // This is POST /sign_in
  async signIn({ auth, request, response, session }: HttpContext) {
    const { email, password } = await request.validateUsing(signInValidator)

    try {
      const user = await User.verifyCredentials(email, password)
      await auth.use('web').login(user)

      // Dashboard hasn't been created yet
      return response.redirect().toPath('/dashboard')
    } catch {
      // TODO - could add more complex error handling?
      session.flash('errors', { email: ['Invalid credentials'], password: ['Invalid credentials'] })

      return response.redirect().back()
    }
  }
}
