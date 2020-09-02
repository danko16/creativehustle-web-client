import React, { useState, useEffect, useRef } from 'react';
import YouTube from 'react-youtube';
import { Slider, FormattedTime } from 'react-player-controls';
import PropTypes from 'prop-types';
import './yt-player.css';

const GRAY = '#878c88';
const RED = 'rgb(255, 129, 129)';
const opts = {
  height: '390',
  width: '640',
  playerVars: {
    rel: 0,
    controls: 0,
    autoplay: 1,
    playback: 0,
    modestbranding: 1,
  },
};

function YtPlayer({ detailContent }) {
  const [loadedVal, setLoadedVal] = useState(0);
  const [sliderVal, setSliderVal] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hoverValue, setHoverValue] = useState(null);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const player = useRef();
  const time = useRef();

  useEffect(() => {
    return () => {
      clearInterval(time.current);
    };
  }, []);

  function _onReady(event) {
    player.current = event.target;
    setDuration(Math.round(player.current.getDuration()));
  }

  function _onStateChange(event) {
    switch (event.data) {
      case window['YT'].PlayerState.PLAYING:
        setIsPlaying(true);
        startCount();
        break;
      case window['YT'].PlayerState.PAUSED:
        setIsPlaying(false);
        stopCount();
        break;
      case window['YT'].PlayerState.ENDED:
        setIsPlaying(false);
        stopCount();
        break;
      default:
        break;
    }
  }

  function onPlayerError(event) {
    switch (event.data) {
      case 2:
        console.log('' + detailContent.url.split('/').pop());
        break;
      case 100:
        break;
      case 101 || 150:
        break;
      default:
        break;
    }
  }

  const startCount = () => {
    time.current = setInterval(() => {
      const loadFraction = player.current.getVideoLoadedFraction();
      const currentTime = Math.round(player.current.getCurrentTime());
      if (currentTime >= duration) {
        stopCount();
      }
      setCurrentTime(currentTime);
      setLoadedVal(() => loadFraction);
      setSliderVal(() => (currentTime / duration) * 100);
    }, 1000);
  };

  function stopCount() {
    clearInterval(time.current);
  }

  const ProgressBar = () => {
    return (
      <Slider
        direction="HORIZONTAL"
        onIntent={(intent) => {
          setHoverValue(intent);
        }}
        onIntentEnd={() => {
          setHoverValue(null);
        }}
        onChange={(newValue) => {
          setHoverValue(newValue);
          setSliderVal(newValue * 100);
          setCurrentTime(newValue * duration);
          player.current.seekTo(newValue * duration);
        }}
        onChangeStart={() => {
          if (player.current) {
            player.current.pauseVideo();
            setHoverValue(null);
          }
        }}
        onChangeEnd={() => {
          if (player.current) {
            player.current.playVideo();
            setHoverValue(null);
          }
        }}
        className={`slider ${isFullScreen && 'fullscreen'}`}
      >
        <div
          style={{
            position: 'absolute',
            background: RED,
            borderRadius: 4,
            top: 0,
            bottom: 0,
            left: 0,
            zIndex: 5,
            width: `${sliderVal}%`,
          }}
        />
        {
          <div
            style={{
              position: 'absolute',
              width: 8,
              height: 8,
              background: RED,
              borderRadius: '100%',
              transform: 'scale(1)',
              transition: 'transform 0.2s',
              '&:hover': {
                transform: 'scale(1.3)',
              },
              top: 0,
              left: `${sliderVal}%`,
              zIndex: 5,
              marginTop: -2,
            }}
          />
        }

        <div
          style={{
            position: 'absolute',
            background: GRAY,
            borderRadius: 4,
            top: 0,
            bottom: 0,
            left: 0,
            zIndex: 1,
            width: `${loadedVal * 100}%`,
          }}
        />
        <TimeTooltip />
      </Slider>
    );
  };

  const TimeTooltip = () => (
    <div
      className="plyr__tooltip"
      style={{
        left: `${hoverValue * 100}%`,
        opacity: hoverValue ? 1 : 0,
      }}
    >
      <FormattedTime numSeconds={hoverValue * duration} />
    </div>
  );

  const handleFullScreen = () => {
    if (window.innerHeight === window.screen.height) {
      document.exitFullscreen();
      setIsFullScreen(false);
    } else {
      setIsFullScreen(true);
      const yWrapper = document.querySelector('.youtube-wrapper');
      var requestFullScreen =
        yWrapper.requestFullScreen ||
        yWrapper.mozRequestFullScreen ||
        yWrapper.webkitRequestFullScreen;
      if (requestFullScreen) {
        requestFullScreen.bind(yWrapper)();
      }
    }
  };

  return (
    <div className="youtube-wrapper">
      <div
        style={{ marginBottom: '-4px' }}
        onDoubleClick={handleFullScreen}
        onClick={() => {
          if (player.current) {
            if (isPlaying) {
              player.current.pauseVideo();
              setIsPlaying(false);
            } else {
              player.current.playVideo();
              setIsPlaying(true);
            }
          }
        }}
      >
        <YouTube
          className={`youtube-intro ${isFullScreen && 'fullscreen'}`}
          videoId={detailContent.url.split('/').pop()}
          opts={opts}
          onStateChange={_onStateChange}
          onError={onPlayerError}
          onReady={_onReady}
        />
      </div>
      <div className="player-control">
        <i
          onClick={() => {
            if (player.current) {
              if (isPlaying) {
                player.current.pauseVideo();
                setIsPlaying(false);
              } else {
                player.current.playVideo();
                setIsPlaying(true);
              }
            }
          }}
          className={`fa fa-${isPlaying ? 'pause' : 'play'}-circle`}
          aria-hidden="true"
        ></i>
        {ProgressBar()}
        <p className="m-0">
          <FormattedTime numSeconds={currentTime - duration} />
        </p>
        <i onClick={handleFullScreen} className="fa fa-expand" aria-hidden="true"></i>
      </div>
    </div>
  );
}

YtPlayer.propTypes = {
  detailContent: PropTypes.object,
};

export default YtPlayer;
