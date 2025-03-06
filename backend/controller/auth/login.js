const bcrypt = require("bcryptjs");
const {
  User,
  Superadmin,
  Admin,
  Manager,
  Employee,
} = require("@/backend/models/user"); // Adjust the path based on your file structure models/user"); // Adjust the path based on your file structure
const { generateToken, generateRefreshToken } = require("@/backend/middelware/token");


// Login function for version 3 (loginV3)
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Check if the account is active
    if (user.status !== "Active") {
      return res.status(400).json({ message: "Account is not active" });
    }
    if (user.registrationToken) {
      return res.status(400).json({ message: "Account not verified" });
    }

    // Compare the password with the hashed password stored in the database
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Generate a JWT token
    const access_token = generateToken(user);
    const refresh_token = generateRefreshToken(user);
    // Save the generated tokens in the user's record
    user.access_token = access_token;
    user.refresh_token = refresh_token;
    await user.save(); // Save the user with the updated tokens
    console.log(user); // Log the user for debugging purposes
    // If the user is an Admin and is part of a team, update the Superadmin's team_ids
    if (user.role === "Admin" && user.status === "Active" && user.team_id) {
      // // Find the Superadmin in the database and Update the Superadmin's team_ids array
      const superadmin = await Superadmin.findOne();
      if (superadmin) {
        // Ensure team_ids is initialized as an array
        if (!Array.isArray(superadmin.team_id)) {
          superadmin.team_id = [];
        }

        // Ensure team_id is not already in the list to avoid duplicates
        if (!superadmin.team_id.includes(user.team_id)) {
          superadmin.team_id.push(user.team_id);
          await superadmin.save(); // Save the updated Superadmin record
        }
      }
    }
    // Respond with success message and user information
    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    console.error(error); // Log the error for debugging purposes
    res.status(500).json({ message: error.message }); // Return a server error response
  }
};

// Export the login function
module.exports = { loginUser };