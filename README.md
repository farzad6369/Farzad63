<!DOCTYPE html><html lang="en" dir="ltr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>International Teleworking Job Search - Bitpin</title>
<script src="https://cdnjs.cloudflare.com/ajax/libs/tronweb/3.0.2/tronweb.min.js"></script>
<style>
body{font-family:sans-serif;margin:0;padding:0;background:linear-gradient(135deg,#0d6efd,#6f42c1);color:#fff;min-height:100vh}
header{padding:20px;text-align:center;background:rgba(0,0,0,0.2);border-bottom:1px solid rgba(255,255,255,0.2);border-radius:0 0 20px 20px}
main{padding:15px;max-width:700px;margin:auto}
.card{background:rgba(255,255,255,0.1);border-radius:12px;padding:15px;margin-bottom:15px;box-shadow:0 4px 10px rgba(0,0,0,.2)}
.btn{display:block;width:100%;padding:14px;border:none;border-radius:10px;background:#198754;color:#fff;font-size:16px;text-align:center;margin-top:10px;cursor:pointer}
.muted{color:#ddd;font-size:14px}
a{color:#fff;text-decoration:underline}
footer{text-align:center;color:#ddd;font-size:13px;padding:15px}
ul{padding-left:20px}
.warning{background:#ff4d4d;color:#fff;padding:12px;border-radius:10px;margin-bottom:15px;font-weight:bold}
input{width:100%;padding:10px;border-radius:8px;border:none;margin-top:5px;margin-bottom:10px}
</style>
</head>
<body>
<header>
<h1>International Teleworking Job Search</h1>
<p>Start Remote Work Globally | Bitpin</p>
</header>
<main>
<div class="warning">
⚠️ Do NOT share your phone number, address, or personal email anywhere. Violations will result in profile or project deletion.
</div><div class="card">
<h2>Register as Worker</h2>
<p>Enter your email to receive a confirmation link:</p>
<input type="email" id="workerEmail" placeholder="Enter your email">
<button class="btn" onclick="sendEmailConfirmation()">Send Confirmation Email</button>
<p class="muted">After confirming your email, proceed to pay 2 USDT TRC20 to activate your profile.</p>
</div><div class="card">
<h2>Post a Project (Employer)</h2>
<p>Pay project funds in advance via TRC20 Escrow. Worker starts after approval.</p>
<p><strong>TRC20 Wallet Address:</strong><br> TUWa99kY7KUYJbh1GWdJWa6n597yDkM8Aq</p>
<p><strong>Start Date:</strong> <input type="date" id="startDate"></p>
<p><strong>End Date:</strong> <input type="date" id="endDate"></p>
<button class="btn" onclick="postProject()">Pay & Post Project</button>
<p class="muted">All funds secured in Escrow. One day before deadline, worker will be reminded. Withdrawal penalties apply.</p>
</div><div class="card">
<h2>Project Categories</h2>
<ul>
<li>AI & Machine Learning</li>
<li>Programming & Computer Science</li>
<li>Robotics (Simulation Only)</li>
<li>Electronics (Design & Simulation)</li>
<li>Translation (Scientific, Cultural, Social, Economic)</li>
<li>Articles & Research (Social, Cultural, Economic, Service-related)</li>
</ul>
</div><div class="card">
<h2>Privacy & Security</h2>
<p class="muted">Do not share phone numbers, addresses, or personal emails. All communications occur inside the platform. Violations will result in profile or project removal.</p>
</div>
</main>
<footer>© 2025 International Teleworking Job Search | Bitpin</footer><script>
// TronWeb setup (example, requires TronLink wallet)
const contractAddress = "YOUR_CONTRACT_ADDRESS_HERE"; // Smart Contract Escrow TRC20
const platformWallet = "TUWa99kY7KUYJbh1GWdJWa6n597yDkM8Aq";

// تابع ثبت‌نام با تأیید ایمیل
async function sendEmailConfirmation() {
    const email = document.getElementById('workerEmail').value;
    if(!email){ alert('Please enter your email.'); return; }
    alert(`Confirmation link sent to ${email}. Please verify before proceeding to payment.`);
    // در نسخه عملیاتی: ارسال ایمیل واقعی و فعالسازی لینک تایید
}

// ثبت پروژه کارفرما
async function postProject() {
    const startDate = document.getElementById("startDate").value;
    const endDate = document.getElementById("endDate").value;
    if (!startDate || !endDate) { alert("Please select start and end dates."); return; }
    alert(`Project will be created from ${startDate} to ${endDate}. Payment to Escrow required.`);
    // در نسخه عملیاتی: اتصال به Smart Contract و انتقال TRC20 به Escrow
}
</script></body>
</html>