---
title: JavaScript相关
permalink: /front-end/base-begin/javascript.html
headerDepth: 2
---

# JavaScript

`JavaScript`是一种具有函数优先的轻量级，解释型或即时编译型的编程语言。
虽然它是作为开发Web页面的脚本语言而出名，但是它也被用到了很多非浏览器环境中，
`JavaScript`基于原型编程、多范式的动态脚本语言，并且支持`面向对象`、`命令式`、`声明式`、`函数式编程范式`。

## 面向对象

> OOP： Object Oriented Programming

- 面向对象是把事物分解成一个个对象，然后由对象之间分工合作
- 面向对象是以对象功能来划分问题，而不是步骤
- 每个对象都是功能中心，具有明确分工
- 编程灵活、代码可复用，容易维护和开发，适合多人合作的大型软件项目

面向对象的特性： `封装`、`继承`、`多态`

## 面向过程

面向对象思维特点：

- 抽象对象共用的属性和行为 封装成一个类（模板）
- 对类进行实例化，获取类的对象

在`JavaScript`中，对象是一组无序的相关属性和方法的结合，所有的事务都是对象，例如：字符串、数组、数值、函数等。

对象由属性和方法组成：

- 属性：事物的特征，在对象中用属性来表示
- 方法：事物的行为，在对象中用方法来表示

面向过程

- 优点：性能比面向对象高，适合跟硬件联系很紧密的东西，例如单片机开发
- 缺点：没有面向对象编程容易维护、容易复用、容易拓展

面向对象

- 优点：容易维护、容易复用、容易拓展，由于面向对象有封装、继承、多态等特性，可以设计出低耦合的系统，使系统更加灵活，更加易于维护
- 缺点：性能比面向过程低

例如：面向过程的程序是蛋炒饭，面向对象的程序则是盖浇饭

## 类（Class）

> ES6新增了类的概念，可以使用`class`关键字来声明一个类，然后用类来实例化对象

```js
// 定义类
class Star {
  // 构造器传参
  constructor(name) {
    this.name = name
  }

  // 定义类的方法 支持传参
  say() {

  }
}

// 创建类对象
const star = new Star('xxx')
// 调用类方法
star.say()
```

## 类的继承(extends)

> 子类可以继承父类的属性和方法

```js
// 定义父类
class Father {
  // 父类中方法
  money() {

  }
}

// 定义子类继承父类
class Son extends Father {
  // 子类中也定义和父类相同的方法
  money() {
    // 利用super关键字，调用父类的普通函数
    // 注意：super关键字可以访问和调用对象父类上的函数，也可以调用父类的构造函数，也可以调用父类的普通函数
    return super.money()
  }

  // 子类自定义方法
  diy() {
    // ....
  }
}

// 实例化子类的对象

const son = new Son()

// son类继承了money对象对象，直接使用

son.money()
```

**子类在构造函数中使用super关键字，必须放在this前面，必须先调用父类的构造方法，再使用子类构造方法**

注意：

- 在ES6中，类没有变量提升，必须先定义类，才能通过类实例化对象
- 类里面的共有的属性和方法，一定要加`this`使用

**`constructor`构造函数里面的`this`指向实例对象，方法里面的`this`指向这个方法的调用者**

## 构造函数和原型

> 在ES6之前，对象不是基于类创建的，而是用一种称为“构造函数”的特殊函数来定义对象和它们的特征。

`class`出现之前，创建对象的方式：

- 对象字面量
- new Object()
- 自定义构造函数

```js
// 利用new Object() 创建对象
const obj1 = new Object()

// 利用对象字面量创建对象
const obj2 = {}

// 利用构造函数创建对象
function CreatObj(name, sex) {
  this.name = name
  this.sex = sex
  this.test = function () {
    console.log('xxxx')
  }
}

// 创建
const obj = new CreatObj('xxx', 'xx')
// 使用
obj.test()
```

**构造函数是一种特殊的函数，主要用来初始化对象，即为对象成员变量赋初始值，总是与new一起使用。
可以把对象中一些公共的属性和方法抽取出来，然后封装在这个函数里面。**

