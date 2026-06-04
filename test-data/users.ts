export const users = {
  standardUser: process.env.STANDARD_USER || 'standard_user',

  lockedUser: process.env.LOCKED_USER || 'locked_out_user',

  password: process.env.PASSWORD || 'secret_sauce',

  invalidPassword: process.env.INVALID_PASSWORD || 'wrong_password',
};