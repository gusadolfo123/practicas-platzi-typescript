class MediaPlayer {
	media: HTMLMediaElement;
	plugins: Array<any>;
	container: HTMLElement;

	constructor(config) {
		this.media = config.el;
		this.plugins = config.plugins || [];
		this.initPlayer();
		this.initPlugins();
	}

	private initPlayer() {
		this.container = document.createElement('div');
		this.container.style.position = 'relative';
		this.media.parentNode.insertBefore(this.container, this.media);
		this.container.appendChild(this.media);
	}

	// se puede usar los get and set para no pasar todo el this,
	// sino solo una parte
	private initPlugins() {
		this.plugins.forEach(plugin => {
			plugin.run(this);
		});
	}
	play() {
		this.media.play();
	}
	pause() {
		this.media.pause();
	}
	togglePlay() {
		if (this.media.paused) this.play();
		else this.pause();
	}
	mute() {
		this.media.muted = true;
	}
	unmute() {
		this.media.muted = false;
	}
	toggleSound() {
		if (this.media.muted) this.media.muted = false;
		else this.media.muted = true;
	}
}

export default MediaPlayer;
