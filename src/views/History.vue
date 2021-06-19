<template>
  <div class="wrap">
    <div class="wrapheader">
      <div v-for="(item, index) in thList" :key="index">
        {{ item }}
      </div>
    </div>
    <div class="wrapmain">
      <div v-for="(item, index) in dataList" :key="index" class="tableItem">
        <div>
          <img :src="require('../assets/usdt.png')" />
          USDT
        </div>
        <div>2021-12-31 00:00:00</div>
        <div>10.000001ETH</div>
        <div>Completed</div>
        <div>0xa7f6ac......B153531D(VITE)</div>
        <div>0xa7f6ac......B153531D(ETH)</div>
        <div>0.001ETH</div>
      </div>
      <div class="endContent">No More Content.</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      thList: [
        'Token',
        'Time',
        'Amount',
        'Status',
        'From',
        'To',
        'Fees',
      ],
      dataList: [1, 2, 3],
    };
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  margin: 80px auto 0;
  width: 100%;
  height: 100%;
}
.wrapheader {
  margin: 0 auto 0;
  width: 1280px;
  height: 48px;
  background: #000000;
  border-radius: 20px 20px 0px 0px;
  display: flex;
  align-items: center;
  div {
    font-size: 16px;
    color: #ffffff;
    &:nth-of-type(1) {
      margin-left: 30px;
      margin-right: 120px;
    }
    &:nth-of-type(2) {
      margin-right: 170px;
    }
    &:nth-of-type(3) {
      margin-right: 93px;
    }
    &:nth-of-type(4) {
      margin-right: 93px;
    }
    &:nth-of-type(5) {
      margin-right: 205px;
    }
    &:nth-of-type(6) {
      margin-right: 253px;
    }
  }
}
.wrapmain {
  overflow-y: scroll;
  margin: 0px auto 0;
  width: 1280px;
  height: 448px;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.04);
  border-radius: 20px;
  .tableItem {
    width: 1280px;
    height: 80px;
    background: #ffffff;
    display: flex;
    align-items: center;
    div {
      text-align: left;
      &:nth-of-type(1) {
        width: 165px;
        margin-left: 30px;
        display: flex;
        align-items: center;
        img {
          width: 30px;
          height: 30px;
          margin-right: 10px;
        }
        font-weight: bold;
        font-size: 16px;
        color: #000000;
      }
      &:nth-of-type(2) {
        width: 200px;
        font-size: 16px;
        color: #000000;
      }
      &:nth-of-type(3) {
        width: 150px;
        font-size: 16px;
        color: #000000;
      }
      &:nth-of-type(4) {
        width: 130px;
        font-size: 16px;
        color: #000000;
      }
      &:nth-of-type(5) {
        width: 240px;
        font-weight: bold;
        font-size: 16px;
        color: #000000;
      }
      &:nth-of-type(6) {
        width: 242px;
        font-weight: bold;
        font-size: 16px;
        color: #000000;
      }
      &:nth-of-type(4) {
        font-size: 16px;
        color: #000000;
      }
    }
  }
  .endContent {
    font-size: 14px;
    text-align: center;
    color: rgba(0, 0, 0, 0.4);
  }
}
</style>
