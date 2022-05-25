### 规范

+ 文件夹，文件名统一小写，多个单词连接符-

+ 变量名小写驼峰，常量大写

+ CSS普通CSS和styled-component

+ 函数组件用memo

+ 组件内部状态使用useState，useReducer，业务数据用redux

  组件代码顺序

  1.state

  2.redux hooks

  3.其它hooks

  4.其它组件hooks

  5.其它逻辑

  6.jsx代码



redux

每个模块有独立的reducer，通过combineReducer进行合并

异步请求代码redux-thunk,卸载actionCreators

redux使用hooks编写

### webpack配置

通过craco配置webpack

或者通过npm run eject暴露配置文件

```js
npm install @craco/craco@5.6.4
```

通过carco.config.js配置webpack

```js
//配置别名
const path = require('path');

const resolve = dir => path.resolve(__dirname,dir);

module.exports = {
    webpack: {
        alias: {
            "@": resolve('src')
        }
    }
}
```

### 路由配置

`react-router`

`react-router-config`

```js
//router.js
const routers = [{
    path:'',
    exact:true, //是否唯一匹配
    component:''
}]
```

```js
<Browser-Router /> //History模式
<Hash-Router /> //hash模式

<Nav-Link />

renderRouters() //通过renderRoutes渲染路由

<Switch> //Switch组件将会展示第一个
```



### style-components

使用一个根节点进行包裹

```js
export const HeaderWrapper = styled.div`height:75px;background-color:#242424
.content {

}
`
```



