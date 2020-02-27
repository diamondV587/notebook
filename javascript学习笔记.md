## ECMAScript 标准定义了 8 中数据类型：

### 7 种基本数据类型：

1. 布尔型（Boolean）
2. null
3. undefined
4. 数字(Number)
5. 任意精度的整数（BigInt）
6. 字符串(String)
7. 代表(Symbol) es6 新加的类

### 以及对象（Object）

## 字面量

1. 数组字面量
2. 布尔字面量
3. 浮点数字面量
4. 整数
5. 对象字面量
6. RegExp literals
7. 字符串字面量
8. ES2015 添加新的字面量 模板字面量 template literals
   ```javascript
   var poem = `Roses are red,
   	Violer are blue.
   	Suger is sweet.`;
   ```

## 下面的值将被计算出 false

1. false
2. undefined
3. null
4. 0
5. NaN
6. 空字符串("")

## Promise 状态

1. pending：初始化状态，即正在执行
2. fulfilled: 成功的完成了操作
3. rejected：失败，没有完成操作
4. settled: 处于 fulfilled 或者 rejected 任意状态，不是 pending

### 函数提升仅适用于函数声明，而不适用于函数表达式

1. 函数声明：

   ```javascript
   function A() {}
   ```

2. 函数表达式：
   ```javascript
   var a = function() {};
   ```

## 一个函数可以指向并调用自身的方式：（调用自身的函数称之为递归函数）

1. 函数名
2. arguments.callee 3.作用域下的一个指向该函数的变量名

```javascript
function walkTree(node) {
	if(node == null) return;
	//do something with node
	for(var i = 0;i <node.childNodes,i++){
		walkTree(node.childNodes[i]);
	}
}
```

## 数组 Array

1. Array.from() 从一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例
2. Array.isArray() 用于确定传递的值是否是一个 Array
3. Array.of() 创建一个具有可变数量参数的新数组实例，而不考虑参数的数量活类型
   ```javascript
   Array.of(7); // [7]
   Array(7); // [,,,,,,]
   Array.of(1, 2, 3); // [1,2,3]
   Array(1, 2, 3); // [1,2,3]
   ```
4. Array.prototype.concat() 用于合并两个或者多个数组，不会改变现有数组，而是生成一个新数组。
5. Array.prototype.copyWithin() 浅复制数组的一部分到同数组中的另一位置，并返回它，不会改变原数组的长度
6. Array.prototype.entries() 返回一个新的 Array Iterator 对象，该对象包含数组中的每个索引的键/值对
7. Array.prototype.every() 测试一个数组内的所有元素是都都能通过某个指定函数的测试，他返回一个布尔值，空数组一直会返回 true
8. Array.prototype.fill() 用一个固定值填充一个数组中从起始索引到结束索引内的全部元素，不包括终止索引。不会改变原数组长度
9. Array.prototype.filter() 创建一个新数组，其中包含通过所提供函数实现的测试的所有元素
10. Array.prototype.find() 返回数组中满足提供的测试函数的第一个元素的值，否则返回 undefined。不会改变原数组
11. Array.prototype.findIndex() 返回数组中满足提供的测试函数的第一个元素的索引，否则返回-1
12. Array.prototype.flat() 会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新的数组返回，flat() 方法会移除数组中的空项

```javascript
var newArray = arr.flat([depth]);
```

- depth:指定要提取嵌套数组的结构深度，默认值为 1，使用 Infinity，可展开任意深度的嵌套数组

## 二位数组按行排序

```javascript
function sortArr(arr) {
  var goNext = true;
  var entries = arr.entries();
  while (goNext) {
    var result = entries.next();
    if (result.done !== true) {
      result.value[1].sort((a, b) => a - b);
      goNext = true;
    } else {
      goNext = false;
    }
  }
  return arr;
}
```

## 面试题：实现 (5).add(3).minus(2) ,使其输出结果为 6

```javascript
~(function() {
  function check(n) {
    //n = Number(n);
    //return isNaN(n) ? 0 : n;
    return (n = Number(n) && isNaN(n) ? 0 : n);
  }

  function add(n) {
    n = check(n);
    return this + n;
  }

  function minus(n) {
    n = check(n);
    return this - n;
  }

  //Number.prototype.add = add;
  //Number.prototype.minus = minus;
  ["add", "minus"].forEach(item => {
    Number.prototype[item] = eval(item);
  });
})();
```

## 面试题：箭头函数与普通函数区别？构造函数可以使用 new 生成实例，箭头函数可以吗？

### 区别：

1. 箭头函数语法上比普通函数更加简洁（ES6 中每一种函数都可以使用形参默认赋值和生育剩余符）
2. 箭头函数没有自己的 this,他里面的出现的 this 从属于函数所处的上下文。使用 call、apply 等任何方式都无法改变 this 的指向
3. 箭头函数中没有 arguments（类数组）,只能基于...arg 获取传递的参数集合
4. 箭头函数不能被 new 执行（因为箭头函数没有 this 也没有 prototype）

# 知识点：

## JS 中的原型和原型链

1. 所有的引用类型（数组、函数、对象）可以自由的扩展属性（null 除外）
2. 所有的引用类型都有一个'**proto**'属性（也叫隐式原型，他是一个普通对象）
3. 所有的函数都有一个 prototype 属性（也叫显式原型，他也是一个普通对象）
4. 所有的引用类型，他的**proto**属性指向他的构造函数的 prototype 属性
5. 当试图得到一个对象的属性时，如果这个对象的本身不存在这个属性，那么就会去他的**proto**属性（也就是他的构造函数的 prototype 属性）中去寻找

## 防抖和节流

