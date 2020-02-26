ECMAScript 标准定义了8中数据类型：
	7中基本数据类型：
		1.布尔型（Boolean）
		2.null
		3.undefined
		4.数字(Number)
		5.任意精度的整数（BigInt）
		6.字符串(String)
		7.代表(Symbol) es6新加的类
	以及对象（Object）

字面量
	1.数组字面量
	2.布尔字面量
	3.浮点数字面量
	4.整数 
	5.对象字面量
	6.RegExp literals
	7.字符串字面量
	8.ES2015 添加新的字面量 模板字面量 template literals 
		var poem = 
		`Roses are red,
		Violer are blue.
		Suger is sweet.`
		
下面的值将被计算出false
	1.false
	2.undefined
	3.null
	4.0
	5.NaN
	6.空字符串("")
	
Promise 状态
	1.pending：初始化状态，即正在执行
	2.fulfilled: 成功的完成了操作
	3.rejected：失败，没有完成操作
	4.settled: 处于fulfilled或者rejected任意状态，不是pending
	
函数提升仅适用于函数声明，而不适用于函数表达式
	函数声明： function test(){ consloe.log("123")}
	函数表达式：var test = function(){consloe.log("123")}
	
一个函数可以指向并调用自身的方式：（调用自身的函数称之为递归函数）
	1.函数名
	2.arguments.callee
	3.作用域下的一个指向该函数的变量名
	function walkTree(node) {
		if(node == null) return;
		//do something with node
		for(var i = 0;i <node.childNodes,i++){
			walkTree(node.childNodes[i]);
		}
	}
	
数组Array
	Array.from() 从一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例
	
	Array.isArray() 用于确定传递的值是否是一个Array
	
	Array.of() 创建一个具有可变数量参数的新数组实例，而不考虑参数的数量活类型 
				Array.of(7) // [7]  
				Array(7)    // [,,,,,,]
				Array.of(1,2,3) // [1,2,3]
				Array(1,2,3)   /// [1,2,3]
				
	Array.prototype.concat() 用于合并两个或者多个数组，不会改变现有数组，而是生成一个新数组。
	
	Array.prototype.copyWithin() 浅复制数组的一部分到同数组中的另一位置，并返回它，不会改变原数组的长度
	
	Array.prototype.entries() 返回一个新的Array Iterator对象，该对象包含数组中的每个索引的键/值对
	
	Array.prototype.every() 测试一个数组内的所有元素是都都能通过某个指定函数的测试，他返回一个布尔值，空数组一直会返回true
	
	Array.prototype.fill() 用一个固定值填充一个数组中从起始索引到结束索引内的全部元素，不包括终止索引。不会改变原数组长度
	
	Array.prototype.filter() 创建一个新数组，其中包含通过所提供函数实现的测试的所有元素
	
	Array.prototype.find() 返回数组中满足提供的测试函数的第一个元素的值，否则返回undefined。不会改变原数组
	
	Array.prototype.findIndex() 返回数组中满足提供的测试函数的第一个元素的索引，否则返回-1
	
	Array.prototype.flat() 会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新的数组返回，flat() 方法会移除数组中的空项
							var newArray = arr.flat([depth]) depth:指定要提取嵌套数组的结构深度，默认值为1，使用 Infinity，可展开任意深度的嵌套数组
	
	
	
	二位数组按行排序
	function sortArr(arr) {
		var goNext = true;
		var entries = arr.entries();
		while(goNext) {
			var result = entries.next();
			if(result.done !== true) {
				result.value[1].sort((a,b) => a-b);
				goNext = true;
			} else {
				goNext = false;
			}
		}
		
		return arr;
	}

面试题：实现 (5).add(3).minus(2) ,使其输出结果为6
	~function(){
		function check(n) {
			//n = Number(n);
			//return isNaN(n) ? 0 : n;
			
			return n=Number(n) && isNaN(n) ? 0 : n;
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
		
		["add","minus"].forEach(item => {
			Number.prototype[item]= eval(item);
		});
	}();
	
面试题：箭头函数与普通函数区别？构造函数可以使用new生成实例，箭头函数可以吗？
区别：
	1.箭头函数语法上比普通函数更加简洁（ES6中每一种函数都可以使用形参默认赋值和生育剩余符）
	2.箭头函数没有自己的this,他里面的出现的this从属于函数所处的上下文。使用call、apply等任何方式都无法改变this的指向
	3.箭头函数中没有arguments（类数组）,只能基于...arg获取传递的参数集合
	4.箭头函数不能被new执行（因为箭头函数没有this 也没有prototype）
	
	
	
知识点：
JS中的原型和原型链
	1.所有的引用类型（数组、函数、对象）可以自由的扩展属性（null除外）
	2.所有的引用类型都有一个'__proto__'属性（也叫隐式原型，他是一个普通对象）
	3.所有的函数都有一个prototype属性（也叫显式原型，他也是一个普通对象）
	4.所有的引用类型，他的__proto__属性指向他的构造函数的prototype属性
	5.当试图得到一个对象的属性时，如果这个对象的本身不存在这个属性，那么就会去他的__proto__属性（也就是他的构造函数的prototype属性）中去寻找
	
	