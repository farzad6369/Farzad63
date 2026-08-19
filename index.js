
<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
<meta name="theme-color" content="#090807">
<title>پادشاهی بازار ایران</title>

<style>
@import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;500;700;800&display=swap');

:root{
  --gold:#e8b84b;
  --gold2:#ffd978;
  --dark:#090807;
  --panel:rgba(18,15,11,.82);
  --line:rgba(232,184,75,.35);
  --red:#bd493d;
  --green:#45b879;
}

*{box-sizing:border-box}
body{
  margin:0;
  min-height:100vh;
  font-family:Vazirmatn,Tahoma,sans-serif;
  color:#fff8e8;
  background:
    linear-gradient(rgba(5,4,3,.7),rgba(5,4,3,.92)),
    url("image_gen_f7cd82a7-ac0a-4ea6-a662-87a878828b52_0.png")
    center/cover fixed;
}
button,input,select{font:inherit}
button{cursor:pointer}
.hidden{display:none!important}

.container{
  width:min(100%,620px);
  margin:auto;
  padding:16px;
}
.logo{
  text-align:center;
  color:var(--gold2);
  font-size:27px;
  font-weight:800;
  text-shadow:0 0 18px #8e5d16;
  margin:10px 0 18px;
}
.card{
  background:var(--panel);
  border:1px solid var(--line);
  border-radius:22px;
  padding:18px;
  margin-bottom:14px;
  box-shadow:0 12px 35px #0009,inset 0 0 25px #e8b84b08;
  backdrop-filter:blur(10px);
}
h2,h3{margin:4px 0 14px;color:var(--gold2)}
p{color:#d8cdb8;line-height:1.8;margin:8px 0}

input,select{
  width:100%;
  border:1px solid var(--line);
  border-radius:13px;
  padding:13px;
  margin:6px 0;
  color:#fff;
  background:#100e0b;
  outline:none;
}
input:focus,select:focus{border-color:var(--gold2)}

.btn{
  width:100%;
  border:0;
  border-radius:14px;
  padding:13px 14px;
  margin-top:8px;
  color:#211707;
