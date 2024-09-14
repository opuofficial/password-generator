export const checkPasswordStrength = (password) => {
  let strength = 0;

  // Length criteria
  if (password.length >= 8) strength += 1;
  if (password.length >= 12) strength += 1;

  // Check for lowercase letters
  if (/[a-z]/.test(password)) strength += 1;

  // Check for uppercase letters
  if (/[A-Z]/.test(password)) strength += 1;

  // Check for numbers
  if (/\d/.test(password)) strength += 1;

  // Check for special characters
  if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength += 1;

  // Check for common patterns (e.g., consecutive letters or numbers)
  if (!/(\w)\1{2,}/.test(password)) strength += 1; // Avoids repeated characters

  // Final result
  let result = "";
  switch (strength) {
    case 0:
    case 1:
    case 2:
      result = "Weak";
      break;
    case 3:
    case 4:
      result = "Moderate";
      break;
    case 5:
    case 6:
      result = "Strong";
      break;
    default:
      result = "Very Strong";
  }

  return result;
};

export const shuffle = (array) => {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

export const generateRandomIndex = (data) => {
  return Math.floor(Math.random() * data.length);
};
