
export const validUser = {
  username: 'tomsmith',
  password: 'SuperSecretPassword!',
};

export const invalidUser = {
  username: 'wrong',
  password: 'wrong123',
};

type LoginTestData = {
  username: string;
  password: string;
  expectedError: string;
};

export const loginData: LoginTestData[] = [
  {
    username: 'wrong_user',
    password: 'wrong_password',
    expectedError: 'Your username is invalid!',
  },
  {
    username: 'tomsmith',
    password: 'wrong_password',
    expectedError: 'Your password is invalid!',
  },
];