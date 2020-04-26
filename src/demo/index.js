import React from "react";
import ReactDOM from "react-dom";
import Steps from "../index";
import styles from "./index.less";
const { Step } = Steps;

function Main() {
  return (
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
  );
}

ReactDOM.render(<Main />, document.getElementById("root"));