创建对象时候，执行`new`会做：

- 在内存中创建一个新的空对象（开辟内存空间）
- 让this指向这个新的对象
- 执行构造函数里面的代码，给构造函数添加属性和方法
- 返回对象【因此，构造函数中不需要return】

**注意： 构造函数虽然好用，但是存在浪费内存的问题，每次都会开辟不同的内存空间，存放同一函数**

### 构造函数原型

> 构造函数通过原型分配的函数是所有对象所共享的

`JavaScript`规定，每一个构造函数都有一个`prototype`属性，指向另一个对象。
`prototype`本身就是一个对象，这个对象的所有属性和方法，都会被构造函数所拥有。

**因此，我们可以把那些不变的方法，直接定义在`prototype`对象上面，这样所有的对象的实例就可以共享这些方法**

```js
// 方法挂在构造函数的原型对象
creatObj.prototype.test = function () {
  // ...
}
```

一般情况下，我们把公共属性定义到构造函数里面，公共的方法放在原型对象身上；

- 原型的本质： 对象，`prototype`也可以称为原型对象
- 原型的作用是：共享方法

### 对象原型**proto**

**对象都会有一个属性`__proto__`指向构造函数的`prototype`原型对象**

我们对象可以使用构造函数`prototype`原型对象的属性和方法，就是因为对象有`__proto__`原型的存在

- `__proto__`对象原型和原型对象`prototype`是等价的
- `__proto__`对象原型的意义就在于为对象的查找机制提供一个方向，后者说一条路线，但是它是一个`非标准属性`，
  在开发中不可以使用这个属性，只是内部指向原型对象`prototype`

对象身上系统自己添加一个`__proto__`指向我们构造函数的原型对象`prototype`

调用对象方法的查找规则：

- 先查实例化对象是否有对应方法。如果有就直接调用
- 没有则根据对象原型`__proto__`的存在，去查找构造函数原型对象`prototype`上查找对应方法

```js
// 实例化对象中的_proto对象原型 和 构造函数中的原型对象prototype是等价的  输出结构为:true;
// console.log(obj.__proto__ === creatObj.prototype)
```

### 构造函数

对象原型`__proto__` 和 构造函数`prototype`原型对象里面都有一个`constructor`属性，`constructor`称为构造函数，是直接指向构造函数本身的

**用来记录该对象引用那个构造函数，可以让原型对象重新指向原来的构造函数**

```js
creatObj.prototype = {
  // 如果修改了原来的原型对象，给原型对象赋值的是一个对象，则必须手动的利用`constructor`指回原来的构造函数
  constructor: creatObj,
  // 方法
  test() {
    // ...
  }
}
```

### 总结对比

#### 原型链

- 构造函数的原型对象里面的`__proto__`原型指向父类 `Object.prototype`
- `Object.prototype`原型对象里面的`__proto__`原型，指向为null

**这里的`Object`就好像提供的最高级父类，后面的对象类似继承，通过原型链链接**

#### 成员查找机制（规则）

- 当访问一个对象的属性（包括方法）时，首先查找这个对象**自身**有没有该属性
- 如果没有就查找它的原型（也就是`__proto__`指向的`prototype`原型对象）；
- 还没有就查找原型对象的原型（Object的原型对象）
- 依次类推一直找到Object为止（null）
- **`__proto__`对象原型的意义就在于对象成员查找机制提供一个方向/路线**

总结(就近原则)：

实例对象----> 构造函数---->Object对象----> null

#### this指向

- 在构造函数中，里面的`this`指向的是对象实例
- 在原型对象函数里面的`this`指向的是实例对象

## 组合继承

> ES6之前并没有提供extends继承，可以通过构造函数+原型对象模拟实现继承，即：组合继承

### call()

```js
// 定义函数
function fn(x, y) {
  console.log('xxxx')
  console.log(this)
  console.log(x, y)
}

const result = {
  name: 'test'
}
// 1. call() 可以调用函数
// fn()=== fn.call()

// 2. call()可以改变这个函数的this指向，此时这个函数的this就指向了call的第一个参数对象 格式：fn.call(对象，参数一，参数二, ....)
// fn.call(result,1,2)
```

