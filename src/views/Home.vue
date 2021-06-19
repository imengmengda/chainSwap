<template>
  <div class="container">
    <div class="header">
      <div class="choose"></div>
      <div class="ntab">
        <div
          :class="['ntabItem', active === 1 ? 'active' : '']"
          @click="setActive(1)"
        >
          Bridge
        </div>
        <div
          :class="['ntabItem', active === 2 ? 'active' : '']"
          @click="setActive(2)"
        >
          History
        </div>
      </div>
      <div class="account" @click="connectWeb3()">Connect Wallet</div>
    </div>
    <div class="center" v-if="active === 1 && !isConnected">
      <div
        @click="setSelected(item.id)"
        v-for="(item, index) in walletList"
        :key="index"
        :class="['walletItem', selected === item.id ? 'active' : '']"
      >
        <div class="left">
          <div :class="[item.id === 0 ? 'super' : 'normal']">
            <img :src="require('../assets/dun.png')" v-if="item.id === 1" />
            <img :src="require('../assets/bian.png')" v-if="item.id === 2" />
            <img :src="require('../assets/wd.png')" v-if="item.id === 3" />
          </div>
          <div class="name" v-if="item.id !== 0">{{ item.name }}</div>
        </div>
        <div class="right">
          <div
            class="connectBtn"
            v-if="connectStatus[item.id] === 1"
            @click="setStatus(item.id, connectStatus[item.id])"
          >
            Connect
          </div>
          <div class="connectLoading" v-if="connectStatus[item.id] === 2"></div>
          <div class="connected" v-if="connectStatus[item.id] === 3">
            <div></div>
            Connected
          </div>
        </div>
      </div>
    </div>
    <Bridge v-if="active === 1 && isConnected" />
    <Table v-if="active === 2" />
    <div class="footer">© 2021 Bridge All Rights Reserved</div>
    <div class="twitter"></div>
    <div class="tg"></div>
  </div>
</template>

<script>
import Table from './History.vue';
import Bridge from './Bridge.vue';
import { getWeb3 } from '../router/wallet';

export default {
  components: {
    Table,
    Bridge,
  },
  data() {
    return {
      active: 1,
      selected: 0,
      isConnected: false,
      connectStatus: [1, 1, 1, 1],
      walletList: [
        {
          id: 0,
          name: 'METAMASK',
        },
        {
          id: 1,
          name: 'Trust Wallet',
        },
        {
          id: 2,
          name: 'Biance Chain Wallet',
        },
        {
          id: 3,
          name: 'WalletConnect',
        },
      ],
    };
  },
  methods: {
    setActive(id) {
      this.active = id;
    },
    setSelected(id) {
      this.selected = id;
    },
    connectWeb3() {
      console.log('----- connect web3 ----');
      getWeb3().then((web3) => {
        // returns a list of accounts connected
        console.log(web3);
        return web3.eth.getAccounts();
      }).then((accounts) => {
        console.log('accounts: ', accounts);
      });
    },
    setStatus(id, status) {
      this.selected = id;
      if (status === 1) {
        this.$set(this.connectStatus, id, 2);
        setTimeout(() => {
          this.$set(this.connectStatus, id, 3);
          this.isConnected = true;
        }, 1500);
      }
    },
  },
};
</script>

<style lang="scss">
.el-icon-sort {
  color: #fff;
  // width: 36px;
  // height: 36px;
}
</style>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  .twitter {
    width: 48px;
    height: 48px;
    background: url("../assets/ico_tw.png") no-repeat;
    background-size: 48px 48px;
    right: 158px;
    bottom: 48px;
    position: absolute;
  }
  .tg {
    border-radius: 50%;
    width: 48px;
    height: 48px;
    background: url("../assets/ico_tg.png") no-repeat;
    background-size: 48px 48px;
    right: 80px;
    bottom: 48px;
    position: absolute;
  }
  .header {
    margin-top: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .choose {
      margin-left: 80px;
      width: 130px;
      height: 36px;
      background-size: 130px 36px;
      background: url("../assets/bridge.png") no-repeat;
    }
    .bedge {
      margin-right: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: #000;
    }
    .ntab {
      display: flex;
      align-items: center;
      .ntabItem {
        font-weight: bold;
        font-size: 20px;
        color: rgba(0, 0, 0, 0.4);
        &.active {
          color: #000;
        }
        &:nth-of-type(1) {
          margin-left: 40px;
          margin-right: 40px;
        }
      }
    }
    .account {
      margin-right: 80px;
      width: 200px;
      height: 48px;
      border-radius: 30px;
      background: #000;
      font-weight: bold;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      color: #ffffff;
      cursor: pointer;
    }
  }
  .center {
    margin: 120px auto 0;
    width: 640px;
    height: 510px;
    background: #ffffff;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.04);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 40px;
    box-sizing: border-box;
    .walletItem {
      width: 560px;
      height: 100px;
      background: #ffffff;
      border: 4px solid rgba(0, 0, 0, 0.05);
      box-sizing: border-box;
      border-radius: 10px;
      margin-bottom: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-left: 41px;
      padding-right: 20px;
      box-sizing: border-box;
      .left {
        display: flex;
        align-items: center;
        .super {
          width: 170px;
          height: 31px;
          background: url("../assets/metamask.png") no-repeat;
          background-size: 170px 31px;
        }
        .normal {
          width: 38px;
          height: 38px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 11px;
          img {
            width: 38px;
            height: auto;
          }
        }
        .name {
          font-weight: bold;
          font-size: 20px;
          color: #1e2226;
        }
      }
      .right {
        display: flex;
        align-items: center;
        .connectBtn {
          width: 100px;
          height: 36px;
          background: rgba(0, 0, 0, 0.1);
          border-radius: 18px;
          font-weight: bold;
          font-size: 16px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #000000;
        }
        .connectLoading {
          width: 20px;
          height: 20px;
          background: url("../assets/connect_load.png") no-repeat;
          background-size: 20px 20px;
          animation: run 2s linear infinite;
          @keyframes run {
            0% {
            }
            100% {
              transform: rotate(360deg);
            }
          }
        }
        .connected {
          display: flex;
          align-items: center;
          div {
            width: 20px;
            height: 20px;
            background: url("../assets/success.png") no-repeat;
            background-size: 20px 20px;
            margin-right: 16px;
          }
          font-size: 16px;
          color: #1e2226;
        }
      }
      &.active {
        background: #f2f2f2;
        border: 4px solid rgba(0, 0, 0, 0.05);
      }
    }
  }
  .footer {
    margin: 0 auto;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.6);
    margin-bottom: 20px;
  }
}
</style>
