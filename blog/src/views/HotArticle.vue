<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Preston-zhou
 * @Date: 2020-09-19 15:58:59
 * @LastEditors: Preston-zhou
 * @LastEditTime: 2020-09-21 17:10:59
-->
<template>
    <div class="content">
        <div class="box">
            <div class="head">
                <h2>热门文章</h2>
                <div class="partingLine"></div>
                <p>
                    很想给你写封信,告诉你这里的天气.
                    昨夜的那场电影,还有我的心情.</p>
            </div>
            <div class="main">
                <ul>
                    <li>
                        <div class="img">
                            <img src="../assets/index/9.jpg" alt="">
                        </div>
                        <div class="liMain">
                                <div class="container">
                                    <div class="title">标题</div>
                                    <div class="time">2017年2月16日</div>
                                    <div class="introduce">
                                        很想给你写封信,告诉你这里的天气.
                                        昨夜的那场电影,还有我的心情.
                                    </div>
                                    <div class="more">
                                        <span>阅读更多</span>
                                    </div>
                                </div>
                        </div>
                    </li>
                    <li>
                        <div class="img">
                            <img src="../assets/index/27.jpg" alt="">
                        </div>
                        <div class="liMain">
                                <div class="container">
                                    <div class="title">标题</div>
                                    <div class="time">2017年2月16日</div>
                                    <div class="introduce">
                                        很想给你写封信,告诉你这里的天气.
                                        昨夜的那场电影,还有我的心情.
                                    </div>
                                    <div class="more">
                                        <span>阅读更多</span>
                                    </div>
                                </div>
                        </div>
                    </li>
                    <li>
                        <div class="img">
                            <img src="../assets/index/30.jpg" alt="">
                        </div>
                        <div class="liMain">
                                <div class="container">
                                    <div class="title">标题</div>
                                    <div class="time">2017年2月16日</div>
                                    <div class="introduce">
                                        很想给你写封信,告诉你这里的天气.
                                        昨夜的那场电影,还有我的心情.
                                    </div>
                                    <div class="more">
                                        <span>阅读更多</span>
                                    </div>
                                </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="watch">
                <div class="about">
                    <span>关于</span>
                </div>
                <div class="frientLink">
                    <span>+友情链接</span>
                </div>
            </div>
        </div>
        <div style="height: 2000px;"></div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                
            }
        }
    }
</script>

<style lang="scss" scoped>
.content{
    .box {
        width: 100%;
        height: 80vh;
        background-color: #fff;
        .head{
            width: 100%;
            height: 140px;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            h2{
                font-size: 20px;
            }
            .partingLine {
                width: 50px;
                height: 5px;
                background-color: #00c2ff;
                margin: 20px 0;
            }
        }
        .main{
            width: 80%;
            height: 560px;
            margin: 0 auto;
            ul{
                width:100%;
                height:100%;
                display: flex;
                justify-content: space-between;
                li{
                    width: 30%;
                    height: 100%;
                    background-color: #faf9f9;
                    &>div{
                        height: 50%;
                    }
                    .img{
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .liMain{
                        padding: 20px 10px;
                        color: #999999;
                        .time{
                            margin: 10px 0;
                        }
                        .more {
                            transform: translateY(100px);
                            color: #29b6f6;
                            cursor: pointer;
                        }
                    }
                }
            }
        }
        .watch{
            margin-top: 25px;
            width: 100%;
            height: 280px;
            background-image: url(https://yssimage.oss-cn-hangzhou.aliyuncs.com/22.jpg);
            background-position: center;
            background-attachment: fixed;
            background-repeat: no-repeat;
            background-size: cover;
            position: relative;
            &::after {
                content: '';
                display: block;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.5);
                position: absolute;
                top: 0;
                left: 0;
            }
            div{
                
            }
        }
        @media (min-width: 1300px) and (max-width: 1500px) {
            .main {
                height: 440px;
            }

            .more {
                transform: translateY(50px) !important;
            }
            .watch {
                height: 240px;
            }
        }
    }
}
</style>