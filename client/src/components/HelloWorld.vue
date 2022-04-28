<template>
  <div>
    <h3 class="mt-5">Live Streaming</h3>
    <img src="http://localhost:5000/video_feed" width="50%">
    <div id="livestream-img"></div>
    <!-- <v-img :src="imgData" width="50%" height="700px" /> -->
    <!-- <video ref="camera" :width="450" :height="337.5" autoplay></video> -->
  </div>
</template>

<script>
// import axios from 'axios'

export default {
  data: function () {
    return {
      imgData: '',
      // readable: Readable,
    }
  },
  mounted: function () {
    // this.getVideoStream()
  },
  methods: {
    async getVideoStream() {
      const path = 'http://localhost:5000/video_feed'
      fetch(path)
      .then(res => this.processChunkedResponse(res))
      .catch(this.onChunkedResponseError)

      // function onChunkedResponseComplete(result) {
      //   console.log('all done!', result)
      // }

      // function onChunkedResponseError(err) {
      //   console.error(err)
      // }
      // function processChunkedResponse(Response) {

      //   let imgTag = document.createElement('img')
      //   imgTag.src = URL.createObjectURL(Response)
      //   imgTag.classList.add('video-modal', 'popup-video')
      //   imgTag.alt = `Camera liveStream`
      //   imgTag.setAttribute("crossorigin", '')
      //   let streamDiv = document.getElementById('livestream-img')
      //   streamDiv.appendChild(imgTag)
      //   // var text = '';
      //   // var reader = response.body.getReader()
      //   // var decoder = new TextDecoder();

      //   // return readChunk();

      //   // function readChunk() {
      //   //   return reader.read().then(appendChunks);
      //   // }

      //   // function appendChunks(result) {
      //   //   var chunk = decoder.decode(result.value || new Uint8Array, {stream: !result.done});
      //   //   console.log('got chunk of', chunk.length, 'bytes')
      //   //   text += chunk;
      //   //   console.log('text so far is', text.length, 'bytes\n');
      //   //   if (result.done) {
      //   //     console.log('returning')
      //   //     return text;
      //   //   } else {
      //   //     console.log('recursing')
      //   //     return readChunk();
      //   //   }
      //   // }
      // }
      // axios
      //   .get(path)
      //   .then(res => {
      //     // this.imgData = res.data
      //     let imgTag = document.createElement('img')
      //     imgTag.src = URL.createObjectURL(res)
      //     imgTag.classList.add('video-modal', 'popup-video')
      //     imgTag.alt = `Camera ${camera.properties.name} liveStream`
      //     imgTag.setAttribute("crossorigin", '')
      //     let streamDiv = document.getElementById('livestream-img')
      //     streamDiv.appendChild(imgTag)
      //   })
      //   .catch(error => {
      //     console.error(error)
      //   })
    },
    onChunkedResponseComplete(result) {
      console.log('all done!', result)
    },

    onChunkedResponseError(err) {
      console.error(err)
    },
    processChunkedResponse(Response) {
      debugger
      // let imgTag = document.createElement('img')
      // imgTag.src = URL.createObjectURL(Response)
      // imgTag.classList.add('video-modal', 'popup-video')
      // imgTag.alt = `Camera liveStream`
      // imgTag.setAttribute("crossorigin", '')
      // let streamDiv = document.getElementById('livestream-img')
      // streamDiv.appendChild(imgTag)
      // var text = '';
      // var reader = response.body.getReader()
      // var decoder = new TextDecoder();

      // return readChunk();

      // function readChunk() {
      //   return reader.read().then(appendChunks);
      // }

      // function appendChunks(result) {
      //   var chunk = decoder.decode(result.value || new Uint8Array, {stream: !result.done});
      //   console.log('got chunk of', chunk.length, 'bytes')
      //   text += chunk;
      //   console.log('text so far is', text.length, 'bytes\n');
      //   if (result.done) {
      //     console.log('returning')
      //     return text;
      //   } else {
      //     console.log('recursing')
      //     return readChunk();
      //   }
      // }
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
