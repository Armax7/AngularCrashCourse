const NodeMediaServer = require("node-media-server");
const dotenv = require("dotenv");

dotenv.config();

const config = {
  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60,
  },
  http: {
    port: 8000,
    mediaroot: "./media",
    allow_origin: "*",
  },
  trans: {
    ffmpeg: process.env.FFMPEG_PATH,
    tasks: [
      {
        app: "live",
        hls: true,
        hlsFlags: "[hls_time=2:hls_list_size=3:hls_flags=delete_segments]",
        hlsKeep: false, // to prevent hls file delete after end the stream
      },
    ],
  },
  auth: {
    api: true,
    api_user: process.env.API_USER,
    api_pass: process.env.API_PASS,
  },
};

var nms = new NodeMediaServer(config);
nms.run();
