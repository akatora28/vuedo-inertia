/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
router.on('/inertia').renderInertia('home', { version: 6 })

/**
 * Auth routes
 */
const AuthController = () => import('#controllers/auth_controller')

router
  .group(() => {
    router.get('/sign_in', [AuthController, 'showSignIn'])
    router.post('/sign_in', [AuthController, 'signIn'])
  })
  .prefix('/auth')
