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
.center_con {
    height: 435px;
    background-color: rgba(255, 255, 255, 0.5);
    display: flex;
    position: relative;

    .song_wrapper {
        width: 200px;
        height: 435px;
        box-sizing: border-box;
        padding: 10px;
        list-style: none;
        position: absolute;
        left: 0px;
        top: 0px;
        z-index: 1;

        .song_list {
            width: 100%;
            overflow-y: auto;
            overflow-x: hidden;
            height: 100%;

            &::-webkit-scrollbar {
                display: none;
            }

            li {
                font-size: 12px;
                color: #333;
                height: 40px;
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                width: 580px;
                padding-left: 10px;

                &:nth-child(odd) {
                    background-color: rgba(240, 240, 240, 0.3);
                }

                a {
                    display: block;
                    width: 17px;
                    height: 17px;
                    background-image: url("../../assets/images/play.png");
                    background-size: 100%;
                    margin-right: 5px;
                    box-sizing: border-box;
                }

                b {
                    font-weight: normal;
                    width: 122px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                // em {
                //     width: 150px;
                //     font-style: normal;
                //     width: 100px;
                // }

                span {
                    width: 23px;
                    height: 17px;
                    margin-right: 50px;

                    i {
                        display: block;
                        width: 100%;
                        height: 100%;
                        cursor: pointer;
                        background: url("../../assets/images/table.png") left -48px no-repeat;
                        font-style: normal;
                        width: 100px;
                    }
                }
            }
        }

        .switch_btn {
            position: absolute;
            right: 0;
            top: 0;
            cursor: pointer;
        }
    }

    .player_con {
        width: 400px;
        height: 435px;
        position: absolute;
        left: 200px;
        top: 0px;

        @keyframes Rotate {
            from {
                transform: rotateZ(0);
            }

            to {
                transform: rotateZ(360deg);
            }
        }

        .play_bar {
            position: absolute;
            left: 200px;
            top: -10px;
            z-index: 10;
            transform: rotate(-25deg);
            transform-origin: 12px 12px;
            transition: 1s;
        }

        .autoRotate {
            animation-name: Rotate;
            animation-iteration-count: infinite;
            animation-play-state: paused;
            animation-timing-function: linear;
            animation-duration: 5s;
        }

        .disc {
            position: absolute;
            left: 73px;
            top: 60px;
            z-index: 9;
        }

        .cover {
            position: absolute;
            left: 125px;
            top: 112px;
            width: 150px;
            height: 150px;
            border-radius: 75px;
            z-index: 8;
        }
    }

    .playing {
        .disc {
            animation-play-state: running;
        }

        .cover {
            animation-play-state: running;
        }
    }

    .comment_wrapper {
        width: 180px;
        height: 435px;
        list-style: none;
        position: absolute;
        left: 600px;
        top: 0px;
        padding: 25px 10px;

        .title {
            position: absolute;
            top: 0;
            margin-top: 10px;
        }

        .comment_list {
            overflow: auto;
            height: 410px;

            dl {
                padding-top: 10px;
                padding-left: 55px;
                position: relative;
                margin-bottom: 20px;

                dt {
                    position: absolute;
                    left: 4px;
                    top: 10px;

                    img {
                        width: 40px;
                        height: 40px;
                        border-radius: 20px;
                    }
                }

                dd {
                    font-size: 12px;
                }

                .name {
                    font-weight: bold;
                    color: #333;
                    padding-top: 5px;
                }

                .detail {
                    color: #666;
                    margin-top: 5px;
                    line-height: 18px;
                }
            }
        }

        .right_line {
            position: absolute;
            left: 0;
            top: 0;
        }
    }
}
</style>

