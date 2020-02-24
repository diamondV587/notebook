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