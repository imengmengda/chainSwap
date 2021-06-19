<template>
  <div class="modal" v-if="value">
    <div class="modalWrap">
      <div class="modalWrapTitle">
        <div>Confirm</div>
        <div @click="closeModal"></div>
      </div>
      <div class="modalWrapSwap">
        <img :src="require('../assets/dot.png')" />
        <div></div>
        <img :src="require('../assets/eth.png')" />
      </div>
      <div class="modalWrapText">1000.00 USDT</div>
      <div class="modalWrapMain">
        <div class="line"></div>
        <div class="des">
          <div>Asset:</div>
          <div>
            <img src="" alt="" />
            USDT
          </div>
        </div>
        <div class="des">
          <div>Destination:</div>
          <div>0xa7f6ac......B153531D</div>
        </div>
        <div class="des">
          <div>Network Fee:</div>
          <div>8.00USDT</div>
        </div>
        <div class="des">
          <div>You will receive:</div>
          <div>≈992.00USDT</div>
        </div>
        <div class="line"></div>
      </div>
      <div class="modalWrapNotice">
        1.Please initiate a single Transfer,we will only monitor the first
        transfer. ...
      </div>
      <div>
        <el-checkbox v-model="checked"
          >I have read and agree to the Terms of use.</el-checkbox
        >
      </div>
      <div class="modalWrapBtn">Confirm</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['value'],
  methods: {
    closeModal() {
      this.$emit('input', false);
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  .modalWrap {
    width: 480px;
    height: 633px;
    left: 720px;
    top: 223px;
    background: #ffffff;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 30px;
    .modalWrapTitle {
      display: flex;
      justify-content: space-between;
      align-items: center;
      div {
        &:nth-of-type(1) {
          font-weight: bold;
          font-size: 30px;
          color: #1e2226;
        }
        &:nth-of-type(2) {
          width: 20px;
          height: 20px;
          background: url("../assets/close.png") no-repeat;
          background-size: 20px 20px;
        }
      }
    }
    .modalWrapSwap {
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 48px;
        height: 48px;
      }
      div {
        margin: 0 16px;
        width: 17px;
        height: 20px;
        background: url("../assets/step.png") no-repeat;
        background-size: 17px 20px;
      }
    }
    .modalWrapText {
      font-weight: bold;
      font-size: 20px;
      display: flex;
      justify-content: center;
      color: #1e2226;
      margin: 20px 0 30px;
    }
    .modalWrapMain {
      .line {
        width: 420px;
        height: 1px;
        background: url("../assets/line.png") no-repeat;
        background-size: 420px 1px;
        margin-bottom: 22px;
      }
      .des {
        display: flex;
        align-items: center;
        justify-content: space-between;
        div {
          margin-bottom: 16px;
          &:nth-of-type(1) {
            font-size: 16px;
            color: #1e2226;
          }
          &:nth-of-type(2) {
            font-weight: bold;
            font-size: 16px;
            color: #020202;
          }
        }
      }
    }
    .modalWrapNotice {
      font-size: 16px;
      color: rgba(30, 34, 38, 0.4);
      text-align: left;
      margin-bottom: 20px;
    }
    .modalWrapBtn {
      margin-top: 24px;
      width: 420px;
      height: 60px;
      background: rgba(51, 51, 51, 0.4);
      border-radius: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 16px;
      color: #ffffff;
    }
  }
}
</style>
