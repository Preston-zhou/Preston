<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Preston-zhou
 * @Date: 2020-09-19 10:03:05
 * @LastEditors: Preston-zhou
 * @LastEditTime: 2020-09-19 17:45:33
-->
<template>
  <div class="home" ref="home">
    <div class="content">
      <div class="homeTitle">
        <div class="name">
          周培来
        </div>
        <div class="title">
          剑气纵横三万里，一剑光寒十九洲。
        </div>
        <div class="enterBlog">
          Enter Blog
        </div>
      </div>
      <div class="arrow" @click="handleArrow">
          <div class="img"></div>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src

  export default {
    name: "Home",
    components: {

    },
    data(){
      return {

      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll, true);  // 监听（绑定）滚轮滚动事件
    },
    methods: {
        handleArrow(){},
        handleScroll: function () {
            let clientHeight = document.documentElement.clientHeight || document.body.clientHeight;  
            // 设备/屏幕高度
            let scrollObj = this.$refs.home // 滚动区域
            let scrollTop = scrollObj.scrollTop; // div 到头部的距离
            let scrollHeight = scrollObj.scrollHeight; // 滚动条的总高度
            //滚动条到底部的条件
            if(scrollTop+clientHeight == scrollHeight){
                // div 到头部的距离 + 屏幕高度 = 可滚动的总高度
            }  
        }
      },
      destroyed: function () {
        window.removeEventListener('scroll', this.handleScroll);   //  离开页面清除（移除）滚轮滚动事件
      }
  };
</script>
<style lang="scss" scope>
  .home {
    width: 100%;
    height: 100vh;
    background-image: url("../assets/index/head.jpg");
    padding: 0;
    background-color: rgba(0, 0, 0, 0.5);
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat;
    position: relative;

    .content {
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.4);

      .homeTitle {
        text-align: center;
        color: #fff;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        .name {
          font-size: 20px;
        }

        .title {
          margin: 20px 0;
        }

        .enterBlog {
          width: 100px;
          height: 38px;
          line-height: 38px;
          background-color: #1E9FFF;
          border-radius: 5px;
          margin: 0 auto;
          cursor: pointer;
        }
      }

      .arrow {
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: center;
        position: absolute;
        bottom: 20px;

        .img {
          width: 40px;
          height: 40px;
          background-image: url(../assets/index/bottomArrow.png);
          background-size: cover;

          &:hover {
            background-image: url(../assets/index/bottomArrow-active.png);
          }
        }
      }
    }
  }
</style>

