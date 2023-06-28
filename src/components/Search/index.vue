<template>
    <div class="search_bar">
        <img src="../../assets/images/player_title.png" alt="">
        <input type="text" autocomplete="off" :value="query" @keyup.enter="sendQuery">
    </div>
</template>

<script>
export default {
    name: 'Search',
    props: ['query', 'musicList', 'handleSearch'],
    methods: {
        sendQuery($event) {
            this.$emit('Home', $event.target.value)
        }
    },
    beforeDestroy() {
        this.$emit('Home')
    }
}
</script>

<style lang="less" scoped>
@import url('./index.less');
</style>