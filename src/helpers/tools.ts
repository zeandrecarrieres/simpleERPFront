// import bcrypt from "bcrypt";
export default class tools {
  static async createPassword(password:any) {
    const step = 10;
    // const salt = await bcrypt.genSalt(step);
    // const newPassword = await bcrypt.hash(password, salt);
    return password;
  }
  static async validatePassword(password:any, hash:any) {
    // const validate = await bcrypt.compare(password, hash);
    return true;
  }

  static async validateEmail(email:String) {
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return email.match(regexEmail);
  }
}
