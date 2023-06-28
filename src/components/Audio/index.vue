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
.audio_con {
    height: 50px;
    background-color: #f1f3f4;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;

    .myaudio {
        width: 800px;
        height: 40px;
        margin-top: 5px;
        outline: none;
        background-color: #f1f3f4;
    }
}
</style>