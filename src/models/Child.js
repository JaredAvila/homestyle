class Child {
  constructor(name, age, img, progress) {
    this.name = name;
    this.age = age;
    this.img = img;
    this.progress = progress;
  }
}

const tempChildren = [];
const tempChild1 = new Child(
  "Sophia",
  "6",
  "https://scontent-sjc3-1.xx.fbcdn.net/v/t31.0-8/21055032_10212363583942767_7844132110020692318_o.jpg?_nc_cat=105&_nc_sid=84a396&_nc_ohc=xdCQCOi1tVYAX-MbLIT&_nc_ht=scontent-sjc3-1.xx&oh=4e3a46ed3c9f7a806a6dc5cd94653c92&oe=5EEBEEE1",
  "88"
);
const tempChild2 = new Child(
  "Samuel",
  "3",
  "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/69352617_10217897235080587_7121918481078943744_o.jpg?_nc_cat=108&_nc_sid=730e14&_nc_ohc=PLcLjGa2ZmYAX9aGRL9&_nc_ht=scontent-sjc3-1.xx&oh=d53aede90493cedf88506e39ce2b20cb&oe=5EED91F9",
  "69"
);
const tempChild3 = new Child(
  "Abigail",
  "0",
  "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/92018215_10219950615853823_2394193840861872128_o.jpg?_nc_cat=110&_nc_sid=8bfeb9&_nc_ohc=RLdi2FfuoKoAX9ZCX1H&_nc_ht=scontent-sjc3-1.xx&oh=c717da72c151b0cf2a8e076e9899c430&oe=5EEC418C",
  "10"
);
const tempChild4 = new Child(
  "Fiona",
  "0",
  "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/97281291_10220472578302558_7345818334559993856_o.jpg?_nc_cat=100&_nc_sid=09cbfe&_nc_ohc=HcY0KaITOM8AX-D0HzP&_nc_ht=scontent-sjc3-1.xx&oh=f8ec83753f10c4cccc0a2e517e93fd37&oe=5EEBB2F0",
  "27"
);
tempChildren.push(tempChild1);
tempChildren.push(tempChild2);
tempChildren.push(tempChild3);
tempChildren.push(tempChild4);
// tempChildren.push(tempChild3);
// tempChildren.push(tempChild3);
// tempChildren.push(tempChild3);

export default tempChildren;
