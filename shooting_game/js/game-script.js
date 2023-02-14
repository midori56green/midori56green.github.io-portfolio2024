// ランダムな整数の生成
function randomNum(min, max) {
	return Math.floor(Math.random()*(min - max) + max);
};


$(function() {
	
	//App
	const App = $('#game-app');
	const app_width = App.width();
	const app_height= App.height();
	const app_top = ($(window).height() - app_height) / 2;
	const app_left = (window.innerWidth - app_width) / 2;
	
	//Player
	const Player = $('#player');
	const player_width = Player.width();
	const player_height = Player.height();

	//Bullet
	const bullet_size = 20;
	let bullet_array = [];
	let bullet_no = -1;
	
	//Enemy
	let enemy_array = [];
	let enemy_no = 0;

	//Others
	let score = 0;
	let time = 0;
	const max_life = 1;
	let player_life = max_life;
	let timeset = 0;
	let enemy_interval = 300;
	let enemy_max = 0;
	let speed = 3;
	
	//値の初期化
	function ResertData() {
		player_life = max_life;
		bullet_array = [];
		bullet_no = -1;
		enemy_array = [];
		enemy_no = 0;
		score = 0;
		time = 0;
		timeset = 0;
		
		$('.bullet').remove();
		$('.enemy').remove();
		Player.removeClass('playing');
		$('.score-num').html(0);
		$('.time-num').html(0);
		
		$('.start-btn_wrap').css('display','none');
		App.removeClass('gameover');
		App.addClass('playing');
		Player.addClass('playing');
	}

	//プレイヤーの移動処理
	function MovePlayer(e) {
		// ライフが0だったら処理しない
		if(player_life <= 0) {
			return;
		}

		// const x = e.offsetX - (player_width / 2);
		// const y = e.offsetY - (player_height / 2);
		const x = e.clientX - app_left - (player_width / 2);
		const y = e.clientY - app_top - (player_height / 2);
		Player.css('top', y + 'px');
		Player.css('left', x + 'px');
	}

	//Bullet生成
	function CreateBullet() {
		//ゲームが実行中だったら
		if(App.hasClass('playing')) {
			
			//player_life が0だったら処理しない
			if(player_life <= 0) {
				return;
			}

			//startボタンを押した瞬間に弾を発射しないよう制御
			if(bullet_no < 0) {
				bullet_no++;
				return;
			}else if(bullet_no > enemy_max) {
				bullet_no = -1;
			}

			const player_x = Player.position().left;
			const player_y = Player.position().top;
			const x = player_x + player_width;
			const y = player_y + player_height - bullet_size;
			const style = `top: ${y}px; left: ${x}px;`;
			const code = `<div id="bullet-${bullet_no}" class="bullet" style="${style}"></div>`;

			App.append(code);
			bullet_array.push(bullet_no);
			bullet_no++;
		}else {
			return;
		}
	}
	
	//Bulletの画面外処理
	function BulletFadeOut() {
		let length = bullet_array.length - 1;	//最初にstart-btnでクリックした分を省くため -1
		if(length < 0) {
			return;
		}

		let i = 0;
		for(i = 0; i <= length; i++) {
			const array = bullet_array[i];
			const Bullet = $('#bullet-' + array);
			const bullet_right = Number(Bullet.css('left').slice(0,-2));
			
			if(bullet_right > app_width) {
				bullet_array.splice(i,1);
				Bullet.remove();
				i--;
				length--;
			}
		}
	}

	//Enemy生成
	function CreateEnemy() {
		// Enemy 固有番号の割り振り
		let enemy_no = 0;
		if(enemy_array.length > 0) {
			enemy_no = Number(Math.max(...enemy_array)) + 1;
		}

		const width = randomNum(50,100);
		const height = randomNum(50,100);
		const y = randomNum(0,app_height - height);
		const x = width + app_width;
		const hp = randomNum(1,4);
		const lv = hp;
		const  move = randomNum(1,4);
		const style = `top: ${y}px; left: ${x}px; width: ${width}px; height: ${height}px`;
		const code = `<div id="enemy-${enemy_no}" class="enemy" style="${style}" data-move="${move}" data-hp="${hp}" data-lv="${lv}"></div>`
		App.append(code);
		enemy_array.push(enemy_no);
	}

	//Enemyの画面外処理
	function EnemyFadeOut() {
		// Enemyの数が0だったら処理しない
		let length = enemy_array.length;
		if(length <= 0) {
			return;
		}

		for(let i = 0; i < length; i++) {
			const array = enemy_array[i];
			const Enemy = $('#enemy-' + array);
			const enemy_left = Number(Enemy.css('left').slice(0,-2)) + Enemy.width();
			
			if(enemy_left < 0) {
				const enemy = $('#enemy-' + array);
				const enemy_width = enemy.width();
				const enemy_height = enemy.height();
				enemy.css({
					'top': randomNum(0,app_height - enemy_height),
					'left': enemy_width + app_width,
				});
			}
		}
	}

	//Bullet と Enemy の当たり判定
	function BulletEnemy() {
		let bullet_len = bullet_array.length;
		let enemy_len = enemy_array.length;

		//Bullet もしくは Enem が0だったら判定をしない
		if(bullet_len <= 0 || enemy_len <= 0) {
			return;
		}

		let n = 0;
		let m = 0;
		// bullet の配列分ループ
		for(n = 0; n < bullet_len; n++) {
			const bullet_num = bullet_array[n];
			const Bullet = $('#bullet-' + bullet_num);

			// bullet の座標取得
			const bullet_left = Math.floor(Bullet.position().left);
			const bullet_top = Math.floor(Bullet.position().top);

			// enemy の配列分ループ
			for(m = 0; m < enemy_len; m++) {
				const enemy_num = enemy_array[m];
				const Enemy = $('#enemy-' + enemy_num);
				const enemy_width = Enemy.width();
				const enemy_height = Enemy.height();
				const enemy_left = Math.floor(Enemy.position().left);
				const enemy_top = Math.floor(Enemy.position().top);

				if(
					bullet_top + bullet_size >= enemy_top &&	//Bullet_bottom & Enemy_top
					bullet_top <= enemy_top + enemy_height &&	//Bullet_top & Enemy_bottom
					bullet_left + bullet_size >= enemy_left &&	//Bullet_right & Enemy_left
					bullet_left <= enemy_left + enemy_width		//Bullet_left & Enemy_right
				) {
					let hp = Enemy.attr('data-hp');
					hp--;
					Enemy.attr('data-hp',hp);

					if(hp <= 0) {
						enemy_array.splice(m,1);

						//爆発エフェクトの生成
						const x = enemy_left;
						const y = enemy_top - enemy_height;
						const code = `<div style="top: ${y}px;left: ${x}px" class="break"></div>`;
						App.append(code);
						//爆発アニメーションの終了
						$('.break').on('animationend webkitAnimationEnd', function() {
							$(this).remove();
						});

						Enemy.remove();
						m--;
						enemy_len--;
						
						const lv = Enemy.attr('data-lv');
						score+=10 * lv;
					}

					bullet_array.splice(n,1);
					Bullet.remove();
					n--;
					bullet_len--;
				}
			}
		}
	}

	//Enemy と Player の当たり判定
	function EnemyPlayer() {
		let enemy_len = enemy_array.length;
		
		//Enemy が存在しなかったら処理をパス
		if(enemy_len <= 0) {
			return;
		}
		
		let i = 0;
		for(i = 0; i < enemy_len; i++) {
			const enemy_num = enemy_array[i];
			const Enemy = $('#enemy-' + enemy_num);
			const enemy_width = Enemy.width();
			const enemy_height = Enemy.height();
			const enemy_left = Number(Enemy.css('left').slice(0,-2));
			const enemy_top = Number(Enemy.css('top').slice(0,-2));
			
			const player_left = Number(Player.css('left').slice(0,-2));
			const player_top = Number(Player.css('top').slice(0,-2));

			if(
				enemy_top <= player_top + player_height &&	//Enemy_top & Player_bottom
				enemy_top + enemy_height >= player_top &&	//Enemy_bottom & Player_top
				enemy_left <= player_left + player_width &&	//Enemy_left & Player_right
				enemy_left + enemy_width >= player_left		//Enemy_right & Player_left
			) {
				player_life--;

				//爆発エフェクトの生成
				const x = player_left;
				const y = player_top - player_height;
				const code = `<div style="top: ${y}px;left: ${x}px" class="break"></div>`;
				App.append(code);

				//爆発アニメーションの終了
				$('.break').on('animationend webkitAnimationEnd', function() {
					$(this).remove();
				});
				
				Player.css('display','none');
			}
		}
	}


	//ユーザー操作
	$('.open').on('click',function(e) {
		e.preventDefault();
		$('.start-btn_wrap').css('display','block');
		$('body').addClass('playing');
		$('#overlay').fadeIn(300);
		player_life = max_life;
		$('.score-num').html(0);
		$('.time-num').html(0);
	});

	$('.retry').on('click',function(e) {
		e.preventDefault();
		App.removeClass('gameover');
		$('.start-btn_wrap').css('display','block');
	});

	//ゲーム開始
	$('.start').on('click',function(e) {
		e.preventDefault();
		
		Player.css('display','block');
		
		//値のリセット
		ResertData();
		const game_lv = $(this).attr('data-lv')
		if(game_lv == 1) {
			speed = 2;
			enemy_interval = 500;
			enemy_max = 7;
		}else if (game_lv == 2) {
			speed = 2.5;
			enemy_interval = 400;
			enemy_max = 10;
		}else if (game_lv == 3) {
			speed = 3;
			enemy_interval = 200;
			enemy_max = 13;
		}

		//time のカウント
		let TimeInterval = setInterval(function() {
			time++;
			timeset++;
			$('.time-num').html(time);
		},1000);
		
		//Enemy生成
		let EnemyInterval = setInterval(function(enemy_interval) {
			if(enemy_array.length < enemy_max)
			CreateEnemy();
		},enemy_interval);
		
		//ゲームオーバー
		let GameInterval = setInterval(function() {
			if(player_life <= 0) {
				clearInterval(EnemyInterval);
				clearInterval(TimeInterval);
				clearInterval(GameInterval);
				
				if( App.hasClass('playing') ) {
					App.removeClass('playing');
					App.addClass('gameover');
					
					$('.lv-result').html(game_lv);
					$('.game-over_result.score-result').html(score);
					$('.game-over_result.time-result').html(time);
				}
			}
			
			$('.bullet').css('left','+=8px');
			$('.enemy').css('left','-='+ speed +'px');
			$('.enemy[data-move="2"]').css('left','-=1px');
			BulletFadeOut();
			EnemyFadeOut();
			BulletEnemy();
			EnemyPlayer();
			$('.score-num').html(score);
		},10);
		
		
		//移動イベント
			MovePlayer(e);	//クリックする前から座標を取得するため
		App.mousemove(function(e) {
			MovePlayer(e);
		});
		
	});

	//弾発射イベント
	App.on('click', function() {
		CreateBullet();
	});
	
	
	$('.end').on('click', function(e) {
		e.preventDefault();

		//値のリセット
		ResertData();
		App.removeClass('playing');
		$('body').removeClass('playing');
		$('.start-btn_wrap').css('display','block');
		$('#overlay').fadeOut(300);
	});

});