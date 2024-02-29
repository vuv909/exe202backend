export const formatPhone = (phone = '') => phone.replace(/\s/g, "");

export const getRandomSmsCode = () => {
    const digits = "0123456789";
    let result = "";
  
    for (let i = 0; i < 6; i++) {
      // Pick a random digit from the digits string
      const randomIndex = Math.floor(Math.random() * digits.length);
      result += digits[randomIndex];
    }
  
    return result;
  }