<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-icons :sceneryList1 = 'sceneryList1' :sceneryList2 = 'sceneryList2'></home-icons>
        <home-location></home-location>
        <home-activity></home-activity>
        <home-hotList :hotList = 'hotList'></home-hotList>
        <home-like :likeList = 'likeList'></home-like>
        <home-vacation :vacationList = 'vacationList'></home-vacation>
    </div>
</template>

<script>
    import HomeHeader from './pages/Header'
    import HomeSwiper from './pages/Swiper'
    import HomeIcons  from './pages/Icons'
    import HomeLocation from './pages/Location'
    import HomeActivity from './pages/Activity'
    import HomeHotList from './pages/HotList'
    import HomeLike from './pages/Like'
    import HomeVacation from './pages/Vacation'
    export default {
        components: {
            HomeHeader,
            HomeSwiper,
            HomeIcons,
            HomeLocation,
            HomeActivity,
            HomeHotList,
            HomeLike,
            HomeVacation
        },
        data () {
            return {
                sceneryList1: [],
                sceneryList2: [],
                hotList: [],
                likeList: [],
                vacationList: []
            }
        },
        mounted () {
            this.$http.get("http://localhost:8080/static/mock/dataHome.json").then((res) => {
                // console.log(res);
                const data = res.data.data[0];
                this.sceneryList1 = data.sceneryList1;
                this.sceneryList2 = data.sceneryList2;
                this.hotList = data.hotList;
                this.likeList = data.likeList;
                this.vacationList = data.vacationList;
            })
        }
    }
</script>

<style>

</style>

