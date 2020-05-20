class Child {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const tempChildren = [];
const tempChild1 = new Child("Sophia", "6");
const tempChild2 = new Child("Samuel", "3");
const tempChild3 = new Child("Samuel", "3");
tempChildren.push(tempChild1);
tempChildren.push(tempChild2);
tempChildren.push(tempChild3);
tempChildren.push(tempChild3);
// tempChildren.push(tempChild3);
// tempChildren.push(tempChild3);
// tempChildren.push(tempChild3);

export default tempChildren;
