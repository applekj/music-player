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
.search_bar {
    height: 60px;
    background-color: #1eacda;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 11;

    img {
        margin-left: 23px;
    }

    input {
        margin-right: 23px;
        width: 296px;
        height: 34px;
        border-radius: 17px;
        border: 0px;
        background: url('../../assets/images/zoom.png') 265px center no-repeat rgba(255, 255, 255, 0.45);
        text-indent: 15px;
        outline: none;
    }
}
</style>