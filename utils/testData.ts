export const validUser = {
  username: 'tomsmith',
  password: 'SuperSecretPassword!'
};

export const invalidUser = {
  username: 'wrong',
  password: 'wrong123'
};

export const loginData= [
    {
        username: "wrong_user",
        password: "wrong_password",
        expectedError: "Your username is invalid!"
    },
    {
        username: "tomsmith",
        password: "wrong_password",
        expectedError: "Your password is invalid!"
    },
  
];