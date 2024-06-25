import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const jwtSecret = process.env.JWT_SECRET;

const generateToken = (id) => {
  return jwt.sign({ id }, jwtSecret, {
    expiresIn: "7d",
  });
};

const register = async (req, res) => {
  const { name, email, password } = req.body;

  //check if user exists
  const user = await User.findOne({ email });

  if (user) {
    res.status(422).json({ errors: ["Por favor, utilize outro e-mail"] });
    return;
  }

  //generate password hash
  const salt = await bcrypt.genSalt();
  const passwordHash = await bcrypt.hash(password, salt);

  const newUser = await User.create({
    name,
    email,
    password: passwordHash,
  });

  //if user was create successfully, return token
  if (!newUser) {
    res
      .status(422)
      .json({ errors: ["Houve um erro, por favor tente mais tarde!"] });
    return;
  }

  res.status(201).json({
    _id: newUser._id,
    token: generateToken(newUser._id),
  });
};

//Sign user in
const login = async (req, res) => {
  const {email, password} = req.body

  const user = await User.findOne({email})

  //Check if user exists
  if(!user) {
    res.status(404).json({errors: ["Usuário não encontrado"]})
    return
  }

  //check if password matches
  if(!(await bcrypt.compare(password, user.password))) {
    res.status(422).json({errors: ["Senha inválida"]})
    return
  }
  //return user with token
  res.status(201).json({
    _id: user._id,
    profileImage: user.profileImage,
    token: generateToken(user._id),
  });
}

const getCurrentUser = async(req, res) => {
  const user = req.user
  res.status(200).json(user)
}

export  {register, login, getCurrentUser};
