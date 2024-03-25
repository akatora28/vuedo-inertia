import { BaseSeeder } from '@adonisjs/lucid/seeders'

import User from '#models/user'

export default class extends BaseSeeder {
  // Even though on a PoC, configured to only run this seeder in dev,
  // based off of NODE_ENV env variable
  static environment = ['development']

  async run() {
    // Creates a default user for testing login / logout
    await User.create({
      id: 1,
      fullName: 'Example User',
      email: 'user@example.com',
      password: 'P@ssw0rd!',
    })
  }
}
