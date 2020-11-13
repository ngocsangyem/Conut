export default class Draggable {
	originX;
	originY;
	clientX;
	clientY;
	startTime;
	dragging = false;
	clicked = false;
	data;
	image;
	imageSource;
	imageX;
	imageY;
	currentTarget;

	constructor(el, options) {
		this.el = el;
		this.options = options;
		this.dragThreshold = options.dragThreshold || 5;
		this.dropRange = options.dropRange || 50;
		this.dropRangeSquared = this.dropRange * this.dropRange;

		el.addEventListener('touchstart', (event) => {
			this.start(event);
		});
		el.addEventListener('mousedown', (event) => {
			this.start(event);
		});

		el.addEventListener(
			'click',
			(e) => {
				if (this.dragging || this.clicked) {
					e.preventDefault();
					e.stopImmediatePropagation();
				}
			},
			true
		);
	}

	start(e) {
		if (this.el.classList.contains('_nodrag')) {
			return;
		}

		if (e.type === 'mousedown' && e.button !== 0) {
			return;
		}
		if (e.touches && e.touches.length > 1) {
			return;
		}

		e.preventDefault();

		var p = this.getPositionHost(e);
		this.clientX = this.originX = p.clientX || p.pageX;
		this.clientY = this.originY = p.clientY || p.pageY;
		this.startTime = Date.now();

		this.startListening();
	}

	move(e) {
		e.preventDefault();

		var p = this.getPositionHost(e);
		this.clientX = p.clientX || p.pageX;
		this.clientY = p.clientY || p.pageY;

		if (this.dragging) {
			this.dispatchDrag();
			this.dispatchTarget();
			return;
		}

		var deltaX = this.clientX - this.originX;
		var deltaY = this.clientY - this.originY;

		if (
			Math.abs(deltaX) < this.dragThreshold &&
			Math.abs(deltaY) < this.dragThreshold
		) {
			return;
		}

		// prevent unintentional dragging on touch devices
		if (e.touches && Date.now() - this.startTime < 50) {
			this.stopListening();
			return;
		}

		this.dragging = true;
		this.data = {};

		this.dispatchStart();
		this.dispatchDrag();
		this.dispatchTarget();
		this.dispatchOverContinuously();
	}

	end(e) {
		e.preventDefault();

		if (!this.dragging) {
			e.target.click();
			this.clicked = true;
		}

		this.stopListening();

		requestAnimationFrame(() => {
			this.clicked = false;

			if (this.dragging) {
				this.dispatchTarget();
				this.dispatchEnd();
			}
		});
	}

	startListening() {
		this.el.addEventListener('touchmove', (event) => {
			this.move(event);
		});
		this.el.addEventListener('touchend', (event) => {
			this.end(event);
		});
		window.addEventListener('mousemove', (event) => {
			this.move(event);
		});
		window.addEventListener('mouseup', (event) => {
			this.end(event);
		});
	}

	stopListening() {
		this.el.removeEventListener('touchmove', (event) => {
			this.move(event);
		});
		this.el.removeEventListener('touchend', (event) => {
			this.end(event);
		});
		window.removeEventListener('mousemove', (event) => {
			this.move(event);
		});
		window.removeEventListener('mouseup', (event) => {
			this.end(event);
		});
	}

	dispatchStart() {
		this.setImage(this.el);

		this.el.dispatchEvent(
			new CustomEvent('draggableStart', {
				detail: this.buildDetail,
				bubbles: true,
			})
		);
	}

	dispatchDrag() {
		this.image.dispatchEvent(
			new CustomEvent('draggableDrag', {
				detail: this.buildDetail,
				bubbles: true,
			})
		);
	}

	dispatchTarget() {
		if (!this.dragging) return;

		var nextTarget = this.getTarget();
		console.log('Draggable -> dispatchTarget -> nextTarget', nextTarget);

		if (nextTarget === this.currentTarget) return;

		if (this.currentTarget) {
			this.currentTarget.addEventListener('draggableLeave', (event) => {
				this.removeDropClassOnce(event);
			});
			this.currentTarget.dispatchEvent(
				new CustomEvent('draggableLeave', {
					detail: this.buildDetail,
					bubbles: true,
				})
			);
		}

		if (nextTarget) {
			nextTarget.addEventListener('draggableEnter', (event) => {
				this.addDropClassOnce(event);
			});
			nextTarget.dispatchEvent(
				new CustomEvent('draggableEnter', {
					detail: this.buildDetail,
					bubbles: true,
				})
			);
		}

		this.currentTarget = nextTarget;
		console.log(
			'Draggable -> dispatchTarget -> this.currentTarget',
			this.currentTarget
		);
	}

	dispatchOverContinuously() {
		if (!this.dragging) return;

		this.dispatchOver();
		setTimeout(this.dispatchOver, 50);
	}

	dispatchOver() {
		if (this.currentTarget) {
			this.currentTarget.dispatchEvent(
				new CustomEvent('draggableOver', {
					detail: this.buildDetail,
					bubbles: true,
				})
			);
		}

		setTimeout(this.dispatchOver, 50);
	}

	dispatchEnd() {
		if (this.currentTarget) {
			this.currentTarget.addEventListener('draggableDrop', (event) => {
				this.cleanUpOnce(event);
			});
			this.currentTarget.dispatchEvent(
				new CustomEvent('draggableDrop', {
					detail: this.buildDetail,
					bubbles: true,
				})
			);
		} else {
			this.image.dispatchEvent(
				new CustomEvent('draggableCancel', {
					detail: this.buildDetail,
					bubbles: true,
				})
			);
		}
	}

	buildDetail() {
		const detail = {
			el: this.el,
			data: this.data,
			image: this.image,
			imageSource: this.imageSource,
			originX: this.originX,
			originY: this.originY,
			clientX: this.clientX,
			clientY: this.clientY,
			imageX: this.imageX,
			imageY: this.imageY,
			setImage: (source) => {
				this.setImage(source);
				detail.image = this.image;
				console.log('Draggable -> buildDetail -> detail', detail);
			},
		};

		return detail;
	}

	setImage(source) {
		if (this.imageSource === source) return;
		this.imageSource = source;

		this.removeImage();

		this.image = this.imageSource.cloneNode(true);
		this.image.style.position = 'fixed';
		this.image.style.left = '0';
		this.image.style.top = '0';
		this.image.style.width = this.imageSource.offsetWidth + 'px';
		this.image.style.height = this.imageSource.offsetHeight + 'px';
		this.image.style.margin = '0';
		this.image.style.zIndex = 9999;
		this.image.classList.add('-dragging');

		var rect = source.getBoundingClientRect();
		this.imageX = this.originX - rect.left;
		this.imageY = this.originY - rect.top;

		this.image.addEventListener('draggableDrag', (e) => {
			var x = e.detail.clientX - e.detail.imageX;
			var y = e.detail.clientY - e.detail.imageY;
			this.image.style.transition = 'none';
			this.image.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
		});

		this.image.addEventListener('draggableCancel', () => {
			this.cleanUp();
		});

		document.body.appendChild(this.image);
	}

	addDropClassOnce(e) {
		e.target.removeEventListener(e.type, () => {
			this.addDropClassOnce(e);
		});
		e.target.classList.add('-drop');
	}

	removeDropClassOnce(e) {
		e.target.removeEventListener(e.type, () => {
			this.addDropClassOnce(e);
		});
		e.target.classList.remove('-drop');
	}

	cleanUpOnce(e) {
		e.target.removeEventListener(e.type, () => {
			this.cleanUpOnce(e);
		});
		this.cleanUp();
	}

	cleanUp() {
		if (this.currentTarget) {
			this.currentTarget.classList.remove('-drop');
		}

		this.removeImage();

		this.data = null;
		this.image = null;
		this.imageSource = null;
		this.currentTarget = null;
	}

	removeImage() {
		if (this.image && this.image.parentNode) {
			this.image.parentNode.removeChild(this.image);
		}
	}

	getTarget() {
		var candidates = [];

		document.querySelectorAll(this.options.dropSelector).forEach((el) => {
			var rect = el.getBoundingClientRect();
			var distanceSquared = this.pointDistanceToRectSquared(
				this.clientX,
				this.clientY,
				rect
			);

			if (distanceSquared > this.dropRangeSquared) return;

			candidates.push({
				el: this.el,
				distance2: distanceSquared,
			});
		});

		candidates.sort(function (a, b) {
			if (a.distance2 === 0 && b.distance2 === 0) {
				// in this case, the client position is inside both rectangles
				// if A contains B, B is the correct target and vice versa
				// TODO sort by z-index somehow?
				return a.el.contains(b.el) ? -1 : b.el.contains(a.el) ? 1 : 0;
			}
			
			// sort by distance, ascending
			return a.distance2 - b.distance2;
		});

		return candidates.length > 0 ? candidates[0].el : null;
	}

	pointDistanceToRectSquared(x, y, rect) {
		var dx =
			x < rect.left ? x - rect.left : x > rect.right ? x - rect.right : 0;
		var dy =
			y < rect.top ? y - rect.top : y > rect.bottom ? y - rect.bottom : 0;

		return dx * dx + dy * dy;
	}

	getPositionHost(e) {
		if (e.targetTouches && e.targetTouches.length > 0) {
			return e.targetTouches[0];
		}

		if (e.changedTouches && e.changedTouches.length > 0) {
			return e.changedTouches[0];
		}

		return e;
	}
}
