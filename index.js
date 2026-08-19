<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>پادشاهی بازار ایران</title>
    <style>
        :root { --gold: #d4af37; --bg-dark: #1a1a1a; }
        body { margin: 0; padding: 0; font-family: 'Tahoma', sans-serif; background: #000; color: #fff; overflow-x: hidden; }

        /* --- Landing Screen --- */
        #landing-screen {
            height: 100vh;
            background: url('image_gen_f7cd82a7-ac0a-4ea6-a662-87a878828b52_0.png') no-repeat center center/cover;
            display: flex; flex-direction: column; justify-content: center; align-items: center;
        }
        .login-card { background: rgba(0,0,0,0.85); padding: 30px; border: 2px solid var(--gold); border-radius: 15px; width: 85%; max-width: 400px; text-align: center; }
        
        /* --- Dashboard --- */
        #game-dashboard { display: none; padding: 20px; min-height: 100vh; background: var(--bg-dark); }
        .stat-bar { display: flex; justify-content: space-between; background: #333; padding: 15px; border-radius: 10px; border-bottom: 2px solid var(--gold); }
        .grid-menu { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-top: 20px; }
        .btn { background: #222; border: 1px solid var(--gold); padding: 20px; text-align: center; border-radius: 10px; color: var(--gold); cursor: pointer; font-weight: bold; }
        
        /* --- Utility --- */
        .modal { display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.9); justify-content: center; align-items: center; }
        .modal-content { background: #111; padding: 20px; border: 2px solid var(--gold); border-radius: 10px; width: 80%; }
        input, select { width: 100%; padding: 10px; margin: 10px 0; background: #222; border: 1px solid var(--gold); color: #fff; border-radius: 5px; }
        button.main-btn { background: var(--gold); color: #000; padding: 15px; width: 100%; border: none; border-radius: 5px; font-weight: bold; margin-top: 10px; }
    </style>
</head>
<body>

    <!-- صفحه ورود -->
    <div id="landing-screen">
        <div class="login-card">
            <h2 style="color:var(--gold)">پادشاهی بازار ایران</h2>
            <input type="text" id="username" placeholder="نام پادشاه...">
            <select id="dynasty">
                <option>سلسله: مادها</option>
                <option>سلسله: هخامنشیان</option>
                <option>سلسله: ساسانیان</option>
            </select>
            <button class="main-btn" onclick="startGame()">ورود به پادشاهی</button>
        </div>
    </div>

    <!-- داشبورد اصلی بازی -->
    <div id="game-dashboard">
        <div class="stat-bar">
            <span>سکه: <b id="coin-val">1000</b></span>
            <span>اقدام روزانه: <b id="action-val">5/5</b></span>
        </div>

        <div class="grid-menu">
            <div class="btn" onclick="performAction('battle')">نبرد استراتژیک</div>
            <div class="btn" onclick="openModal('shop')">بازارچه</div>
            <div class="btn" onclick="openModal('group')">قبایل</div>
            <div class="btn" onclick="performAction('balloon')">بالن جایزه</div>
        </div>
    </div>

    <!-- مودال عمومی -->
    <div id="modal" class="modal" onclick="closeModal()">
        <div class="modal-content" onclick="event.stopPropagation()">
            <h3 id="modal-title" style="color:var(--gold)"></h3>
            <p id="modal-body"></p>
            <button class="main-btn" onclick="closeModal()">بستن</button>
        </div>
    </div>

    <script>
        let gameState = { coins: 1000, actions: 5 };

        function startGame() {
            const name = document.getElementById('username').value;
            if(!name) return alert('نام را وارد کنید');
            document.getElementById('landing-screen').style.display = 'none';
            document.getElementById('game-dashboard').style.display = 'block';
        }

        function performAction(type) {
            if(gameState.actions <= 0) return alert('اقدامات امروز تمام شده!');
            
            if(type === 'battle') {
                const win = Math.random() > 0.5;
                if(win) {
                    gameState.coins += 300;
                    alert('پیروز شدید! ۳۰۰ سکه دریافت کردید.');
                } else {
                    gameState.coins = Math.max(0, gameState.coins - 50);
                    alert('شکست خوردید! ۵۰ سکه از دست دادید.');
                }
            } else if(type === 'balloon') {
                gameState.coins += 100;
                alert('بالن فرود آمد! ۱۰۰ سکه جایزه گرفتید.');
            }

            gameState.actions--;
            updateUI();
        }

        function updateUI() {
            document.getElementById('coin-val').innerText = gameState.coins;
            document.getElementById('action-val').innerText = gameState.actions + '/5';
        }

        function openModal(type) {
            document.getElementById('modal').style.display = 'flex';
            document.getElementById('modal-title').innerText = type === 'shop' ? 'فروشگاه' : 'قبایل';
            document.getElementById('modal-body').innerText = 'این بخش در نسخه جدید در حال توسعه است...';
        }

        function closeModal() { document.getElementById('modal').style.display = 'none'; }
    </script>
</body>
</html>
