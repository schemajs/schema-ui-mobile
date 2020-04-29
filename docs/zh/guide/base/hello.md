# Hello World

编写以下代码:

``` js {10}
import Container from "@schemajs/schema-ui";

// 定义 schema
const schema = {
  type: "object",
  properties: {
    demo_text: {
      "x-component": "Text",
      "x-component-props": {
        text: "Hello, World",
      },
    },
  },
};

// 组件
class MyComponent extends Component {
  render() {
    // 渲染 ui
    return <Container schema={schema}></Container>;
  }
}
```

你将会得到以下 UI: 

h5:
<img :src="$withBase('/demo/hello-world/h5.png')" alt="hello world h5">

以及小程序:
<img :src="$withBase('/demo/hello-world/weapp.png')" alt="hello world weapp">
