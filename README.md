1. jsx语法里面使用尖括号（<）react会当作html来处理，使用花括号（{）会当作js来处理。
2. 自定义组件要使用大驼峰来命名，否则会报错，这是react的机制导致的，小括号只会被当作html内置标签。
3. 组件的最外层要包裹一层
4. 如果组件最外层想在dom树中不影响样式，可以使用react的fragment容器
5. react是用数据驱动而不是用双向绑定的，想修改state的数据需要使用setState方法，否则视图层无法改变。
6. 绑定事件的时候需要$event.bind（this），否则this指向为undefined
7. 父子传参要把参数放在constrctor里面，方便后期维护，方法bind（this）也要放在里面