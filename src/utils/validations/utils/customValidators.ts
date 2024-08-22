const regex = {
  is_valid_password: /^([a-zA-Z0-9-_.]{8,})*$/,
  is_latin_letters: /^[A-Za-z\s]*$/,
  is_georgian_letters: /^[ა-ჰ\s]*$/,
  is_base_64_str: /^[A-Za-z0-9+/]+={0,2}$/,
  is_numeric: /^[0-9]*$/,
  is_valid_url: /^(ftp|http|https):\/\/[^ "]+$/,
  is_2_5_range_words: /^\s*(\S+\s+){1,4}\S+\s*$/,
};

export const isValidPassword = {
  validator: (password: string) => regex.is_valid_password.test(password),
  message:
    "Password must contain min 8 symbol. Use latin letters and symbols ( . - _ )",
};

export const confirmPasswordValidation = {
  validator: (password: string, candidatePassword: string) =>
    password === candidatePassword,
  message: "confirm password must match password field",
};

export const isNumeric = {
  validator: (value: string) => regex.is_numeric.test(value),
  message: "Please enter only numbers",
};

export const is_2_5_rangeWords = {
  validator: (value: string) => regex.is_2_5_range_words.test(value),
  message: "Please enter your fullname",
};
