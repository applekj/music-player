<template>
    <div class="wrap">
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
    </div>
</template>

<script>
import axios from '../../utils/axios'
import Search from '../../components/Search'
import Center from '../../components/Center'
import Audio from '../../components/Audio'

export default {
    name: 'App',
    components: { Search, Center, Audio },
    data: function () {
        return {
            musicList: [],
            musicUrl: '',
            musicPic: '',
            musicComment: [],
            isPlaying: false,
            mvUrl: '',
            isMVPlaying: false
        }
    },
    mounted() {
        this.$refs.center.$on('playMusic', this.playMusic)
        this.$refs.center.$on('playMV', this.playMV)

        this.$refs.audio.$on('play', this.play)
        this.$refs.audio.$on('pause', this.pause)
    },
    beforeDestroy() {
        this.$off()
    },
    methods: {
        //查询歌曲
        async handleSearch(value) {
            const { result: { songs } } = await axios.get(`https://autumnfish.cn/search?keywords=${value}`)
            this.musicList = songs
        },
        //播放歌曲
        async playMusic(musicId) {
            const musicInfo = await axios.get('https://autumnfish.cn/song/url?id=' + musicId)
            const musicPicInfo = await axios.get('https://autumnfish.cn/song/detail?ids=' + musicId)
            const commentInfo = await axios.get('https://autumnfish.cn/comment/hot?type=0&id=' + musicId)
            this.musicPic = musicPicInfo.songs[0].al.picUrl
            this.musicUrl = musicInfo.data[0].url
            this.musicComment = commentInfo.hotComments
            this.isPlaying = true
        },
        play() {
            this.isPlaying = true
        },
        pause() {
            this.isPlaying = false
        },
        async playMV(mvid) {
            const mvInfo = await axios.get('https://autumnfish.cn/mv/url?id=' + mvid)
            this.mvUrl = mvInfo.data.url
            this.isMVPlaying = true
        },
        hideMV() {
            this.isMVPlaying = false
        }
    },
}
</script>

<style lang="less" scoped>
@import url('./index.less');
</style>