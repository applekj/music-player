<template>
    <div class="audio_con">
        <audio ref='audio' :src="musicUrl" controls autoplay loop class="myaudio" @play="() => { this.$emit('play') }"
            @pause="() => { this.$emit('pause') }"></audio>
    </div>
</template>

<script>

export default {
    name: 'Audio',
    props: ['musicUrl',],
}
</script>

<style lang="less" scoped>
@import url('./index.less');
</style>