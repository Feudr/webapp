<template>
    <div>
        <city-header></city-header>
        <city-list :hotCity="hotCity" :cities="cities"></city-list>
    </div>
</template>

<script>
    import CityHeader from './pages/Header'
    import CityList from './pages/List'
export default {
    components: {
        CityHeader,
        CityList
    },
    data () {
            return {
                hotCity: [],
                cities: {}
            }
        },
        mounted () {
            this.$http.get("http://localhost:8080/static/mock/dataCity.json").then((res) => {
                // console.log(res);
                let data = res.data.data;
                this.hotCity = data.hotCity;
                this.cities = data.cities;
            })
        }
}
</script>
