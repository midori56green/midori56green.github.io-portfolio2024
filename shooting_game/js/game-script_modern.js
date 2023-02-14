const gameScreen = $('#app');

//マウスクラス
class MouseClass {
	constructor() {
		this.click = false;
		gameScreen.mousemove(e => {
			this.x = e.clientX;
			this.y = e.clientY;
		});
		gameScreen.mousedown(() => this.click = true);
		gameScreen.mouseup(() => this.click = false);
	}
}

//キャラクタークラス
let character_no = 1;
class CharacterClass {
	constructor(class_name, color) {
		this.id_name = `character${character_no}`;
		this.id_show = true;
		character_no++;
		gameScreen.append(`<div id="${this.id_name}" class="${class_name}"></div>`);
		this.$.css({
			position: 'absolute',
			color: color
		});
	}
	
	get $() { return $('#' + this.id_name); }
	get x() { return this.$.offset().left; }
	get y() { return this.$.offset().top; }
	get width() { return this.$.width(); }
	get height() { return this.$.height(); }
	
	set x(x) {
		this.$.offset({ top: this.y, left: x });
	}
	set y(y) {
		this.$.offset({ top: y, left: this.x });
	}
	show() {
		this.$.css('display','visibility');
		this.id_show = true;
	}
	hide() {
		this.$.css('visibility','hide');
		this.id_show = false;
	}
	hit(target) {
		if(
			this.x + this.width >= target.x &&
			this.x < target.x + target.width &&
			this.y + this.height >= target.y &&
			this.y < target.y + target.height
		) {
			return true;
		}
		return false;
	}
}

//弾幕クラス
class BulletClass extends CharacterClass {
	move() {
		if(this.is_show) {
			this.x += 12;
			if(this.x > 800) {
				this.hide();
			}
		}
	}
}

//プレイヤークラス
class PlayerClass extends CharacterClass {
	constructor(class_name, color) {
		super(class_name, color);
		this.mouse = new MouseClass();
		this.bullet = new BulletClass('shot', '#00f');
		this.bullet.hide();
	}
	
	move() {
		this.x = this.mouse.x - this.width / 2;
		this.y = this.mouse.y - this.height / 2;
		if(this.mouse.click && !this.bullet.id_show) {
			this.bullet.x = this.mouse.x - this.bullet.width / 2;
			this.bullet.y = this.mouse.y - this.bullet.height / 2;
			this.bullet.show();
			this.mouse.click = false;
		}
		this.bullet.move();
	}
}

//敵クラス
class EnemyClass extends CharacterClass {
	move() {
		this.x -= 6;
		if(this.x < -100) {
			this.x = 800;
			this.y = Math.random() * (400 - this.height);
		}
	}
}
	
	
$(() => {
	const Player = new PlayerClass('player','#000');
	const Enemy = new EnemyClass('enemy','#f00');
	Enemy.x = -100;

	$(document).on('click','button',function() {
		setInterval(() => {
			Player.move();
		},16);
	});
});