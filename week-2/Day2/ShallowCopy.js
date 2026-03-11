const user = {
  id: 101,
  name: "Ravi",
  preferences: {
    theme: "dark",
    language: "en"
  }
};

// Create shallow copy using spread
const copiedUser = { ...user };

//  Modify copied object
copiedUser.name = "Arjun";                 // Primitive change
copiedUser.preferences.theme = "light";    // Nested object change

// Log both objects
console.log("Original User:", user);
console.log("Copied User:", copiedUser);