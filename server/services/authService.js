const User = require("../models/User");
const generateToken = require("../utils/generateToken");

const register = async ({
  name,
  email,
  password,
  idNumber,
  role = "student", // Default role is 'student', you can pass 'admin' explicitly
  isApproved = true, // Default 'isApproved' for students, but this can be adjusted for admin
}) => {
  // Ensure that email is unique
  const existingUser = await User.findOne({ email });
  if (existingUser) throw new Error("User already exists");

  // Admin-specific logic
  if (role === "admin") {
    // Admin doesn't need an ID number or approval status by default
    if (!idNumber) {
      // You might want to make sure admins don't have an ID number if it's irrelevant
      idNumber = null;
    }
    // Optionally, you can auto-approve admin accounts or set other defaults
    isApproved = true; // Admins are typically approved immediately
  } else if (role === "student") {
    // Student-specific validation
    if (!idNumber) throw new Error("ID number is required for students.");
    if (idNumber?.length > 13) {
      throw new Error("ID number cannot be more than 13 digits.");
    }

    const existingId = await User.findOne({ idNumber });
    if (existingId) throw new Error("ID number is already registered!");
  }

  // Create the user
  const user = await User.create({
    name,
    email,
    password,
    idNumber,
    role,
    isApproved,
  });

  return {
    success: true,
    message: `${
      role.charAt(0).toUpperCase() + role.slice(1)
    } registered successfully`,

    data: {
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      idNumber: user.idNumber,
      isApproved: user.isApproved,
    },
    token: generateToken(user._id),
  };
};

const login = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user || !(await user.matchPassword(password))) {
    throw new Error("Invalid email or password.");
  }

  return {
    success: true,
    message: "Login successful",
    data: {
      id: user._id,
      name: user.name,
      email: user.email,
      idNumber: user.idNumber,
      role: user.role,
      isApproved: user.isApproved,
      booksBorrowedCount: user.booksBorrowedCount,
    },
    token: generateToken(user._id),
  };
};

module.exports = {
  register,
  login,
};
