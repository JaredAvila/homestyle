class User {
  constructor(fName, lName, email, password, children) {
    this.fName = fName;
    this.lName = lName;
    this.email = email;
    this.password = password;
    this.children = children;
  }
}

const tempUserData = {
  fName: "Jared",
  lName: "Avila",
  email: "jared@gmail.com",
  password: "12345six",
  children: [
    {
      childName: "Sophia",
      age: "6",
    },
    {
      childName: "Samule",
      age: "3",
    },
  ],
};

export const TempUser = new User(
  tempUserData.fName,
  tempUserData.lName,
  tempUserData.email,
  tempUserData.password,
  tempUserData.children
);
