// var personCount = 0
// function Person (name, age, doFunc) {
//   this.name = name
//   this.age = age
//   this.doFunc = doFunc
//   personCount++
// }
// var p1 = new Person('sz', 18, function () {
//   console.log('sz 在上课')
// })

// var p2 = new Person('ls', 18, function () {
//   console.log('ls learning')
// })

// console.log('总共创建了:' + personCount + '个对象')

// function Person (name, age, doFunc) {
//   this.name = name
//   this.age = age
//   this.doFunc = doFunc
//   if (!Person.personCount) {
//     Person.personCount = 0
//   }
//   Person.personCount++
// }

// Person.printPersonCount = function () {
//   console.log('总共创建了:' + Person.personCount + '个对象')
// }

// var p1 = new Person('sz', 18, function () {
//   console.log('sz 在上课')
// })

// var p2 = new Person('ls', 18, function () {
//   console.log('ls learning')
// })

// Person.printPersonCount()

// function A () {
//   this.a = 1
// }

// function B () {
//   this.b = 2
// }

// B.prototype = new A() // B.prototype->A.prototype
// B.prototype.constructor = B

// function C () {
//   this.c = 3
// }

// C.prototype = new B() // C.prototype->B.prototype
// C.prototype.constructor = C

// var c = new C(); // c->C.prototype->B.prototype->A.prototype 

// c instanceof A // true
// c instanceof B // true
// c instanceof C // true

// A.prototype.isPrototypeOf(c) // A.prototype 对象是否存在于c对象的原型链中 检查A.prototype
// B.prototype.isPrototypeOf(c)
// C.prototype.isPrototypeOf(c)
console.log(Math.max())
let hd = {
  data: [1, 2, 3, 324, 2131, 5]
}

Object.setPrototypeOf(hd, {
  // max() {
  //   return data.sort((a, b) => b - a)[0]
  // }
  max(data) {
    return data.sort((a, b) => b - a)[0]
  }
})

console.log(hd.max(hd.data))
console.log(Math.max.apply(null, hd.data))
let xj = {
  lessons: {js: 87,php: 64,node: 99},
// get data() {
//   return Object.values(this.lessons)
// }
}
// console.log(hd.max.apply(xj))
console.log(hd.max.apply(null, Array.of(Object.values(xj.lessons))))
console.log(hd.max.call(null, Object.values(xj.lessons)))
console.log(Math.max.apply(null, Object.values(xj.lessons)))


function Foo() {
  getName = function () { alert (1); };
  return this;
}
Foo.getName = function () { alert (2);};
Foo.prototype.getName = function () { alert (3);};
var getName = function () { alert (4);};
function getName() { alert (5);}

//请写出以下输出结果：
Foo.getName(); // 2
getName(); //4
Foo().getName();//1
getName();//1
new Foo.getName();//2
new Foo().getName();//3
new new Foo().getName();//3
