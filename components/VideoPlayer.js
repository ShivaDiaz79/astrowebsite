import React, { useState, useRef } from "react";
import {
  Card,
  CardContent,
  Typography,
  FormControl,
  Select,
  MenuItem,
} from "@material-ui/core";

const VideoPlayer = ({ videoUrl, paragraph }) => {
  const videoRef = useRef(null);
  const [playbackRate, setPlaybackRate] = useState(1);

  const handlePlaybackRateChange = (event) => {
    const newPlaybackRate = parseFloat(event.target.value);
    setPlaybackRate(newPlaybackRate);
    updatePlaybackRate(newPlaybackRate);
  };

  const updatePlaybackRate = (newPlaybackRate) => {
    if (videoRef.current) {
      videoRef.current.playbackRate = newPlaybackRate;
    }
  };

  const handleDecreaseSpeed = () => {
    const newPlaybackRate = Math.max(playbackRate - 0.25, 0.25);
    setPlaybackRate(newPlaybackRate);
    updatePlaybackRate(newPlaybackRate);
  };

  const handleIncreaseSpeed = () => {
    const newPlaybackRate = Math.min(playbackRate + 0.25, 2.0);
    setPlaybackRate(newPlaybackRate);
    updatePlaybackRate(newPlaybackRate);
  };

  return (
    <Card>
      <video ref={videoRef} src={videoUrl} controls style={{ width: "100%" }} />
      <CardContent>
        <Typography variant="body1">{paragraph}</Typography>
        <FormControl>
          <Select
            value={playbackRate}
            onChange={handlePlaybackRateChange}
            className="mt-2 px-4 py-2 rounded-md bg-pink-700 text-blue-800"
          >
            <MenuItem value={0.25}>0.25x</MenuItem>
            <MenuItem value={0.5}>0.5x</MenuItem>
            <MenuItem value={0.75}>0.75x</MenuItem>
            <MenuItem value={1}>1x</MenuItem>
            <MenuItem value={1.25}>1.25x</MenuItem>
            <MenuItem value={1.5}>1.5x</MenuItem>
            <MenuItem value={2}>2x</MenuItem>
          </Select>
        </FormControl>
        <div className="mt-4">
          <button
            className="mr-2 px-4 py-2 rounded-md  text-white group relative inline-block focus:outline-none focus:ring"
            onClick={handleDecreaseSpeed}
            disabled={playbackRate === 0.25}
          >
            <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-yellow-300 transition-transform group-hover:translate-y-0 group-hover:translate-x-0"></span>

            <span className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75">
              Disminuir Velocidad
            </span>
          </button>
          <button
            className="px-4 py-2 rounded-md text-white group relative inline-block focus:outline-none focus:ring"
            onClick={handleIncreaseSpeed}
            disabled={playbackRate === 2}
          >
            <span className="absolute inset-0 translate-x-0 translate-y-0 bg-yellow-300 transition-transform group-hover:translate-y-1.5 group-hover:translate-x-1.5"></span>

            <span className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest">
              Aumentar Velocidad
            </span>
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default VideoPlayer;
