/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

__webpack_require__(3);

__webpack_require__(4);

__webpack_require__(5);

__webpack_require__(6);

__webpack_require__(7);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function test() {
  // var a = 2
  // let a = 1
  // console.log(a)

  // for(let i=1; i<3; i++) {
  //   console.log(i)
  // }
  // console.log(i)

  // let a = 1
  // let a = 2
  /**
   * let 块作用域 
   * 严格模式：未定义的变量不能使用
   * let 不能定义同一个变量多次
   */
}
function last() {
  /**
   * const 常量
   * 1. 常量不能修改
   * 2. 声明时必须赋值
   * 3. 常量是引用类型，值是可以修改的
   */
  var PI = 3.1415926;
  // PI = 8; // 常量不能修改，只读：“PI" is read-only
  var k = {
    a: 1
  };
  k.b = 3;
  k.laosu = '老苏';
  console.log(PI, k);
}

test();
last();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

/**
 * 解构赋值
 */

{
  var a = void 0,
      b = void 0,
      rest = void 0;
  // 数组解构
  a = 1;
  b = 2;
  console.log('============ 数组解构 ============');
  console.log(a, b);
}

{
  var _a = void 0,
      _b = void 0,
      _rest = void 0;
  // ...扩展运算符
  _a = 1;
  _b = 2;
  _rest = [3, 4, 5, 6];
  console.log(_a, _b, _rest);
}

// 对象解构
{
  var _a2 = void 0,
      _b2 = void 0;
  var _a$b = { a: 1, b: 2 };
  _a2 = _a$b.a;
  _b2 = _a$b.b;

  console.log('============ 对象解构 ============');
  console.log(_a2, _b2);
}

// 默认值
{
  var _a3 = void 0,
      _b3 = void 0,
      c = void 0,
      _rest2 = void 0;
  //  [a,b,c=3]=[1,2]
  // 如果没有配对成功就是undefined
  var _ref = [1, 2];
  _a3 = _ref[0];
  _b3 = _ref[1];
  c = _ref[2];
  console.log(_a3, _b3, c); // 1,2,undefined
}

// 变量交换
{
  var _a4 = 1;
  var _b4 = 2;
  var _ref2 = [_b4, _a4];
  _a4 = _ref2[0];
  _b4 = _ref2[1];

  console.log(_a4, _b4); // 2,1
}

// 
{
  var f = function f() {
    return [1, 2];
  };

  var _a5 = void 0,
      _b5 = void 0;

  var _f = f();

  var _f2 = _slicedToArray(_f, 2);

  _a5 = _f2[0];
  _b5 = _f2[1];

  console.log(_a5, _b5);
}

{
  var _f3 = function _f3() {
    return [1, 2, 3, 4, 5];
  };

  var _a6 = void 0,
      _b6 = void 0,
      _c = void 0;

  var _f4 = _f3();

  var _f5 = _slicedToArray(_f4, 4);

  _a6 = _f5[0];
  _b6 = _f5[3];

  console.log(_a6, _b6);
}

{
  var _f6 = function _f6() {
    return [1, 2, 3, 4, 5];
  };

  var _a7 = void 0,
      _b7 = void 0,
      _c2 = void 0;
  //  [a,...b] = f()

  var _f7 = _f6();

  var _f8 = _toArray(_f7);

  _a7 = _f8[0];
  _b7 = _f8.slice(2);

  console.log(_a7, _b7);
}

{
  var o = { p: 42, q: true };
  var p = o.p,
      q = o.q;

  console.log(p, q);
}

{
  var _a9 = { a: 3 },
      _a9$a = _a9.a,
      _a8 = _a9$a === undefined ? 10 : _a9$a,
      _a9$b = _a9.b,
      _b8 = _a9$b === undefined ? 5 : _a9$b;

  console.log(_a8, _b8);
}

