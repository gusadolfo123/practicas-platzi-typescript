import MediaPlayer from './mediaPlayer';
import AutoPlay from './plugins/AutoPlay';
import AutoPause from './plugins/AutoPause';
import AdsPlugin from './plugins/Ads/index';

const video = document.querySelector('video');
const player = new MediaPlayer({
	el: video,
	plugins: [new AutoPlay(), new AutoPause(), new AdsPlugin()],
});

const buttonPlay: HTMLElement = document.querySelector('.button-play');
buttonPlay.onclick = () => player.togglePlay();

const buttonSound: HTMLElement = document.querySelector('.button-sound');
buttonSound.onclick = () => player.toggleSound();

if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('/sw.ts').catch(error => console.log(error));
}
