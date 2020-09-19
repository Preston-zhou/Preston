<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Preston-zhou
 * @Date: 2020-09-19 14:28:11
 * @LastEditors: Preston-zhou
 * @LastEditTime: 2020-09-19 16:00:48
-->
<template>
    <div class="index">
        <Home />
        <Menu class="menu"/>
        <HotArticle />
    </div>
</template>

<script>
import Home from '@/views/Home'   //Head 组件
import Menu from '@/components/menu' //菜单组件
import HotArticle from '@/views/HotArticle' // 热门文章
    export default {
        data(){
            return {

            }
        },
        components:{
            Home,
            Menu,
            HotArticle
        }
    }
</script>

<style lang="scss" scoped>
.index{
    position: relative;
    .menu {
        position: absolute;
        top: 30px;
        right: 30px;
        color: #fff;
    }
}
</style>