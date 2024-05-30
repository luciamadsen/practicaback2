const logger = require('../utils/logger');
const User = require('../models/userModel');
const { hashPassword } = require('../utils/handlePassword');

const registerUser = async (req, res) => {
  try {
    const { first_name, last_name, email, age, password } = req.body;
    const hashedPassword = await hashPassword(password);
    const newUser = new User({ first_name, last_name, email, age, password: hashedPassword });

    await newUser.save();
    logger.info(`User registered: ${email}`);
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    logger.error('Error registering user:', error);
    res.status(500).json({ message: 'Error registering user' });
  }
};



module.exports = { registerUser };
