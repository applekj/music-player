<template>
    <div class="center_con">
        <div class="song_wrapper">
            <ul class="song_list">
                <li v-for="(item, index) in musicList" :key="index">
                    <a href="javascript:;" @click="emitEvent('playMusic', item.id)"></a>
                    <b>{{ item.name }}</b>
                    <span v-show="item.mvid !== 0"><i @click="emitEvent('playMV', item.mvid)"></i></span>
                </li>
            </ul>
            <img src="../../assets/images/line.png" alt="" class="switch_btn">
        </div>
        <div class="player_con" :class="{ playing: isPlaying }">
            <img src="../../assets/images/player_bar.png" class="play_bar">
            <img src="../../assets/images/disc.png" class="disc autoRotate">
            <img :src="musicPic" class="cover autoRotate">
        </div>
        <div class="comment_wrapper">
            <h5 class="title">热门留言</h5>
            <div class="comment_list">
                <dl v-for="(item, index) in musicComment" :key="index">
                    <dt><img :src="item.user.avatarUrl" alt=""></dt>
                    <dd class="name">{{ item.user.nickname }}</dd>
                    <dd class="detail">
                        {{ item.content }}
                    </dd>
                </dl>
            </div>
            <img src="../../assets/images/line.png" class="right_line">
        </div>
    </div>
</template>

<script>

export default {
    name: 'Center',
    props: ['musicList', 'musicPic', 'isPlaying', 'musicComment'],
    methods: {
        emitEvent(eventName, ...params) {
            this.$emit(eventName, ...params)
        }
    }
}
</script>

<style lang="less" scoped>
@import url('./index.less');
</style>

