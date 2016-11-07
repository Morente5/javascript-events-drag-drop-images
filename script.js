class MovingImg {
	
	constructor(elementId, parent, options) {
		this.selected = false;

		this.element = document.getElementById(elementId);
		this.element.style.position = 'absolute';
		this.parent = parent;
		if (!!options) {
			if (!!options.left) {
				this.element.style.left = options.left + 'px';
			}
			if (!!options.top) {
				this.element.style.top = options.top + 'px';
			}
		}

		this.createEventListeners();
	}

	selectImg() {
		this.selected = true;
	}

	unselectImg() {
		this.selected = false;
	}

	moveImg(event) {
		if (!!this.selected) {
			this.element.style.left = (event.clientX - this.offset.x) + 'px';
			this.element.style.top = (event.clientY - this.offset.y) + 'px';
		}
	}

	createEventListeners(){
		var that = this;
		this.element.addEventListener('mousedown', function(event) {
			that.offset = {x: event.offsetX, y: event.offsetY};
			that.selectImg();
		});

		this.element.addEventListener('mouseup', function(event) {
			that.unselectImg();
		});

		this.parent.addEventListener('mousemove', function(event) {
			event.preventDefault();
			that.moveImg(event);
		});
	}
}
 
window.onload = function() {
	new MovingImg('image1', window);
	new MovingImg('image2', window, {'left': 700});
	new MovingImg('image3', window, {'left':200,'top': 500});
};
