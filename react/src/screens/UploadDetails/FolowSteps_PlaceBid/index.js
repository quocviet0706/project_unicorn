import React from "react";
import cn from "classnames";
import styles from "./FolowSteps_PlaceBid.module.sass";
import Icon from "../../../components/Icon";
// import Loader from "../../../components/Loader";
// import LoaderCircle from "../../../components/LoaderCircle";

const FolowSteps = ({ className }) => {
  return (
    <div className={cn(className, styles.steps)}>
      <div className={cn("h4", styles.title)}>Folow steps</div>
      <div className={styles.list}>
        <div className={cn(styles.item, styles.done)}>
          <div className={styles.head}>
            <div className={styles.icon}>
              <Icon name="upload-file" size="24" />
            </div>
            <div className={styles.details}>
              <div className={styles.info}>Deposit ETH</div>
              <div className={styles.text}>Send transaction with your wallet</div>
            </div>
          </div>
          <button className={cn("button", styles.button)}>Start now</button>
        </div>
        <div className={styles.item}>
          <div className={styles.head}>
            <div className={styles.icon}>
              <Icon name="check" size="24" />
            </div>
            <div className={styles.details}>
              <div className={styles.info}>Approve</div>
              <div className={styles.text}>
                Checking balance and approving
              </div>
            </div>
          </div>
          <button className={cn("button disabled", styles.button)}>
            Start now
          </button>
        </div>
        <div className={styles.item}>
          <div className={styles.head}>
            <div className={styles.icon}>
              <Icon name="bag" size="24" />
            </div>
            <div className={styles.details}>
              <div className={styles.info}>Signature</div>
              <div className={styles.text}>
                Create a signature to place a bit
              </div>
            </div>
          </div>
          <button className={cn("button disabled js-popup-close", styles.button)}>Start now</button>
        </div>
      </div>
    </div>
  );
};

export default FolowSteps;
