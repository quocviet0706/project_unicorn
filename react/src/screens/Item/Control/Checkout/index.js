import React, { useState } from "react";
import cn from "classnames";
import styles from "./Checkout.module.sass";
import Icon from "../../../../components/Icon";
import LoaderCircle from "../../../../components/LoaderCircle";
import Modal from "../../../../components/Modal";
import SuccessfullyPurchased from "../SuccessfullyPurchased";

const items = [
  {
    title: "0.007",
    value: "ETH",
  },
  {
    title: "Your balance",
    value: "8.498 ETH",
  },
  {
    title: "Service fee",
    value: "0 ETH",
  },
  {
    title: "You will pay",
    value: "0.007 ETH",
  },
];

const Checkout = ({ className }) => {
  const [visibleFlowSteps, setvisibleFlowSteps] = useState(false);
  const [visible_FlowSteps, setvisible_FlowSteps] = useState(false);
  return (
    <>
      <div className={cn(className, styles.checkout)}>
        <div className={styles.checkout_item}>
          <div className={cn("h4", styles.title)}>Checkout</div>
          <div className={styles.info}>
            You are about to purchase <strong>C O I N Z</strong> from{" "}
            <strong>UI8</strong>
          </div>
          <div className={styles.table}>
            {items.map((x, index) => (
              <div className={styles.row} key={index}>
                <div className={styles.col}>{x.title}</div>
                <div className={styles.col}>{x.value}</div>
              </div>
            ))}
          </div>
          <div className={styles.attention}>
            <div className={styles.preview}>
              <Icon name="info-circle" size="32" />
            </div>
            <div className={styles.details}>
              <div className={styles.subtitle}>This creator is not verified</div>
              <div className={styles.text}>Purchase this item at your own risk</div>
            </div>
          </div>
          <div className={styles.btns}>
            <button className={cn("button", styles.button)}
              onClick={() => setvisibleFlowSteps(!visibleFlowSteps)}
            >
              I understand, continue
            </button>
            <button className={cn("button-stroke", styles.button)}>Cancel</button>
          </div>
        </div>
        <div className={cn(className, styles.checkout)}>
          <div className={cn("h4", styles.box, { [styles.active]: visibleFlowSteps })}>
            <button class="Modal_close__2RPhD"><svg class="" width="14" height="14" viewBox="0 0 16 16" fill="inherit"><path d="M.335.335c.446-.446 1.17-.446 1.616 0L8 6.384 14.049.335c.446-.446 1.17-.446 1.616 0s.446 1.17 0 1.616L9.616 8l6.049 6.049c.446.446.446 1.17 0 1.616s-1.17.446-1.616 0L8 9.616l-6.049 6.049c-.446.446-1.17.446-1.616 0s-.446-1.17 0-1.616L6.384 8 .335 1.951c-.446-.446-.446-1.17 0-1.616"></path></svg></button>
            Follow steps
            <div className={styles.line}>
              <div className={styles.icon}>
                <LoaderCircle className={styles.loader} />
              </div>
              <div className={styles.details}>
                <div className={styles.subtitle}>Purchasing</div>
                <div className={styles.text}>
                  Sending transaction with your wallet
                </div>
              </div>
            </div>
            <div className={styles.attention}>
              <div className={styles.preview}>
                <Icon name="info-circle" size="32" />
              </div>
              <div className={styles.details}>
                <div className={styles.subtitle}>This creator is not verified</div>
                <div className={styles.text}>Purchase this item at your own risk</div>
              </div>
              <div className={styles.avatar}>
                <img src="/images/discover/icon-avatar-discover.svg" alt="Avatar" />
              </div>
            </div>
            <div className={styles.btns}>
              <button className={cn("button", styles.button)}
                onClick={() => setvisible_FlowSteps(true)}
              >
                I understand, continue
              </button>
              <button className={cn("button-stroke", styles.button)}>Cancel</button>
            </div>
          </div>
          <Modal
            visible={visible_FlowSteps}
          // onClose={() => setvisible_FlowSteps(false)}
          >
            <SuccessfullyPurchased />
          </Modal>
        </div>
      </div>
    </>
  );
};

export default Checkout;