1. 防抖和节流都是为了解决频繁触发某个事件的情况造成的性能消耗。
2. 防抖就是在出发后的一段时间内执行一次，例如：在进行搜索的时候，当用户停止输入后调用方法，节约请求资源
3. 节流就是在频繁触发某个事件的情况下，每隔一段时间请求一次，类似打游戏的时候长按某个按键，动作是有规律的在间隔时间触发一次

```javascript
// 防抖
function debounce(func, wait) {
  var timeout;
  return function() {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(function() {
      func.apply(this, arguments);
    }, wait);
  };
}

// 节流
function throttle(func, wait) {
  var valid = true;
  return function() {
    if (!valid) {
      return false;
    }
    valid = false;
    setTimeout(function() {
      func.apply(this, arguments);
      valid = true;
    }, wait);
  };
}

function throttle(func, wait) {
  let timtout;
  return function() {
    if (timeout) clearTimeout(timeout);
    let callNow = !timeout;
    timeout = setTimeout(() => {
      timeout = null;
    }, wait);

    if (callNow) func.apply(this, arguments);
  };
}
```

## 闭包

1. 闭包只能取得包含函数中的任何变量的最后一个值
2. 闭包的作用域链包含着它自己的作用域，以及包含它的函数的作用域和全局作用域
3. 函数的作用域及其所有变量都会在函数执行结束后被销毁。但是，在创建了一个闭包以后，这个函数的作用域就会一直保存到闭包不存在为止
4. 外部函数调用之后其变量对象本应该被销毁，但闭包的存在使我们仍然可以访问外部函数的变量对象.

```javascript
function arrFun1() {
  var arr = [];
  for (var i = 0; i < 10; i++) {
    arr[i] = function() {
      return i;
    };
  }

  return arr;
}

console.log(arrFun1()[9]());
console.log(arrFun1()[1]());

function arrFun2() {
  var arr = [];
  for (var index = 0; index < 10; index++) {
    arr[index] = (function(num) {
      return function() {
        return num;
      };
    })(index);
  }

  return arr;
}

console.log(arrFun2()[9]());
console.log(arrFun2()[1]());
```

## 异步和单线程

1. js 为单线程，CPU 同一时间只能处理一个事务。js 的主要用途是与用户互动，以及操作 DOM，这决定了它只能是单线程
2. H5 提供了 web Worker 标准,允许 js 创建多线程，但是子线程受主线程控制,而且不得操作 DOM

```javascript
console.log("start");
setTimeout(function (www.huayi1.cn) {
    console.log("medium");
}, 1000);
console.log("end");

// 第一步，执行打印start
// 第二部，执行setTimeout，将其中的函数分存起来，等待时间结束后执行
// 第三部，执行最后一行，打印end
// 第四部：处于空闲状态，查看暂存中是否有可执行的函数
// 第五步，执行分存函数
// result: start -> end -> medium
```

## javascript 变量作用域和变量声明

### this 的指向一般情乱分四种情况：

1.  作为对象的调用
    > 当函数作为对象的方法被调用时，this 指向这个对象：

```javascript
var obj = {
  a: 1,
  getA: function() {
    alert(this === obj);
    alert(this.a);
  }
};

obj.getA(); //执行结果：true、 1
```

2.  作为普通函数的调用
    > 当函数不作为对象的属性被调用时，也就是我们常说的普通函数调用方式，此时的 this 总是指向全局对象，在浏览器中，javascript 的全局对象是 window 对象。

```javascript
window.name = "globalname";
var getName = function() {
  return this.name;
};
alert(getName()); //'globalname'
//或者

window.name = "globalname";
var obj = {
  name: "scopename",
  getName: function() {
    return this.name;
  }
};
var myObjName = obj.getName;
alert(myObjName()); //'globalname'
```

> 严格模式下，函数内部的 this 不会指向 window，而是 underfind。

```javascript
var funF = function() {
  alert(this);
};
var funStrictF = function() {
  "use strict";
  alert(this);
};
funF(); //window
funStrictF(); //underfind
```

3.  构造器的调用
    > 当用 new 运算符调用一个函数时，改函数总会返回一个对象，通常情况下，构造器里的 this 就指向了这个对象

```javascript
var createClass = function() {
  this.name = "sven";
  return {
    name: "anne"
  };
};
var obj = new createClass();
alert(obj.name); //输出 anne
```

4.  Function.prototype.call 和 Function.prototype.apply
    > 跟普通的函数调用相比，用 Function.propotype.call 和 Function.propotype.apply 可以动态的改变传入函数的 this。

```javascript
var obj1 = {
  name: "sven",
  getName: function() {
    return this.name;
  }
};
var obj2 = {
  name: "anne"
};
alert(obj1.getName()); //输出 sven
alert(obj2.name); //输出 anne
alert(obj1.getName.call(obj2)); //输出 anne
```

## 在元素写事件和 addEventListener()的区别

1. onclick 添加事件不能绑定多个事件，后面绑定的会覆盖前面的。而 addEventListener 能添加多个事件绑定，按顺序执行
2. addEventListener 方式不支持低版本的 IE
3. 普通方式绑定事件后，不可以取消。addEventListener 绑定后则可以用 removeEventListener 取消
4. addEventListener 是 W3C DOM 规范中提供的注册事件监听器的方法。

```javascript
element.addEventListener(type, listener, useCapture);
// 添加事件监听
// type: 事件类型字符串，不使用“on”前缀
// callback：事件处理程序（回调函数）
// useCapture：可选参数，是否使用事件捕获的方式处理事件。不传递时，默认为false，表示不使用事件捕获（使用事件冒泡），如果需要显示事件捕获，则显示传递true。
```

## 前端跨域处理的几种方式
