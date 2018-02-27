一般指令：
1.ng-app:指令是用来定义angular应用的边界。
2.ng-controller:指令用来指定当前元素绑定哪个控制器
3.ng-model:用来把控制器的作用域上（$scope上面）的数据双向数据绑定到表单元素
4.ng-bind:用来给某个元素绑定值
5.ng-include: 给界面引入一个外部的html文件
6.ng-switch: 用来根据某个条件显示具体的dom元素，一般配合ng-switch-when或者ng-switch-on
7.ng-if: 用来显示或者移除某个dom元素
8.ng-hide：用来显示或者隐藏某个dom元素
9.ng-show: 用来显示或者隐藏某个dom元素
10.ng-repeat：用来遍历一个集合，然后为集合中的每一个元素生成模板实例
11.ng-init：在应用初始化的时候创建一个变量
12.ng-bind-template：用来绑定多个表达式,类似于ng-bind，只不过后者只能绑定一个表达式
13.ng-bind-html: 可以通过一个安全的方式将内容绑定到 HTML 元素上[注意：该指令需要配合angular的$sce服务的trustAsHtml方法使得添加到界面的
html元素是安全的，或者安装angular-sanitize模块，通过添加模块依赖ngSanitize从而调用其方法进行html格式化]
14.ng-form：该指令模拟了html的form标签，但是其可以进行多个表单的嵌套
15.ng-selected：用来设置下拉列表的默认选项
16.ng-cloak: 用来解决页面加载时应用界面闪烁问题
17.ng-dblclick:监听鼠标双击事件
18.ng-class指令：用来动态的给界面元素添加Class
19.ng-style:用来给界面元素添加js中定义的样式
20.ng-src:用于在Angular应用中替代img标签的src属性
21.ng-href:用于在Angular应用中替代a标签的href属性
22.ng-readonly:用于在Angular应用中替代a标签的readonly属性
23.ng-disabled:用于在Angular应用中替代表单及按钮标签的disabled属性
24.ng-checked: 用于在Angular应用中替代表单标签的checked属性
25.ng-change：用来监听表单元素的值发生变化时执行特定的处理程序
26.ng-click: 绑定的元素在被点击的时候执行特定的处理程序
27.ng-submit：设置表单提交后需要执行的程序，该指令会强制刷新界面
28.键盘事件：对于表单元素当通过键盘输入时会先后触发三个事件,依次为ng-keydown，ng-keypress，ng-keyup
31.鼠标事件ng-mousedown、ng-mouseenter、ng-mouseleave、ng-mousemove、ng-mouseover、ng-mouseup、ng-focus、ng-blur；
32.ng-trim：用来去除将在界面上某个元素下显示的字符串前后空格，将该指令绑定到目标元素上
33.ng-list:这个指令要和ng-model合起来用,当输入的数据通过‘，’号分割时，那么ng-model绑定的那个变量的数据就是一个输入数据组成的数组;
35.文本内容复制，粘贴，剪切时触发的事件：ng-copy，ng-paste，ng-cut
36.ng-non-bindable: 指令用于告诉 AngularJS 当前的 HTML 元素或其子元素不需要编译
37：ng-view:
38:ng-transclude: 该指令用来在自定义指令模板中规定指令使用时其内部的html的存放位置


