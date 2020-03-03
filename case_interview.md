## javascript 中的 typeof 返回哪些数据类型

```javascript
typeof isNaN; // function
typeof isNaN(0); // boolean
```

### 检测数组的几种方式

```javascript
Array.isArray(); //ES5
toString.call(); // [object Array]
var arr = [];
arr.constructor; // Array
arr instanceof Array; // true
```

## 传统事件绑定和符合 W3C 标准的事件绑定有什么区别

```javascript
<div onclick=" "></div>
<button onmouseover=""></button>
```

1. 如果说给同一个元素绑定两次或者多次相同的类型，那么后面的绑定会覆盖前面的绑定
2. 不支持 DOM 事件流 事件捕获阶段->目标元素阶段->事件冒泡阶段

### W3C 标准的事件绑定 addEventListener / removeEventListener

#### 非 IE 浏览器

1. 如果说给同一个元素绑定两次或者多次相同类型的事件，所有的绑定会依次触发
2. 支持 DOM 事件流的
3. 进行事件绑定传参不需要 on 前缀

```javascript
addEventListener("click", function() {}, true);
// 第三个参数代表是都在捕获阶段执行，默认为false
```

#### IE 浏览器

1. IE9 开始到 IE11 dege：addEventListener
2. IE9 之前，attachEvent / detchEvent
   - 进行事件类型传参需要带上 on 前缀
   ```javascript
   dom1.attachEvent("onclick", function() {});
   ```
   - 这种方式只支持事件冒泡，不支持事件捕获

## IE 和标准下有哪些兼容性的写法

```javascript
ev = ev || window.event; //获取触发事件的对象
var target = ev.srcElement || ev.event; //获取触发事件的源对象
document.documentElement.clientWidth || document.body.clientWidth;
```

## call 和 apply 的区别

1. 都是为了用一个不属于一个对象的方法，让这个对象去执行

```javascript
toString.call([], 1, 2, 3);
toString.apply([], [1, 2, 3]);
Object.call(this.obj1, obj2, obj3);
Object.apply(arguments);
```

## JavaScript 如何实现继承

1. 原型链继承
2. 借用构造函数继承
3. 原型+构造函数组合继承
4. 寄生继承

```javascript
//1. 原型链继承
function Animal() {
   this.age = 20;
}

function Cat() {
   this.name = "jack";
}

Cat.prototype = new Animal(); // 原型链继承

var cat = new Cat();
console.log(cat.name) // 'jack'
console.log(cat.age) // 20
```

```javascript
//2. 借用构造函数继承
function Animal() {
   this.age = 20;
}

function Cat() {
   Animal.call(this); //借用构造函数继承
   this.name = "jack";
}

var cat = new Cat();
console.log(cat.name) // 'jack'
console.log(cat.age) // 20
```

```javascript
//3. 原型+构造函数组合继承
function Animal() {
   this.age = 20;
}

function Cat() {
   this.name = "jack";

   //构造函数的继承
   this.run = function(){
      console.log(this.name+"在跑步");
   }
}

Cat.prototype.sayHello = function(){
   console.log("sayHello");
}

var cat = new Cat();
cat.sayHello(); //sayHello
cat.run();
```

```javascript
//4. 寄生继承--
//工厂模式创建对象
function create(name,age,sex){
   var obj = {};
   obj.name = name;
   obj.age = age;
   obj.sex = sex;
   return obj;
}

var person1 = create("王五",20,"女");
console.log(person1.age);

// 寄生模式
function Japanese(name,language){
   this.name = name;
   this.language = language;
}

function Chinese() {

}

function createChinese(name,language) {
   var obj = {};
   Japanese.call(obj,name,language);
   return obj;
}

var jxc = createChinese("tom","普通话");
console.log(jxc.constructor) // Object
```

## javascript 创建对象的几种方式

1. 对象自面量
2. 构造函数
3. 纯构造函数
4. 空构造函数+原型
5. 混合工造函数+原型
6. 动态原型
7. 寄生构造函数
8. Object.create()

```javascript

// 对象自面量的方式
// 利用Object
var obj = {};
obj.gender = "女";
console.log(obj.gender); // “女”
console.log(obj["gender"]);

//动态原型的方式
function Person(name,work) {
   this.name = name;
   //动态原型的方式
   if(work) {
      Person.prototype.working = function(){
         console.log("工作："+work);
      }
   }
}

var p1 = new Person("linan");
var p2 = new Person("tom","engine");

var p3 = Object.create(p1);
console.log(p3);
// Object.create() 类似于下面方法
function extend(obj) {
   var result = {};
   for(var prop in obj) {
      result[prop] = obj[prop];
   }

   result.constructor = obj.constructor;
}
```

## JavaScript this 指针、闭包、作用域

1. this指向执行上下文

## 如何阻止事件冒泡和默认事件

## javascript 的同源策略

## 编写一个数组去重的方法

## javascript 是一门什么样的语言，它有哪些特点

## 如何检测数组的数据类型

## 希望获取到页面中所有的 checkbox 怎么做

## javascript 的事件流模型都有什么

## 看下列代码输出为何？解释原因

## var numberArray = [3,6,2,4,1,5]

## 输出今天的日期，以 YYYY-MM-DD 的方式

## 将字符串"<tr><td>{$id}</td><td>{$name}</td></tr>"

## 5种盒子垂直居中的方式

```javascript
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div class="box"></div>
  </body>
</html>  
```
