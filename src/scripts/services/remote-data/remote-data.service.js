import Rx from 'rx-dom';

export default class RemoteDataService {
	constructor() {
		this.messages$ = this.messages();
		this.connectionState$ = this.states();
	}

	messages() {
		return Rx.Observable.interval(1000)
			.flatMap(() => Rx.DOM.getJSON('http://localhost:3000'))
			.retryWhen(errors => errors.flatMap((error) => {
				this._connectionStateObserver.next('Retrying');

				return navigator.onLine ? Rx.Observable.timer(3000) :
						Rx.Observable.fromEvent(window, 'online').take(1)
				}
			))
			.share();
	}

	states() {
		return Rx.Observable.create(observer => this._connectionStateObserver = observer).share();
	}
}
