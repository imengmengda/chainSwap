<template>
  <div class="bridge">
    <div class="bridgeTitle">Bridge</div>
    <div class="bridgeMain">
      <div class="formlabel">Choose Assets</div>
      <div class="select" @click="showSelectModal">
        <div class="bType">
          <img :src="require('../assets/usdt_48.png')" />
          USDT
        </div>
        <div class="selectIcon"></div>
        <div class="selectModal" v-if="isShowSelectModal">
          <div class="selectModalTitle">Select a token</div>
          <div class="selectModalFlex">
            <div>USDT</div>
            <div>DOT</div>
            <div>ETH</div>
          </div>
          <input class="selectModalInput" />
          <div class="selectModalList"></div>
        </div>
      </div>
      <div class="swap">
        <div class="swapLeft">
          <div class="formlabel">From</div>
          <div
            class="swapItem"
            style="margin-right: 20px"
            @click="showSwapModal1"
          >
            <div class="bType">
              <img :src="require('../assets/usdt_48.png')" />
              USDT
            </div>
            <div class="selectIcon"></div>
            <div class="swapSelectModal" v-if="isShowSwapModal1">
              <div
                class="swapSelectModalItem"
                v-for="(item, index) in chainList"
                :key="index"
              >
                <div><img :src="item.img" />{{ item.name }}</div>
                <img class="bs" :src="require('../assets/bs.png')" />
              </div>
            </div>
          </div>
        </div>
        <div class="swapIcon"></div>
        <div class="swapRight">
          <div class="formlabel">To</div>
          <div class="swapItem" @click="showSwapModal2">
            <div class="bType">
              <img :src="require('../assets/usdt_48.png')" />
              USDT
            </div>
            <div class="selectIcon"></div>
            <div class="swapSelectModal" v-if="isShowSwapModal2">
              <div
                class="swapSelectModalItem"
                v-for="(item, index) in chainList"
                :key="index"
              >
                <div><img :src="item.img" />{{ item.name }}</div>
                <img class="bs" :src="require('../assets/bs.png')" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="formlabel">Destination Address</div>
      <input type="text" style="margin-bottom: 30px" />
      <div class="formlabel">
        <div>Amount</div>
        <div>Balance: 141231231 USDT</div>
      </div>
      <input type="text" style="margin-bottom: 20px" />
      <div class="notice">
        <div class="noticeLeft">Reminder:</div>
        <div class="noticeRight">
          <div class="noticeTop">1.The minimum amount is 20 USDT</div>
          <div class="noticeBottom">2.The maximum amount is 10000 USDT</div>
        </div>
      </div>
      <div class="swapBtn" @click="showModal">Confirm</div>
    </div>
    <Modal v-model="isShowModal" />
  </div>
</template>

<script>
import Modal from './Modal.vue';

let eth = require('../assets/eth.png');
const polk = require('../assets/dot.png');
const heco = require('../assets/ht.png');
const bsc = require('../assets/bnb.png');

export default {
  components: { Modal },
  data() {
    return {
      isShowSelectModal: false,
      isShowSwapModal1: false,
      isShowSwapModal2: false,
      isShowModal: false,
      chainList: [
        {
          name: 'Ethereum',
          img: eth,
        },
        {
          name: 'Polkadot',
          img: polk,
        },
        {
          name: 'HECO chain',
          img: heco,
        },
        {
          name: 'BSC chain',
          img: bsc,
        },
      ],
    };
  },
  methods: {
    showModal() {
      this.isShowModal = true;
    },
    showSelectModal() {
      this.isShowSelectModal = !this.isShowSelectModal;
    },
    showSwapModal1() {
      this.isShowSwapModal1 = !this.isShowSwapModal1;
    },
    showSwapModal2() {
      this.isShowSwapModal2 = !this.isShowSwapModal2;
    }
  },
};
</script>

