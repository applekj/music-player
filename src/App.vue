<template>
    <Home />
    <!-- <div class="wrap">
        <div id="id" class="play_wrap">
            <Search :musicList="musicList" @Home="handleSearch" />
            <Center ref="center" :musicList="musicList" :musicPic="musicPic" :isPlaying="isPlaying"
                :musicComment="musicComment" />
            <Audio ref="audio" :musicUrl="musicUrl" />
            <div class="video_con" v-show="isMVPlaying">
                <video :src="mvUrl" controls autoplay></video>
                <div class="mask" @click="hideMV"></div>
            </div>
        </div>
    </div> -->
</template>

<script>
// import axios from './utils/axios'
import Home from './views/Home'
// import Search from './components/Search'
// import Center from './components/Center'
// import Audio from './components/Audio'

export default {
    name: 'App',
    components: { Home },
}
</script>

<!-- <style lang="less">
body,
ul,
dl,
dd {
    margin: 0;
    padding: 0;
}

.wrap {
    position: fixed;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: url('./assets/images/bg.jpg') no-repeat;
    background-size: 100% 100%;

    .play_wrap {
        width: 800px;
        height: 544px;
        position: fixed;
        left: 50%;
        top: 50%;
        margin-left: -400px;
        margin-top: -272px;

        .video_con {
            video {
                position: fixed;
                width: 800px;
                height: 546px;
                left: 50%;
                top: 50%;
                margin-top: -273px;
                transform: translateX(-50%);
                z-index: 990;
            }

            .mask {
                position: fixed;
                width: 100%;
                height: 100%;
                left: 0;
                top: 0;
                z-index: 980;
                background-color: rgba(0, 0, 0, 0.8);
            }
        }
    }
}
</style> -->