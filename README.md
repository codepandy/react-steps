# react-steps

一个类 antd 的步骤组件，支持浏览器兼容性

## 效果图

![steps.png](https://i.loli.net/2020/04/26/jBbLVPzEQFes8UR.png)

## 安装

```bash
npm i react-steps
```

## 使用方式

```js
<section style={{ width: 500 }}>
  <Steps current={1}>
    <Step title="开始" description="描述信息" />
    <Step title="进行中" description="描述信息" />
    <Step title="成功" description="描述信息" />
  </Steps>
  <Steps current={1} size="big" style={{ marginTop: 40 }}>
    <Step title="开始" description="描述信息" />
    <Step title="进行中" description="描述信息" />
    <Step title="成功" description="描述信息" />
  </Steps>
</section>
```
