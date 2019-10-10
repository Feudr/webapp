<template>
    <!-- 定位和地图开始 -->
    <div class="location">
        <div class="location-item position">
            <span class="iconfont">&#xe503;</span>
            武汉
        </div>
        <div class="location-item">
            <span class="iconfont">&#xe718;</span>
            玩水季
        </div>
    </div>
    <!-- 定位和地图结束 -->
</template>

<script>
</script>

<style scopes>
/* 定位和地图开始 */
.location {
    height: .8rem;
    line-height: .8rem;
    display: flex;
    border-top: .02rem solid #e0e0e0;
    background-color: #fff;
}
.position {
    border-right: .02rem solid #e0e0e0;
}
.location-item, .activity-item {
    flex:1;
    font-size: .28rem;
    text-align: center;
}
/* 定位和地图结束 */
</style>