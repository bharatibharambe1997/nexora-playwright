import 'dotenv/config';

export const environment = {
  baseURL: process.env.BASE_URL,

  users: {
    standardUser: {
      username: process.env.STANDARD_USER,
      password: process.env.STANDARD_PASSWORD,
    },
  },
};