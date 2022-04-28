<template>
	<v-container>
		<div class="row">
			<div class="col-md-10 offset-md-1">
				<div class="row no-gutters audio-player">
					<div class="col-md-6 d-flex align-items-center">
						<div class="track">
							<div class="track__details">
								<v-img class="image" src="/gif3.gif" />
								<h4>
									{{ musicPlaylist[currentSong].title }}
								</h4>
								<p>
									{{ musicPlaylist[currentSong].desc }}
								</p>
							</div>
							<div class="track__controls">
								<div class="player-progress">
									<span class="currentTime">{{
										currentTime | fancyTimeFormat
									}}</span>
									<input
										type="range"
										min="1"
										max="100"
										v-model="currentProgressBar"
										:disabled="currentlyPlaying"
										title="Pause 상태에서만 설정 가능합니다."
									/>
									<span class="totalTime">
										{{ trackDuration | fancyTimeFormat }}</span
									>
								</div>
								<ul class="player-controls">
									<li>
										<Button
											@click="playAudio()"
											color="blue-grey darken-1"
											fab
											title="Play Song"
											v-if="!currentlyPlaying"
											iconName="mdi-play"
										></Button>
										<Button
											@click="playAudio()"
											color="blue-grey darken-1"
											fab
											title="Pause Song"
											v-if="currentlyPlaying"
											iconName="mdi-pause"
										></Button>
									</li>
									<li>
										<Button
											@click="
												del(
													musicPlaylist[currentSong].id,
													musicPlaylist[currentSong].url,
													musicPlaylist[currentSong].title,
												)
											"
											color="red darken-1"
											fab
											title="Delete"
											iconName="mdi-delete-forever"
										></Button>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="col-md-6">
						<v-simple-table fixed-header class="playlist roller">
							<template>
								<thead>
									<tr>
										<th colspan="3" class="text-center">
											음성
										</th>
									</tr>
									<tr>
										<!-- 전체선택 체크박스(사용시 주석해제) -->
										<!-- <th class="text-left">
													<input
														type="checkbox"
														title="전체선택"
														v-model="allChecked"
													/>
												</th> -->
										<th class="text-center">선택</th>
										<th class="text-center">
											Name
										</th>
										<th class="text-center">
											Download
										</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="(item, index) in musicPlaylist" v-bind:key="index">
										<td class="text-center">
											<input
												type="checkbox"
												:id="'check_' + index"
												:value="item.id"
												v-model="item.delYn"
												@change="selected($event)"
											/>
										</td>
										<td class="text-center" @click="changeSong(index)">
											{{ item.title }}
										</td>
										<td class="text-center">
											<Button
												color="blue-grey darken-1"
												:href="item.url"
												download
												small
												iconName="mdi-download"
												title="voice file download"
											></Button>
										</td>
									</tr>
								</tbody>
							</template>
						</v-simple-table>
						<!-- v-simple-table 사용으로 주석 -->
						<!-- <div class="playlist roller">
									<ul>
										<li
											class="item"
											v-for="(item, index) in musicPlaylist"
											v-bind:class="{ active: isCurrentSong(index) }"
											v-bind:key="index"
											v-on:click="changeSong(index)"
										>
											<input
												type="checkbox"
												:id="'check_' + index"
												:value="item.id"
												v-model="item.delYn"
												@change="selected($event)"
											/>
											{{ item.title }}
										</li>
									</ul>
								</div> -->
					</div>
				</div>
			</div>
		</div>
		<v-fab-transition>
			<ul>
				<!-- v-simple-table header checkbox 사용시 주석 -->
				<Button
					@click="checkedAll()"
					color="blue-grey darken-1"
					fab
					bottom
					fixed
					style="margin-bottom: 7%;"
					title="Voice All Check"
					iconName="mdi-playlist-check"
				></Button>
				<Button
					@click="checkedDelete()"
					color="red darken-1"
					fab
					bottom
					fixed
					style="margin-bottom: 3%;"
					title="Checked Voice Delete"
					iconName="mdi-delete-sweep"
				></Button>
				<Button
					@click="checkedDownload()"
					color="green darken-1"
					fab
					bottom
					fixed
					style="margin-bottom: 11%;"
					title="Checked Voice Download"
					iconName="mdi-download"
				></Button>
			</ul>
		</v-fab-transition>
	</v-container>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Ping',
  data() {
    return {
      audio: '',
      imgLoaded: false,
      currentlyPlaying: false,
      currentlyStopped: false,
      currentTime: 0,
      checkingCurrentPositionInTrack: '',
      trackDuration: 0,
      currentProgressBar: 0,
      isPlaylistActive: false,
      currentSong: 0,
      debug: false,
      musicPlaylist: [
        {
          title: 'tempTTS.wav',
          url: '/resources/temp/tempTTS.wav',
          desc: '미리듣기용 음성파일',
          id: '',
          delYn: false,
        },
      ],
      audioFile: '',
      document: [],
      options: {
        multiSort: true,
        sortBy: [],
        sortDesc: [],
        page: 1,
        itemsPerPage: 10,
      },
      footerOptions: {
        'items-per-page-options': [5, 10, 25, 50, 100],
      },
      totalCount: 0,
      loading: false,
      title: '',
      beforeDestroyAt: false,
      allChecked: false,
      checkedIdList: '',
      checkedTitleList: '',
      checkedPathList: '',
    };
  },
  mounted() {
    // this.getTTSList();
  },
  filters: {
    fancyTimeFormat(s) {
      return (s - (s %= 60)) / 60 + (s > 9 ? ':' : ':0') + s;
    },
  },
  methods: {
    togglePlaylist() {
      this.isPlaylistActive = !this.isPlaylistActive;
    },
    nextSong() {
      if (this.currentSong < this.musicPlaylist.length - 1) this.changeSong(this.currentSong + 1);
    },
    prevSong() {
      if (this.currentSong > 0) this.changeSong(this.currentSong - 1);
    },
    changeSong(index) {
      this.imageLoaded = false;
      if (index !== undefined) {
        this.stopAudio();
        this.currentSong = index;
      }
      this.audioFile = this.musicPlaylist[this.currentSong].url;
      this.audio = new Audio(this.audioFile);
      const localThis = this;
      this.audio.addEventListener('loadedmetadata', function () {
        localThis.trackDuration = Math.trunc(this.duration); // Math.round(this.duration)
      });
      localThis.currentTime = localThis.audio.currentTime;
      localThis.currentProgressBar = 0;
      this.audio.addEventListener('ended', this.handleEnded);
    },
    isCurrentSong(index) {
      if (this.currentSong == index) {
        return true;
      }
      return false;
    },
    getCurrentSong(currentSong) {
      return this.musicPlaylist[currentSong].url;
    },
    playAudio() {
      if (!this.currentlyPlaying) {
        if (this.currentlyStopped == true) {
          const localThis = this;
          localThis.currentProgressBar = 0;
          this.audio.currentTime = 0;
          this.currentTime = 0;
        }
        this.getCurrentTimeEverySecond(true);
        this.currentlyPlaying = true;
        this.audio.currentTime = this.currentTime;
        this.audio.play();
      } else {
        this.stopAudio();
      }
      this.currentlyStopped = false;
    },
    stopAudio() {
      this.audio.pause();
      this.currentlyPlaying = false;
      this.pausedMusic();
    },
    handleEnded() {
      this.stopAudio();
      const localThis = this;
      localThis.currentProgressBar = 100;
      this.currentlyPlaying = false;
      this.currentlyStopped = true;
    },
    onImageLoaded() {
      this.imgLoaded = true;
    },
    getCurrentTimeEverySecond() {
      const localThis = this;
      this.checkingCurrentPositionInTrack = setTimeout(
        () => {
          localThis.currentTime = localThis.audio.currentTime;
          localThis.currentProgressBar =						(localThis.audio.currentTime / localThis.trackDuration) * 100;
          localThis.getCurrentTimeEverySecond(true);
        },
        1000,
      );
    },
    pausedMusic() {
      clearTimeout(this.checkingCurrentPositionInTrack);
    },
    toggleDebug() {
      this.debug = !this.debug;
      document.body.classList.toggle('debug');
    },
    async del(id, url, title) {
      const res = await this.confirmDialog(
        'Confirm Delete',
        'Are you sure you want to delete it?',
      );
      if (res) {
        deleteTTSAPI({
          params: {
            ttsFileId: id,
            ttsFileNm: title,
            fileStreCours: url,
          },
        })
          .then((response) => {
            if (response.data > 0) {
              this.$store.commit('SET_SNACKBAR', {
                show: true,
                msg: 'Delete Complete',
                color: 'error',
              });
              this.refresh();
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    // eslint-disable-next-line no-unused-vars
    getTTSDataFromAPI(page, itemsPerPage, sort) {
      return getTTSListAPI({
        params: {
          id: this.$session.get('LoginVO').id,
          name: this.$session.get('LoginVO').name,
          userUniqueId: this.$session.get('LoginVO').userUniqueId,
        },
      })
        .then((response) => response.data)
        .catch((error) => {
          console.log(error);
        });
    },
    getTTSList() {
      const vm = this;
      this.loading = true;

      // eslint-disable-next-line
			return new Promise((resolve, reject) => {
        const {
          sortBy, sortDesc, page, itemsPerPage,
        } = this.options;
        const sort = [];
        if (sortBy.length > 0) {
          // eslint-disable-next-line
					sortBy.forEach((value, index) => {
            sort.push(
              `${value
                .replace(/[A-Z]/g, (str) => `_${str[0]}`)
                .toUpperCase()
								 } ${
								 sortDesc[index] ? 'desc' : 'asc'}`,
            );
          });
        } else {
          sort.push('TTS_FILE_ID asc');
        }
        let items = this.getTTSDataFromAPI(page, itemsPerPage, sort).then(
          (response) => {
            items = response.data;
            if (items.length == 0) {
              if (this.alertDialog('생성한 음성이 없습니다. 먼저 생성하세요.')) this.movePage('/tts/write');
            } else {
              this.beforeDestroyAt = true;
              const itemList = [];
              for (let cnt = 0; cnt < items.length; cnt++) {
                const { fileStreCours } = items[cnt];
                const { ttsFileId } = items[cnt];
                const { ttsFileNm } = items[cnt];
                const ttsFilePath = fileStreCours + ttsFileNm;
                const { fileCn } = items[cnt];
                const item = {
                  title: ttsFileNm,
                  url: ttsFilePath,
                  desc: fileCn,
                  id: ttsFileId,
                  delYn: false,
                };
                itemList.push(item);
              }

              this.musicPlaylist = itemList;

              setTimeout(() => {
                this.changeSong();
                this.audio.loop = false;
                vm.loading = false;
              }, 1000);
            }
          },
        );
      });
    },
    checkedAll() {
      this.allChecked = !this.allChecked; // v-simple-table all-checkbox 기능 사용시 주석
      for (const i in this.musicPlaylist) {
        this.musicPlaylist[i].delYn = this.allChecked;
      }
    },
    selected() {
      for (const i in this.musicPlaylist) {
        if (!this.musicPlaylist[i].delYn) {
          this.allChecked = false;
          return;
        }
        this.allChecked = true;
      }
    },
    async checkedDelete() {
      for (const i in this.musicPlaylist) {
        if (this.musicPlaylist[i].delYn) {
          if (i > 0 && this.checkedIdList != '') {
            this.checkedIdList += ',';
            this.checkedTitleList += ',';
            this.checkedPathList += ',';
          }
          const checkedItem = this.musicPlaylist[i].id;
          const checkedTitle = this.musicPlaylist[i].title;
          const checkedPath = this.musicPlaylist[i].title;
          this.checkedIdList += checkedItem;
          this.checkedTitleList += checkedTitle;
          this.checkedPathList += checkedPath;
        }
      }
      console.log(`checkedIdList : ${this.checkedIdList}`);
      console.log(`checkedTitleList : ${this.checkedTitleList}`);
      console.log(`checkedPathList : ${this.checkedPathList}`);
      const res = await this.confirmDialog(
        'Confirm Checked Delete',
        'Are you sure you want to delete checked voices?',
      );
      if (res) {
        checkedDeleteTTSAPI({
          params: {
            checkedIdList: this.checkedIdList,
            checkedTitleList: this.checkedTitleList,
            checkedPathList: this.checkedPathList,
          },
        })
          .then((response) => {
            if (response.data > 0) {
              this.$store.commit('SET_SNACKBAR', {
                show: true,
                msg: 'Delete Complete',
                color: 'error',
              });
              this.refresh();
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    async checkedDownload() {
      const res = await this.confirmDialog(
        'Confirm Checked Download',
        'Are you sure you want to download checked voices?',
      );
      if (res) {
        //
        for (const i in this.musicPlaylist) {
          if (this.musicPlaylist[i].delYn) {
            const link = document.createElement('a');
            link.href = this.musicPlaylist[i].url;
            link.download = this.musicPlaylist[i].title;
            link.click();
            URL.revokeObjectURL(link.href);
          }
        }
      }
    },
    getMessage() {
      const path = 'http://localhost:5000/';
      axios.get(path)
        .then((res) => {
          this.msg = res.data;
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        });
    },
  },
  created() {
    // this.getMessage();
  },
};
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Raleway:400,400i,700');

body {
	//background-color: #ffd166;
	font-family: Raleway, sans-serif;
	// padding: 3rem;
	font-size: 15px;
}

.row {
	margin: 0 !important;
	.col-md-10 {
		margin: 0 !important;
		padding: 0;
	}
	.offset-md-1 {
		margin-left: 8.3333333333% !important;
	}
}

.audio-player {
	width: 100%;
	border-radius: 3px;
	margin: 0 auto;
	background-color: #fff;
	box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11),
		0 5px 15px 0 rgba(0, 0, 0, 0.08);

	.playlist {
		padding: 3rem;
		max-height: 800px;
		overflow-y: scroll;

		ul {
			padding: 0;
			list-style-type: none;

			li {
				padding: 1rem;
				border-bottom: 1px solid rgba(0, 0, 0, 0.05);

				&:hover {
					cursor: pointer;
					background-color: #f8f8f8;
				}

				&.active {
					background-color: #f8f8f8;
					font-weight: bold;
				}
			}
		}
	}

	.track {
		background-color: #efefef;
		padding: 3rem;
		width: 100%;

		img {
			height: 100px;
			width: 100px;
			border-radius: 50%;
			margin: 0 auto;
			margin-bottom: 1rem;
		}

		h4 {
			font-size: 1rem;
			font-weight: 700;
			padding-bottom: 30px;
		}

		.track__details {
			text-align: center;
		}
		.image {
			height: 300px;
			width: 300px;
			//border-radius: 50%;
			margin: 0 auto;
			margin-bottom: 1rem;
		}
		.track__controls {
			.player-progress {
				display: flex;
				justify-content: center;
				align-items: center;
				margin: 0;
			}
			span {
				margin: 0 10px;
				font-size: 1rem;
			}
			.player-controls {
				display: flex;
				justify-content: center;
				border-top: 1px solid rgba(0, 0, 0, 0.05);
				padding-top: 1rem;
				align-items: center;
				list-style: none;

				li {
					position: relative;
					display: inline-block;
					margin: 0 30px;
					cursor: pointer;
					transition: all 0.3s;
				}
			}
			.player-progress input {
				-webkit-appearance: none;
				appearance: none;
				width: 60%;
				height: 4px;
				background: #000;
				border-radius: 10px;
				outline: none;
				cursor: pointer;
			}
			.player-progress input::-webkit-slider-thumb {
				-webkit-appearance: none;
				appearance: none;
				width: 15px;
				height: 15px;
				border-radius: 100%;
				background: #fff;
				cursor: pointer;
				outline: none;
				cursor: pointer;
				box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 1);
				transition: all 0.2s;
			}
		}
	}
}
</style>
