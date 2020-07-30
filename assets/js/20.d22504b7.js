(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{507:function(t,a,v){"use strict";v.r(a);var i=v(8),n=Object(i.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"闭包新解-读周爱民老师《javascript语言精髓与编程实践第三版》"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#闭包新解-读周爱民老师《javascript语言精髓与编程实践第三版》"}},[t._v("#")]),t._v(" 闭包新解-读周爱民老师《JavaScript语言精髓与编程实践第三版》")]),t._v(" "),v("p",[t._v("在JavaScript中，函数只是一段静态的代码、脚本文本，因此它是一个代码书写时，以及编译期的、静态的概念；而闭包则是函数的代码在运行过程中的一个动态环境，是一个运行期的、动态的概念。")]),t._v(" "),v("p",[t._v("由于JavaScript引擎通过闭包来为每个函数维护其执行期的信息，因此当函数被再次执行或者通过某种方法进入函数体内时，就可以通过访问闭包得到这些信息。")]),t._v(" "),v("p",[t._v("js文件的内容无非是三种可执行的结构：脚本（Script）、模块（Module）和函数（Function）。其中，脚本和模块是指将代码的那些声明—例如变量声明或函数声明等—去除掉之后剩下的语句行。也就是说，任何一个js文件中的可执行逻辑，要么是全局的语句行（Script），要么是模块中的语句行（Module），要么是在全局脚本块和模块中的、语句行之外的那些函数声明。")]),t._v(" "),v("p",[t._v("对于函数代码块中的“可访问标识符”，JavaScript中用“闭包”来指代一个函数实例在运行期的作用域。（一个引用）")]),t._v(" "),v("p",[t._v("也就是说，闭包就是记录函数实例在运行期的“可访问标识符（identifiers in lexical scope）”的结构。因此一个函数实例的一次执行，就会带来一个新的执行期作用域，即一个闭包；而在执行代码看来，它就是执行期的作用域链（scope chain），因其外部引用指向它被调用时的作用域。")]),t._v(" "),v("p",[t._v("函数实例：在书写代码的过程中，函数只是一段代码文本。在真实的运行环境中需要先将它们变成可处理的数据对象—“对象系统中的”函数类的实例。从文本到数据对象的这个行为：")]),t._v(" "),v("ul",[v("li",[t._v("对于“函数声明（Declaration）”来说叫“实例化（Instantiate FunctionObject）”。")]),t._v(" "),v("li",[t._v("对于“函数表达式（Expression）”来说叫“创建函数的实例（Function Create)”。")])]),t._v(" "),v("p",[t._v("闭包是用于记录“可访问标识符”的信息的。其初始信息是引擎在处理调用运算符“()”的时候，由一个称为“声明实例化（Declaration Instantiation）”的内部阶段来构建的。也就是说，闭包内的初始信息就是函数代码体中的那些声明。 更复杂的信息还包括“（在运行中的）函数实例”的引用、环境，以及由包含upvalue在内的作用域链等。")]),t._v(" "),v("p",[t._v("闭包是运行期概念”这样的信息。闭包在函数执行过程中处于激活的、可访问的状态；并在函数实例被调用结束后保持上述数据信息的最终数据状态，直到闭包被销毁。")]),t._v(" "),v("ul",[v("li",[t._v("JavaScript中的函数实例可以拥有多个闭包。")]),t._v(" "),v("li",[t._v("JavaScript中的函数实例与闭包的生存周期是分别管理的。")]),t._v(" "),v("li",[t._v("JavaScript中的函数被调用时总是初始化一个闭包；而上次调用中的闭包是否销毁，取决于该闭包中是否有被（其他闭包）引用的变量/数据。")])]),t._v(" "),v("p",[t._v("当函数开始执行时，JavaScript会创建一个执行环境（Environment），并将其可用的标识符列表指向函数实例中的作用域，从而完成从作用域（Scope）到闭包（Closure）的、在概念上的映射。它们常被混为一谈的根源也就在于此：（在初始状态下，）闭包在根本上不过是运行环境中对作用域的一个引用。 但闭包是运行期的，所以是变化的、有状态的、可存储的。")]),t._v(" "),v("p",[t._v("我的补充：\n闭包并不会导致内存泄漏，闭包的确会把一些变量保存在内存中，但并不能说成是内存泄漏。通常说的闭包导致内存泄漏其实是循环引用导致的，是浏览器引用计数垃圾回收机制的问题，通常强行设置为null即可。")])])}),[],!1,null,null,null);a.default=n.exports}}]);