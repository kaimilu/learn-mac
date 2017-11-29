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

/***/ })
/******/ ]);