### 构造函数

> 借用构造函数继承属性

```js
// 父构造函数
function Father(name, age) {
  this.name = name
  this.age = age
}

// 子构造函数
function Son(name, age) {
  // this指向子构造函数的对象实例，通过call后，父构造函数会指向子构造函数
  Father.call(this, name, age)
}

// 实例化对象
const son = new Son('xxx', 18)
// 输出： {name:'xx',age:18}
console.log(son)
```

类本质上其实还是一个函数，可以简单的认为，**类就是构造函数的另一种写法**

**`ES6`中的类其实就是语法糖，可以理解为`ES5`中的构造函数实现的简单写法**

## 函数进阶

### 定义方式

- 自定义函数(命名函数）
- 函数表达式(匿名函数)
- 利用new Function('参数一','参数二','函数体') 【利用Function构造函数】

```js
// 命名函数
function fn() {

}
```

```js
// 匿名函数
function fn() {

}
```

```js
// 利用Function构造函数 【所有函数都是Function的实例】
const fn = new Function('a', 'b', 'return a+b')
console.log(fn)
```

### 调用方式

- 普通函数
- 对象的方法
- 构造函数
- 绑定事件函数
- 定时器函数
- 立即执行函数

```js
// 普通函数
function fn() {
  // ...
}

fn()
fn.call()

// 对象的方法
const obj = {
  test() {
    // ..
  }
}

obj.test()

// 构造函数
function Fn() {
  // ...
}
const fn = new Fn()

console.log(fn)

// 绑定事件函数(例如：按钮点击事件)
button.onclick = function () {
  // ...
}

// 定时器函数(延时执行)
setInterval(() => {
  // ....
}, 1000)

  // 立即执行函数（自动调用）
  (() => {
    // .....
  })()
```

### 内部的this指向

- 普通函数`this`指向`window`
- 对象的方法`this`指向的是对象
- 构造函数`this`指向对应的实例对象，原型对象中的`this`也是执行实例对象
- **绑定时间函数`this` 指向函数调用者**
- 定时器函数`this`指向`window`
- 立即执行函数`this`指向`window`

### 改变内部this指向

- call()
- bind()
- apply()

#### call()函数

调用函数`fn.call()` ，改变this指向

```js
const obj = {
  name: 'xxx'
}

function fn(a, b) {
  // 此时this指向window
  console.log(this)
  return a + b
}

// call()处理后，this指向obj对象
fn.call(obj, 1, 2)
```

#### apply方法

`apply()`方法调用一个函数，简单理解为调用函数的方式，但是它可以改变函数的`this`指向。

函数格式：`fun.apply(thisArg,[argsArray])`

- `thisArg`: 在fun函数运行时指定的this值
- `argsArray`: 传递的值，必须包含在数组里面
- 返回值就是函数的返回值，本质是调用函数

**`apply()`参数传数组**

```js
// 求数组中的最大值

const arr = [1, 4, 23, 78, 25]
const max1 = Math.max.apply(null, arr)
const max2 = Math.max.apply(Math, arr)
```

#### bind()方法

`bind()`方法不会调用函数，但是能改变函数内部`this`指向

函数格式：`fun.bind(thisArg,arg1,arg2)`

- `thisArg`： 在fun函数运行时指定的this值
- `arg1，arg2`： 传递的其他参数
- 返回由指定的this值和初始化参数改造的**原函数拷贝**

```js
const obj = {
  name: 'xxx'
}

function fn() {
  // 当前指向window
  console.log(this)
}

// 不会调用，只是生成一个fn的新函数
const f = fn.bind(obj)
// 此时，fn函数中的this指向obj对象
f()
```

注意：

- 不会调用原来的函数，可以改变原来函数内部的this指向
- 返回的是原来函数改变之后的新函数
- 如果有的函数不需要立即调用，但是有需要改变函数内部的this指向，此时用bind

#### 总结对比

相同点：都可以改变函数内部的this指向

不同点：

- `call`和`apply`会调用函数，并且改变函数内部this指向
- `call`和`apply`传递的参数不一样，`call`传递参数`arg1、arg2...`，`apply`是数组形式
- **`bind`不会调用函数，可以改变函数内部`this`指向。**

#### 主要应用场景

- `call`经常用做继承
- `apply`经常和数组有关系，比如借助数学对象是实现最大值、最小值
- `bind`不调用函数，但还会改变`this`指向。

### 严格模式

> 在IE10以上版本的浏览器中才会被支持，旧版本浏览器中会被省略

- 消除`JavaScript`语法的一些不合理、不严谨的地方，减少怪异行为
- 消除代码运行的一些不安全地方，确保代码运行的安全
- 提高编译器效率，增加运行速度
- 禁用在ECMAScript的未来版本中，可能会定义的一些语法，为未来新版本的JavaScript做好铺垫。例如：保留字/关键字 super class
  export等不能做变量名

```js
// 严格模式
'use strict'
```

**在严格模式下，全局作用域中函数的this指向的是undefined，而不是window对象**

### 高阶函数

> 是对其他函数进行操作的函数，接收函数作为参数或者将函数作为返回值输出

函数本身也是一种数据类型，同样可以作为参数，传递给另外一个参数使用。例如：回调函数

```js
// 高阶函数示例
function fn(callback) {
  callback && callback();
}

fn(function () {
  alert('hi')
})
function fn() {
  return function () {
  }
}

fn();
```

## 闭包

> 有权访问另外一个函数作用域中变量的函数，本质是函数

简单来说，一个作用域可以访问另外一个函数内部的局部变量

```js
function fn() {
  const num = 10

  // 函数内部定义函数
  function fun() {
    console.log(num)
  }

  // 简单调用
  fun()
}

// 调用fn()形成闭包
fn()
```

**闭包的作用：外面的作用域可以访问函数内部的局部变量**

```js
function fn() {
  const num = 10
  console.log(num)

  // 函数内部定义函数
  function fun() {
    console.log(num)
  }

  // 返回函数
  return fun

//  等价于匿名函数
// return function(){
//   console.log(num)
// }
}

// 执行fn拿到fun函数
const fun1 = fn()
// 执行fun1函数，就可以访问fn函数内部的变量num
fun1()
```

## 浅拷贝

> 浅拷贝只是拷贝一层，更深层次对象级别的只**拷贝引用**

@[code js](@code/node/javascript/simpleCopy.js)

注意：

`Object.assign()` 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。

语法格式：`Object.assign(target, ...sources)`

- `target`：目标对象
- `source`：源对象（可多个）

## 深拷贝

深拷贝拷贝多层，每一级别的数据都会拷贝。会新开辟内存空间，拷贝多层，每一级别的数据都会拷贝

@[code js](@code/node/javascript/deepCopy.js)

## Set集合

> 类似于数组，但是成员的值都是唯一的，**没有重复的值**；

**Set本身是一个构造函数，用来生成`Set`数据结构**

```js
// 定义set集合
const setData1 = new Set()
// 可以接收数组作为参数，用来初始化
const setData2 = new Set([1, 2, 3, 4, 5])
// 例如数组去重
let arr = [1, 2, 2, 3, 3, 4, 5, 6]
const temp = new Set(arr)
arr = [...temp]
```

`Set`集合提供的常用方法:

- `add(value)`: 添加某个值，返回Set本身
- `delete(value)`: 删除某个值，返回一个布尔值，表示删除是否成功
- `has(value)`: 返回一个布尔值，表示该值是否为Set的成员
- `clear()`: 清除所有成员，没有返回值

```js
const set = new Set()
set.add(1).add(2).add(3)
set.delete(2)
set.has(1)
set.clear()
```

`Set`结构的实例与数组是一样的，也拥有`forEach()`方法，用于对每个成员执行某种操作，没有返回值

```js
const set = new Set()

set.forEach((value) => {
  console.log(value)
  return value
})
```

## 数组方法

### join()

使用给定的连接字符把数组转换成字符串，默认的是逗号`,`，例如：

```js
const arr = [1, 2, 3]
// 输出：1,2,3
console.log(arr.join())
// 输出：1-2-3
console.log(arr.join('-'))
// 输出：[1, 2, 3]  原数组不变
console.log(arr)
```

### push()

把里面的内容添加到数组末尾，并返回修改后的长度，例如：

```js
const arr = ['Lisa', 'Tom']
const count = arr.push('142vip.cn')
// 输出 3
console.log(count)
// 输出 ["Lisa", "Tom", "142vip.cn"]
console.log(arr)
```

### pop()

移除数组最后一项，返回移除的那个值，减少数组的length，例如：

```js
const arr = ['Lisa', 'Tom', '142vip.cn']
const item = arr.pop()

// 输出 142vip.cn
console.log(item)
// 输出 ["Lisa", "Tom"]
console.log(arr)
```

### shift()

删除原数组第一项，并返回删除元素的值，如果数组为空则返回`undefined`，例如：

```js
const arr = ['142vip.cn', 'Lisa', 'Tom']
const item = arr.shift()
// 输出 142vip.cn
console.log(item)
// 输出 ["Lisa", "Tom"]
console.log(arr)
```

### unshift()

将参数添加到原数组开头，并返回数组的长度，例如：

```js
const arr = ['Lisa', 'Tom']
const count = arr.unshift('142vip.cn')
// 输出 3
console.log(count)
// 输出 ["142vip.cn", "Lisa", "Tom"]
console.log(arr)
```

### sort()

将数组里的项从小到大排序，例如：

```js
const arr1 = ['a', 'd', 'c', 'b']

// 输出 ["a", "b", "c", "d"]
console.log(arr1.sort())

function sortNumber(a, b) {
  return a - b
}

arr = [13, 24, 51, 3]
// 输出 [13, 24, 3, 51]
console.log(arr.sort())
// 输出 [3, 13, 24, 51] 数组被改变
console.log(arr.sort(sortNumber))
```

`sort()`方法比较的是字符串，没有按照数值的大小对数字进行排序，要实现这一点，就必须使用一个排序函数

### reverse()

反转数组项的顺序。例如：

```js
const arr = [13, 24, 51, 3]
// 输出：[3, 51, 24, 13]
console.log(arr.reverse())
// 输出：[3, 51, 24, 13] 原数组改变
console.log(arr)
```

### concat()

将参数添加到原数组中。这个方法会先创建当前数组一个副本，然后将接收到的参数添加到这个副本的末尾，最后返回新构建的数组。

在没有给`concat()`方法传递参数的情况下，它只是复制当前数组并返回副本。

```js
const arr = [1, 3, 5, 7]
const arrCopy = arr.concat(9, [11, 13])

// 输出：[1, 3, 5, 7, 9, 11, 13]
console.log(arrCopy)
// 输出：[1, 3, 5, 7] 原数组未被修改
console.log(arr)
```

### slice()

返回从原数组中指定开始下标到结束下标之间的项组成的新数组。`slice()`方法可以接受一或两个参数，即要返回项的起始和结束位置。

在只有一个参数的情况下，`slice()`方法返回从该参数指定位置开始到当前数组末尾的所有项。如果有两个参数，
该方法返回起始和结束位置之间的项——但不包括结束位置的项。例如：

```js
const arr = [1, 3, 5, 7, 9, 11]
const arrCopy = arr.slice(1)
const arrCopy2 = arr.slice(1, 4)
const arrCopy3 = arr.slice(1, -2)
const arrCopy4 = arr.slice(-4, -1)
// [1, 3, 5, 7, 9, 11](原数组没变)
console.log(arr)
// [3, 5, 7, 9, 11]
console.log(arrCopy)
// [3, 5, 7]
console.log(arrCopy2)
// [3, 5, 7]
console.log(arrCopy3)
// [5, 7, 9]
console.log(arrCopy4)
```

- `arrCopy`只设置了一个参数，也就是起始下标为1，所以返回的数组为下标1（包括下标1）开始到数组最后。
- `arrCopy2`设置了两个参数，返回起始下标（包括1）开始到终止下标（不包括4）的子数组。
- `arrCopy3`设置了两个参数，终止下标为负数，当出现负数时，将负数加上数组长度的值（6）来替换该位置的数，因此就是从1开始到4（不包括）的子数组。
- `arrCopy4`中两个参数都是负数，所以都加上数组长度6转换成正数，因此相当于slice(2,5)。

### splice()

删除、插入和替换。

- 删除：指定 2 个参数：要删除的第一项的位置和要删除的项数。
- 插入：可以向指定位置插入任意数量的项，只需提供 3 个参数：起始位置、 0（要删除的项数）和要插入的项。
- 替换：可以向指定位置插入任意数量的项，且同时删除任意数量的项，只需指定 3 个参数：起始位置、要删除的项数和要插入的任意数量的项。插入的项数不必与删除的项数相等。

```js
const arr = [1, 3, 5, 7, 9, 11]
const arrRemoved = arr.splice(0, 2)
console.log(arr)
console.log(arrRemoved)
const arrRemoved2 = arr.splice(2, 0, 4, 6)
console.log(arr)
console.log(arrRemoved2)
const arrRemoved3 = arr.splice(1, 1, 2, 4)
console.log(arr)
console.log(arrRemoved3)
```

### indexOf()

接收两个参数：要查找的项和（可选的）表示查找起点位置的索引。其中， 从数组的开头（位置 0）开始向后查找，例如：

```js
const arr = [1, 3, 5, 7, 7, 5, 3, 1]
// 输出 2
console.log(arr.indexOf(5))
// 输出 2
console.log(arr.indexOf(5, 2))
// 输出 -1
console.log(arr.indexOf('5'))
```

### lastIndexOf()

接收两个参数：要查找的项和（可选的）表示查找起点位置的索引。其中， 从数组的末尾开始向前查找，例如：

```js
const arr = [1, 3, 5, 7, 7, 5, 3, 1]
// 输出 5
console.log(arr.lastIndexOf(5))
// 输出 2
console.log(arr.lastIndexOf(5, 4))
```

### forEach()

对数组进行遍历循环，对数组中的每一项运行给定函数。这个方法没有返回值。

参数都是`function`类型，默认有传参，
参数分别为：遍历的数组内容；第对应的数组索引，数组本身。

```js
const arr = [1, 2, 3, 4, 5]
arr.forEach((x, index, a) => {
  console.log(`${x}|${index}|${a === arr}`)
})
```

### map()

`映射`，对数组中的每一项运行给定函数，返回每次函数调用的结果组成的数组，例如：

```js
const arr = [1, 2, 3, 4, 5]
const arr2 = arr.map((item) => {
  return item * item
})
// 输出[1, 4, 9, 16, 25]
console.log(arr2)
```

### filter()

`过滤`功能，数组中的每一项运行给定函数，返回满足过滤条件组成的数组，例如：

```js
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const arr2 = arr.filter((x, index) => {
  return index % 3 === 0 || x >= 8
})

// 输出数组 [1, 4, 7, 8, 9, 10]
console.log(arr2)
```

### every()

判断数组中每一项都是否满足条件，只有所有项都满足条件，才会返回`true`，例如：

```js
const arr = [1, 2, 3, 4, 5]
const arr2 = arr.every((x) => {
  return x < 10
})
// 输出true
console.log(arr2)
const arr3 = arr.every((x) => {
  return x < 3
})
// 输出false
console.log(arr3)
```

### some()

判断数组中是否存在满足条件的项，只要有一项满足条件，就会返回true，例如：

```js
const arr = [1, 2, 3, 4, 5]
const arr2 = arr.some((x) => {
  return x < 3
})
// 输出true
console.log(arr2)
const arr3 = arr.some((x) => {
  return x < 1
})
// 输出false
console.log(arr3)
```
