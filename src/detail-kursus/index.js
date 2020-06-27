import React, { useState, useEffect, useRef } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import YouTube from 'react-youtube';
import { Slider, FormattedTime } from 'react-player-controls';
import Header from '../shared/header';
import Footer from '../shared/footer';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { kursusActions } from '../redux/reducers/kursus';
import { kursusSayaAction } from '../redux/reducers/kursus-saya';
import { isAuthenticated } from '../utils/auth';
import './detail-kursus.css';

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

const mapStateToProps = (state) => ({
  kursus: state.kursus.kursus,
  contents: state.kursus.contents,
  loading: state.kursus.loading,
});

const mapActionToProps = (dispatch) =>
  bindActionCreators(
    {
      reqContents: kursusActions.reqContents,
      subscribe: kursusSayaAction.subscribe,
    },
    dispatch
  );

function DetailKursus({ kursus, reqContents, contents, subscribe, loading }) {
  const { kursusId } = useParams();
  const [detailKursus, setDetailKursus] = useState(null);
  const [detailContent, setDetailContent] = useState(null);
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
    reqContents({ course_id: parseInt(kursusId) });
  }, [reqContents, kursusId]);

  useEffect(() => {
    if (!loading && kursus.length) {
      const [detail] = kursus.filter((val) => val.id === parseInt(kursusId));
      setDetailKursus(detail);
    }

    if (!loading && contents.length) {
      const details = contents.filter((val) => val.course_id === parseInt(kursusId));
      setDetailContent(details[0]);
    }
  }, [kursus, kursusId, contents, loading]);

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

  function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  }

  function handleSubscribe() {
    const isAuth = isAuthenticated();
    if (isAuth) {
      subscribe({
        kursus_id: detailKursus.id,
      });
    } else {
      alert('silahkan login untuk mengikuti kursus');
    }
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
          player.current.pauseVideo();
        }}
        onChangeEnd={() => {
          player.current.playVideo();
          setHoverValue(null);
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

  return detailKursus && detailContent ? (
    <div className="detail-kursus">
      <Header />
      <div className="title">
        <h1>
          <strong>{detailKursus.title}</strong>
        </h1>
        <span> Taruh deskirpsi kursus di sini</span>
      </div>

      <div className="container mb-5">
        <div className="row">
          <div className="col-lg-8">
            <div className="youtube-wrapper">
              <div
                onDoubleClick={handleFullScreen}
                onClick={() => {
                  if (isPlaying) {
                    player.current.pauseVideo();
                    setIsPlaying(false);
                  } else {
                    player.current.playVideo();
                    setIsPlaying(true);
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
                    if (isPlaying) {
                      player.current.pauseVideo();
                      setIsPlaying(false);
                    } else {
                      player.current.playVideo();
                      setIsPlaying(true);
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
            <h3 className="mb-4">
              <strong>Tentang Kursus</strong>
            </h3>
            <p className="mb-4">
              Your content goes here. Edit or remove this text inline or in the module Content
              settings. You can also style every aspect of this content in the module Design
              settings and even apply custom CSS to this text in the module Advanced settings.
            </p>
          </div>

          <div className="col-lg-4">
            <div
              style={{
                paddingLeft: 40,
              }}
            >
              <p>Kategori Kursus</p>
              <h2>
                Rp{' '}
                {formatNumber(
                  detailKursus.promo_price ? detailKursus.promo_price : detailKursus.price
                )}
              </h2>
              <p>sekali bayar untuk selamanya</p>
              <p className="mt-4 mb-1">Kursus ini mencakup</p>
              <ul className="pl-3">
                <li>Video atas permintaan 38 mnt</li>
                <li>2 sumber daya yang dapat diunduh</li>
                <li>Akses penuh seumur hidup</li>
                <li>Akses di perangkat seluler dan TV</li>
                <li>Sertifikat Penyelesaian</li>
              </ul>
              <button onClick={handleSubscribe} className="subscribe-Kursus">
                Ikuti Kursus
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  ) : (
    <div></div>
  );
}

DetailKursus.propTypes = {
  kursus: PropTypes.array,
  contents: PropTypes.array,
  subscribe: PropTypes.func,
  reqContents: PropTypes.func,
  loading: PropTypes.bool,
};

export default connect(mapStateToProps, mapActionToProps)(DetailKursus);