{
  var metaDate = {
    title: 'abc',
    test: [{
      title: 'test',
      desc: 'description'
    }]
  };

  var esTitle = metaDate.title,
      _metaDate$test = _slicedToArray(metaDate.test, 1),
      _metaDate$test$ = _metaDate$test[0],
      cnTitle = _metaDate$test$.title,
      descLaosu = _metaDate$test$.desc;

  console.log(esTitle, cnTitle, descLaosu);
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 正则
{
  //es5:
  var regex = new RegExp('xyz', 'i');
  var regex2 = new RegExp(/xyz/i);

  console.log(regex.test('xyz123'), regex2.test('xyz123')); // true true

  // es6:
  var regex3 = new RegExp(/xyz/ig, 'i');
  // flags: 获取正则对象修饰符
  console.log(regex3.flags);
}

{
  /**
   * g,y都是全局匹配
   * 
   */
  var s = 'bbb_bb_b';
  var a1 = /b+/g;
  var a2 = new RegExp('b+', 'y');

  console.log('g:', a1.exec(s), a2.exec(s));
  console.log('y:', a1.exec(s), a2.exec(s));

  // 是否开启y模式
  console.log(a1.sticky, a2.sticky); // false true
}

{
  /**
   * u: unicode
   */
  console.log('u-1', /^\uD83D/.test('\uD83D\uDC2A'));
  console.log('u-2', /^(?:\uD83D(?![\uDC00-\uDFFF]))/.test('\uD83D\uDC2A'));

  console.log(/\u{61}/.test('a')); // false
  console.log(/a/.test('a')); // true

  console.log('\uD842\uDFB7');

  var _s = '𠮷';
  // 字符大于两个字符 "." 不能识别，加上u才可以
  console.log('u', /^.$/.test(_s)); // false
  console.log('u-2', /^(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])$/.test(_s)); // true

  console.log('test', /𠮷{2}/.test('𠮷𠮷')); // false
  console.log('test', /(?:\uD842\uDFB7){2}/.test('𠮷𠮷')); // false

  /**
   * "."修饰符除了大于两个字节的字符不能匹配，还有以下4种：
   * 1. 换行符       \n
   * 2. 回车符       \r
   * 3. 行分隔符
   * 4. 段分隔符
   */

  /**
   * s：该修饰符还没有实现
   */
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['i am ', ', ', ''], ['i am ', ', ', '']),
    _templateObject2 = _taggedTemplateLiteral(['Hi\n', ''], ['Hi\\n', '']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * 4 字符串扩展（上）
 */
{
  console.log('a', 'a'); // a a
  // 当大于2个字节 超过了0xFFFF
  console.log('s', '\u20BB7'); // s ₻7

  console.log('s', '\uD842\uDFB7');
}

{
  var s = '𠮷';
  console.log('length', s.length); // es5: 长度为2

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
   */
  console.log('8', s.charAt()); //  取第一个位置的字符
  console.log('1', s.charAt(1)); // 
  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
   */
  console.log('at1', s.charCodeAt(0)); // 取码值
  console.log('at1', s.charCodeAt(1)); // 57271

  var s1 = '𠮷a';
  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt
   */
  console.log('length:', s1.length); // 3
  console.log('code0', s1.codePointAt(0)); //134071
  console.log('code0', s1.codePointAt(0).toString(16)); //20bb7
  console.log('code1', s1.codePointAt(1)); // 57271
  console.log('code2', s1.codePointAt(2)); // 97
}

{
  console.log(String.fromCharCode("0x20bb7")); // es5 ஷ
  console.log(String.fromCodePoint("0x20bb7")); // es6 𠮷
}

{
  // 字符串遍历器
  var str = '\uD842\uDFB7abc';
  for (var i = 0; i < str.length; i++) {
    console.log('es5 ', str[i]); // � � a b c
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = str[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var item = _step.value;

      console.log('es6', item); // 𠮷 a b c
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

// 3-5字符串扩展（下）
{
  // 包含、起始、结尾
  var _str = 'string';
  console.log(_str.includes('r')); // true
  console.log(_str.startsWith('s')); // true
  console.log(_str.endsWith('s')); // false
  console.log(_str.endsWith('g')); // true
}

{
  // 重复n次
  var _str2 = 'laosu';
  console.log(_str2.repeat(6));
}

{
  // 模板字符串
  console.log('=================== 模板字符串 ======================');
  var name = 'list';
  var info = 'hello world';
  var m = 'i am ' + name + ', ' + info;
  console.log(m); // i am list, hello world
}

{
  // es7 草案
  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
   * 从当前字符串的开头（左侧）开始填充
   */
  console.log('1'.padStart(2, '0')); // 补白
  console.log('1'.padEnd(2, '0'));
}

{
  // i am ,, ,listhello world
  var abc = function abc(s, v1, v2) {
    console.log(s, v1, v2);
    return s + v1 + v2;
  };

  // 标签模板
  console.log('标签模板：');

  var user = {
    name: 'list',
    info: 'hello world'
  };

  console.log(abc(_templateObject, user.name, user.info));
}

{
  console.log(String.raw(_templateObject2, 1 + 2)); // Hi\n3
  /**
   * H1
      3
   */
  console.log('H1\n' + (1 + 2));
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * 3-6数值扩展
 */
console.log('================数值扩展=================');
{
  console.log('B', 503);
  console.log(503); // 二进制： 503
  console.log(503); // 八进制： 503
  console.log('O', 503); // 八进制： 503
}

{
  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite
   */
  console.log('15', Number.isFinite(15)); // 15 true
  console.log('NaN', Number.isFinite(NaN)); // NaN false
  console.log('1/0', Number.isFinite('true' / 0)); // 1/0 false

  console.log('NaN', Number.isNaN(NaN)); // NaN true
  console.log('NaN', Number.isNaN(0)); // NaN false
}

{
  // 数字是不是整数
  console.log('25: ', Number.isInteger(25)); // 25:  true
  console.log('25.0: ', Number.isInteger(25.0)); // 25.0:  true
  console.log('25.01: ', Number.isInteger(25.01)); // 25.01:  false
  // 非数 ，判断会出错
  console.log('25.01: ', Number.isInteger('25')); // 25:  false

  // 2的53次方
  console.log(Number.MAX_SAFE_INTEGER, ',', Math.pow(2, 53) - 1);
  console.log(Number.isSafeInteger(Math.pow(2, 53)));
  console.log(Number.MIN_SAFE_INTEGER);
}

{
  // 取小数的整数
  /**
   * es5: Math.float, Math.ceil, Math.parseInt
   */
  console.log(4.1, Math.trunc(4.1)); // 4.1 4
  console.log(4.9, Math.trunc(4.9));
}

{
  /**
   * 判断一个数是正数、负数、零
   */
  console.log('-5', Math.sign(-5)); // -5 -1
  console.log('0', Math.sign(0)); // 0 0
  console.log('5', Math.sign(5)); // 5 1
  console.log('50', Math.sign('50')); // 50 1
  console.log('0', Math.sign('0')); // 50 1
  console.log('-10', Math.sign('-10')); // 50 1
  console.log('foo', Math.sign('foo')); // 50 NaN
}

{
  /**
   * 立方根
   */
  // Math.cbrt(-1)
  console.log(-1, Math.cbrt(-1)); // -1 -1
  console.log(8, Math.cbrt(8)); // 2
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * 3-7数组扩展
 */
console.log('================= 数组扩展 =================');
{
  var arr = Array.of(3, 4, 7, 9, 11);
  console.log('arr=', arr); // [3, 4, 7, 9, 11]

  var empty = Array.of();
  console.log('empty= ', empty); // []
}

{
  /**
   * 1.伪数组或者集合转换在数组,
   * 2. 类似与map 映射方法
   */
  var p = document.querySelectorAll('span');
  var spanArr = Array.from(p);
  spanArr.forEach(function (item) {
    console.log(item.textContent);
  });

  console.log(Array.from([1, 3, 5], function (item) {
    return item * 2;
  })); // [2, 6, 10]
}

/***/ })
/******/ ]);