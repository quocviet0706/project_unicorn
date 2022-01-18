import React, { useState } from "react";
import cn from "classnames";
import styles from "./Bid.module.sass";
import Modal from "../../components/Modal";
import FolowSteps from "../../screens/UploadDetails/FolowSteps_PlaceBid";

const items = [
  {
    title: "Enter bid",
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
    title: "Total bid amount",
    value: "0 ETH",
  },
];

const Bid = ({ className }) => {
  const [visibleModalBid, setVisibleModalBid] = useState(false);
  const cancel = () => {
    document.querySelector("body").style = "";
    document.querySelector("#modal").style.display = "none";
  }
  const hide = () => {
    // document.querySelector("body").style = "";
    let modal = document.querySelectorAll("#modal")[0];
    modal.style.display = "none";
    modal.id = "modal_1"
  }
  return (
    <>
      <div className={cn(className, styles.checkout)}>
        <div className={cn("h4", styles.title)}>Place a bid</div>
        <div className={styles.info}>
          You are about to purchase <strong>C O I N Z</strong> from{" "}
          <strong>UI8</strong>
        </div>
        <div className={styles.stage}>Your bid</div>
        <div className={styles.table}>
          {items.map((x, index) => (
            <div className={styles.row} key={index}>
              <div className={styles.col}>{x.title}</div>
              <div className={styles.col}>{x.value}</div>
            </div>
          ))}
        </div>
        <div className={styles.btns}>
          <button className={cn("button", styles.button)}
            className={cn("button-stroke", styles.button)}
            onClick={() => {setVisibleModalBid(true); hide()}}
          >
            Place a bid
          </button>
          <button className={cn("button-stroke", styles.button)} onClick={() => cancel()}>Cancel</button>
        </div>
      </div>
      <Modal
        visible={visibleModalBid}
        onClose={() => setVisibleModalBid(false)}
      >
        <FolowSteps />
      </Modal>
    </>
  );
};

export default Bid;
