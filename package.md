"cross-env": 这个是使用`IS_DEV=true`之类的node的环境变量时,保证在不同服务器下语法相同.
"concurrently": 这个是用来并行处理两个node语法, `&&`当第一个出现光标的时候,后面那个是无法继续进行的,`&`无法很好的追踪到到底是哪个进程出问题了, `concurrently -k 'vite'`如果vite程序已经开启了或者卡死了则先杀死该进程再启动vite
