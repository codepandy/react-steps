import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./index.less";

const cx = classNames.bind(styles);

class Steps extends PureComponent {
  render() {
    const { children, current = 0, style, className, size = "small" } = this.props;
    return (
      <section className={`${styles.stepContainer} ${className || ""}`} style={{ ...style }}>
        {React.Children.map(children, ({ props }, index) => {
          const { title, description } = props;
          return (
            <section
              className={cx("itemContainer", { LastItemContainer: index === children.length - 1 })}
            >
              <div className={cx("label", { isLast: index === children.length - 1 })}>
                <span
                  className={
                    index <= current
                      ? size === "small"
                        ? styles.smallFinishStep
                        : styles.finishStep
                      : size === "small"
                      ? styles.smallProcessStep
                      : styles.processStep
                  }
                >
                  {index + 1}
                </span>
                <span
                  className={cx({
                    finishTitle: index < current,
                    processTitle: current === index,
                    waitTitle: index > current,
                  })}
                >
                  {title}
                </span>
              </div>
              <div
                className={cx({
                  finishDesc: index !== current,
                  processDesc: current === index,
                  smallMargin: size === "small",
                  normalMargin: size !== "small",
                })}
              >
                {description}
              </div>
            </section>
          );
        })}
      </section>
    );
  }
}

function Step({ title, description }) {
  return (
    <div>
      {title},{description}
    </div>
  );
}

Steps.Step = Step;

Steps.propTypes = {
  current: PropTypes.number,
  style: PropTypes.object,
  className: PropTypes.any,
  size: PropTypes.string,
};
Steps.defaultProps = {
  current: 0,
  style: null,
  className: null,
  size: "small",
};
export default Steps;