<style lang="scss" scoped>
.bridge {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .bridgeTitle {
    font-weight: bold;
    font-size: 36px;
    color: #000000;
  }
  .bridgeMain {
    padding: 30px;
    box-sizing: border-box;
    width: 640px;
    height: 746px;
    background: #ffffff;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.04);
    border-radius: 20px;
  }
  .formlabel {
    width: 100%;
    text-align: left;
    font-size: 16px;
    color: #000000;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
  }
  .select {
    z-index: 1;
    margin-bottom: 30px;
    width: 580px;
    height: 80px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    .selectModal {
      z-index: 2;
      position: absolute;
      width: 580px;
      height: 353px;
      top: 90px;
      background: #ffffff;
      border: 1px solid rgba(0, 0, 0, 0.1);
      box-sizing: border-box;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
      border-radius: 10px;
      padding: 30px;
      box-sizing: border-box;
      .selectModalTitle {
        font-size: 16px;
        color: #000000;
        text-align: left;
        margin-bottom: 20px;
      }
      .selectModalFlex {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        div {
          margin-right: 10px;
          width: 95px;
          height: 40px;
          background: rgba(0, 0, 0, 0.1);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 20px;
          color: #000000;
        }
      }
    }
  }
  .bType {
    font-weight: bold;
    font-size: 20px;
    color: #000000;
    display: flex;
    align-items: center;
    margin-left: 30px;
    img {
      margin-right: 12px;
      width: 48px;
      height: 48px;
    }
  }
  .selectIcon {
    margin-right: 35px;
    width: 20px;
    height: 10px;
    background: url("../assets/select_open.png") no-repeat;
    background-size: 20px 10px;
  }
  .swap {
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    position: relative;
    .swapIcon {
      // z-index: 1;
      width: 48px;
      height: 48px;
      background: url("../assets/swap_icon.png") no-repeat;
      left: 266px;
      top: 60px;
      background-size: 48px 48px;
      position: absolute;
    }
    .swapItem {
      width: 280px;
      height: 108px;
      background: rgba(169, 169, 169, 0.1);
      border: 1px solid #e7e7e7;
      box-sizing: border-box;
      border-radius: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      .swapSelectModal {
        position: absolute;
        bottom: -300px;
        width: 280px;
        height: 289px;
        background: #ffffff;
        border: 1px solid #e7e7e7;
        box-sizing: border-box;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
        border-radius: 10px;
        .swapSelectModalItem {
          width: 279px;
          height: 74px;
          background: #f6f6f6;
          display: flex;
          justify-content: space-between;
          align-items: center;
          div {
            &:nth-of-type(1) {
              margin-left: 30px;
              display: flex;
              align-items: center;
              font-size: 16px;
              color: #000000;
              img {
                width: 36px;
                height: 36px;
                margin-right: 20px;
              }
            }
          }
        }
      }
    }
  }
  .notice {
    display: flex;
    justify-content: space-between;
    .noticeLeft {
      font-size: 16px;
      color: #000000;
    }
    .noticeRight {
      div {
        text-align: right;
        font-size: 14px;
        line-height: 14px;
        color: rgba(0, 0, 0, 0.4);
      }
    }
  }
  .swapBtn {
    margin: 30px auto 0;
    width: 420px;
    height: 60px;
    background: rgba(0, 0, 0, 0.8);
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 20px;
    color: #ffffff;
  }
}
input {
  width: 580px;
  height: 80px;
  background: rgba(169, 169, 169, 0.1);
  border: 1px solid #e7e7e7;
  box-sizing: border-box;
  border-radius: 10px;
}
.selectModalInput {
  margin-bottom: 20px;
  width: 520px;
  height: 80px;
  background: rgba(169, 169, 169, 0.1);
  border: 1px solid #e7e7e7;
  box-sizing: border-box;
  border-radius: 10px;
}
.bs {
  width: 17px;
  height: 17px;
  margin-right: 30px;
}
</style>
