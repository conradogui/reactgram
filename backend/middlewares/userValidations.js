import { body } from "express-validator";

const userCreateValidation = () => {
  return [
    body("name")
      .isString()
      .withMessage("O nome é obrigatório")
      .isLength({ min: 3 })
      .withMessage("O nome precisa ter no mínimo 3 caracteres!"),
    body("email")
      .isString()
      .withMessage("O e-mail é obrigatorio")
      .isEmail()
      .withMessage("Insira um e-mail válido"),
    body("password")
      .isString()
      .withMessage("A senha é obrigatoria")
      .isLength({ min: 5 })
      .withMessage("A senha precisa ter no mínimo 5 caracteres!"),
    body("confirmpassword")
      .isString()
      .withMessage("A confirmação da senha é obrigatoria")
      .custom((value, { req }) => {
        if (value != req.body.password) {
          throw new Error("As senhas não são iguais!");
        }
        return true;
      }),
  ];
};

const loginValidation = () => {
  return [
    body("email")
      .isString()
      .withMessage("O e-mail é obrigatorio!")
      .isEmail()
      .withMessage("Insira um e-mail válido"),
    body("password").isString().withMessage("A senha é obrigatória"),
  ];
};

const userUpdateValidation = () => {
  return [
    body("name")
      .optional()
      .isLength({min:3})
      .withMessage("O nome precisa de pelo menos 3 caracteres!"),
    body("password")
      .optional()
      .isLength({min:5})
      .withMessage("A senha precisa ter no mínimo 5 carcteres")
  ]
}

export { userCreateValidation, loginValidation, userUpdateValidation};
