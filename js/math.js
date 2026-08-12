// Global variables for game state and scoring
let currentCorrectAnswer = null;
let lastCorrectAnswer = null; // Tracks previous answer to avoid consecutive duplicates
let currentTopic = '';
let currentMoneyStage = 1;
let currentPaidTotal = 0;
let score = 0;
let streak = 0;

// Initializes the Math Lab workspace
function initMathLab() {
    const workspace = document.getElementById("lesson-workspace");
    
    workspace.innerHTML = `
        <div id="math-topic-selector">
            <p class="section-subtitle">Select a skill to practice:</p>
            <div class="topic-grid">
                <button class="topic-card" onclick="loadMathActivity('money')">
                    <span class="topic-icon">🪙 💵</span>
                    <h3>Counting & Money</h3>
                    <p>Coins, bills, & making change</p>
                </button>
                <button class="topic-card" onclick="loadMathActivity('addition')">
                    <span class="topic-icon">➕ ➖</span>
                    <h3>Addition & Subtraction</h3>
                    <p>Basic facts & visual counting</p>
                </button>
                <button class="topic-card" onclick="loadMathActivity('multiplication')">
                    <span class="topic-icon">✖️ ➗</span>
                    <h3>Multiplication & Division</h3>
                    <p>Times tables & division facts</p>
                </button>
                <button class="topic-card" onclick="loadMathActivity('fractions')">
                    <span class="topic-icon">🍰 🍕</span>
                    <h3>Fractions & Decimals</h3>
                    <p>Visual slices & place value</p>
                </button>
            </div>
        </div>

        <div id="math-stage-selector" class="hidden"></div>
        <div id="math-game-area" class="game-area hidden"></div>
    `;
}

// Handles switching topics or showing money sub-stages
function loadMathActivity(topic) {
    currentTopic = topic;

    if (topic === 'money') {
        showMoneyStageSelector();
    } else {
        // Hides topic selector so game area displays alone on screen
        document.getElementById("math-topic-selector").classList.add("hidden");
        document.getElementById("math-stage-selector").classList.add("hidden");
        startActivityWorkspace();
    }
}

// Displays Stage 1, 2, and 3 options for Money
function showMoneyStageSelector() {
    document.getElementById("math-topic-selector").classList.add("hidden");
    document.getElementById("math-game-area").classList.add("hidden");
    
    const stageSelector = document.getElementById("math-stage-selector");
    stageSelector.classList.remove("hidden");

    stageSelector.innerHTML = `
        <button class="back-topics-btn" onclick="showTopicSelector()">← Choose Different Topic</button>
        <p class="section-subtitle">Select a Money Level:</p>
        <div class="topic-grid">
            <button class="topic-card" onclick="startMoneyStage(1)">
                <span class="topic-icon">🔍</span>
                <h3>Stage 1: Basics</h3>
                <p>Identify individual coins and bills</p>
            </button>
            <button class="topic-card" onclick="startMoneyStage(2)">
                <span class="topic-icon">🧮</span>
                <h3>Stage 2: Mixed Combinations</h3>
                <p>Count sets of bills and coins together</p>
            </button>
            <button class="topic-card" onclick="startMoneyStage(3)">
                <span class="topic-icon"> 🛒</span>
                <h3>Stage 3: Store Checkout</h3>
                <p>Pay for items using money from your wallet!</p>
            </button>
        </div>
    `;
}

// Sets active stage and launches activity
function startMoneyStage(stageNum) {
    currentMoneyStage = stageNum;
    lastCorrectAnswer = null; // Reset duplicate prevention on stage change
    document.getElementById("math-stage-selector").classList.add("hidden");
    startActivityWorkspace();
}

// Sets up active question card
function startActivityWorkspace() {
    score = 0;
    streak = 0;

    const gameArea = document.getElementById("math-game-area");
    gameArea.classList.remove("hidden");

    const backAction = currentTopic === 'money' ? 'showMoneyStageSelector()' : 'showTopicSelector()';

    gameArea.innerHTML = `
        <div class="math-header-bar">
            <button class="back-topics-btn" onclick="${backAction}">← Back</button>
            <div class="score-board">
                <span class="score-badge">⭐ Score: <strong id="math-score">0</strong></span>
                <span class="streak-badge">🔥 Streak: <strong id="math-streak">0</strong></span>
            </div>
        </div>
        <div class="problem-box" id="problem-card">
            <div id="visual-display" class="visual-counters"></div>
            <h2 id="question-text">Loading question...</h2>
            <div id="interactive-area">
                <div class="input-row">
                    <input type="number" step="0.01" id="math-answer" placeholder="Answer" autofocus onkeydown="handleKeyPress(event)">
                    <button class="submit-btn" onclick="checkMathAnswer()">Submit</button>
                </div>
            </div>
            <p id="feedback-msg"></p>
        </div>
    `;

    generateNextQuestion();
}

// Master dynamic problem generator
function generateNextQuestion() {
    const feedback = document.getElementById("feedback-msg");
    if (feedback) feedback.innerText = "";

    const questionText = document.getElementById("question-text");
    const visualDisplay = document.getElementById("visual-display");
    const interactiveArea = document.getElementById("interactive-area");

    let newAnswer = null;

    do {
        if (currentTopic === 'money') {
            if (currentMoneyStage === 1) {
                // Restore standard input box if returning from Stage 3
                interactiveArea.innerHTML = `
                    <div class="input-row">
                        <input type="number" step="0.01" id="math-answer" placeholder="Answer" autofocus onkeydown="handleKeyPress(event)">
                        <button class="submit-btn" onclick="checkMathAnswer()">Submit</button>
                    </div>
                `;

                const moneyItems = [
                    { name: "Penny", val: 0.01, img: "images/penny.png", sym: "1¢", isCoin: true },
                    { name: "Nickel", val: 0.05, img: "images/nickel.png", sym: "5¢", isCoin: true },
                    { name: "Dime", val: 0.10, img: "images/dime.png", sym: "10¢", isCoin: true },
                    { name: "Quarter", val: 0.25, img: "images/quarter.png", sym: "25¢", isCoin: true },
                    { name: "$1 Bill", val: 1.00, img: "images/1dollar.png", sym: "$1", isCoin: false },
                    { name: "$5 Bill", val: 5.00, img: "images/5dollar.png", sym: "$5", isCoin: false },
                    { name: "$10 Bill", val: 10.00, img: "images/10dollar.png", sym: "$10", isCoin: false },
                    { name: "$20 Bill", val: 20.00, img: "images/20dollar.png", sym: "$20", isCoin: false },
                    { name: "$50 Bill", val: 50.00, img: "images/50dollar.png", sym: "$50", isCoin: false },
                    { name: "$100 Bill", val: 100.00, img: "images/100dollar.png", sym: "$100", isCoin: false }
                ];

                const item = moneyItems[Math.floor(Math.random() * moneyItems.length)];
                newAnswer = item.val;

                const imgClass = item.isCoin ? "stage1-coin-img" : "stage1-bill-img";

                visualDisplay.innerHTML = `
                    <div class="money-container stage1-container">
                        <img src="${item.img}" alt="Money Item" class="stage1-money-img ${imgClass}" onerror="this.onerror=null; this.replaceWith(createMoneyFallback('${item.sym}'))">
                    </div>
                `;
                questionText.innerText = "What is the value of this money? ($)";

            } else if (currentMoneyStage === 2) {
                // Restore standard input box if returning from Stage 3
                interactiveArea.innerHTML = `
                    <div class="input-row">
                        <input type="number" step="0.01" id="math-answer" placeholder="Answer" autofocus onkeydown="handleKeyPress(event)">
                        <button class="submit-btn" onclick="checkMathAnswer()">Submit</button>
                    </div>
                `;

                const availableBills = [
                    { name: "$1 Bill", val: 1.00, img: "images/1dollar.png", sym: "$1" },
                    { name: "$5 Bill", val: 5.00, img: "images/5dollar.png", sym: "$5" },
                    { name: "$10 Bill", val: 10.00, img: "images/10dollar.png", sym: "$10" },
                    { name: "$20 Bill", val: 20.00, img: "images/20dollar.png", sym: "$20" }
                ];

                const availableCoins = [
                    { name: "Quarter", val: 0.25, img: "images/quarter.png", sym: "25¢" },
                    { name: "Dime", val: 0.10, img: "images/dime.png", sym: "10¢" },
                    { name: "Nickel", val: 0.05, img: "images/nickel.png", sym: "5¢" },
                    { name: "Penny", val: 0.01, img: "images/penny.png", sym: "1¢" }
                ];

                const shuffledBills = [...availableBills].sort(() => 0.5 - Math.random());
                const shuffledCoins = [...availableCoins].sort(() => 0.5 - Math.random());

                const billTypeCount = Math.floor(Math.random() * 2) + 1;
                const coinTypeCount = Math.floor(Math.random() * 2) + 1;

                let calculatedTotal = 0;
                let moneyHTML = `<div class="money-container">`;

                for (let i = 0; i < billTypeCount; i++) {
                    const bill = shuffledBills[i];
                    const count = Math.floor(Math.random() * 2) + 1;
                    calculatedTotal += bill.val * count;

                    for (let c = 0; c < count; c++) {
                        moneyHTML += `<img src="${bill.img}" alt="Bill" class="bill-img" onerror="this.onerror=null; this.replaceWith(createMoneyFallback('${bill.sym}'))">`;
                    }
                }

                for (let i = 0; i < coinTypeCount; i++) {
                    const coin = shuffledCoins[i];
                    const count = Math.floor(Math.random() * 3) + 1;
                    calculatedTotal += coin.val * count;

                    for (let c = 0; c < count; c++) {
                        moneyHTML += `<img src="${coin.img}" alt="Coin" class="coin-img" onerror="this.onerror=null; this.replaceWith(createMoneyFallback('${coin.sym}'))">`;
                    }
                }

                moneyHTML += `</div>`;

                newAnswer = parseFloat(calculatedTotal.toFixed(2));
                visualDisplay.innerHTML = moneyHTML;
                questionText.innerText = "What is the total value of this money? ($)";

            } else if (currentMoneyStage === 3) {
                // STAGE 3: DRAG & DROP CHECKOUT SETUP
                currentPaidTotal = 0;
                const toys = [
                    { name: "Rubber Duck", price: 1.15, icon: "🦆" },
                    { name: "Teddy Bear", price: 3.25, icon: "🧸" },
                    { name: "Yo-Yo", price: 4.50, icon: "🪀" },
                    { name: "Toy Robot", price: 6.50, icon: "🤖" },
                    { name: "Action Figure", price: 8.75, icon: "🦸" },
                    { name: "Board Game", price: 10.40, icon: "🎲" },
                    { name: "Basketball", price: 12.00, icon: "🏀" },
                    { name: "Race Car", price: 15.10, icon: "🏎️" },
                    { name: "Skateboard", price: 18.50, icon: "🛹" },
                    { name: "Headphones", price: 21.25, icon: "🎧" },
                    { name: "Video Game", price: 26.25, icon: "🎮" },
                    { name: "Bicycle", price: 35.00, icon: "🚲" }
                ];

                const toy = toys[Math.floor(Math.random() * toys.length)];
                newAnswer = toy.price;

                visualDisplay.innerHTML = `<div class="store-item"><span class="store-icon">${toy.icon}</span><h3>${toy.name}</h3></div>`;
                questionText.innerText = `Price: $${toy.price.toFixed(2)} — Drag cash to register to pay!`;

                interactiveArea.innerHTML = `
                    <div class="store-workspace">
                        <p class="paid-status">Tray Total: <strong>$<span id="paid-amount">0.00</span></strong></p>
                        
                        <!-- Drop Zone Register -->
                        <div id="cashier-tray" class="cashier-tray" ondragover="handleDragOver(event)" ondragleave="handleDragLeave(event)" ondrop="handleDrop(event)">
                            <span id="tray-placeholder" class="tray-placeholder">Drag money here or tap below!</span>
                        </div>

                        <!-- Draggable Money Wallet -->
                        <div class="wallet-shelf">
                            <img src="images/quarter.png" class="coin-img draggable-money" draggable="true" ondragstart="handleDragStart(event, 0.25, 'images/quarter.png', 'coin')" onclick="addMoneyValue(0.25, 'images/quarter.png', 'coin')" alt="Quarter" onerror="this.onerror=null; this.replaceWith(createMoneyFallback('25¢'))">
                            <img src="images/dime.png" class="coin-img draggable-money" draggable="true" ondragstart="handleDragStart(event, 0.10, 'images/dime.png', 'coin')" onclick="addMoneyValue(0.10, 'images/dime.png', 'coin')" alt="Dime" onerror="this.onerror=null; this.replaceWith(createMoneyFallback('10¢'))">
                            <img src="images/nickel.png" class="coin-img draggable-money" draggable="true" ondragstart="handleDragStart(event, 0.05, 'images/nickel.png', 'coin')" onclick="addMoneyValue(0.05, 'images/nickel.png', 'coin')" alt="Nickel" onerror="this.onerror=null; this.replaceWith(createMoneyFallback('5¢'))">
                            <img src="images/1dollar.png" class="bill-img draggable-money" draggable="true" ondragstart="handleDragStart(event, 1.00, 'images/1dollar.png', 'bill')" onclick="addMoneyValue(1.00, 'images/1dollar.png', 'bill')" alt="$1" onerror="this.onerror=null; this.replaceWith(createMoneyFallback('$1'))">
                            <img src="images/5dollar.png" class="bill-img draggable-money" draggable="true" ondragstart="handleDragStart(event, 5.00, 'images/5dollar.png', 'bill')" onclick="addMoneyValue(5.00, 'images/5dollar.png', 'bill')" alt="$5" onerror="this.onerror=null; this.replaceWith(createMoneyFallback('$5'))">
                            <img src="images/10dollar.png" class="bill-img draggable-money" draggable="true" ondragstart="handleDragStart(event, 10.00, 'images/10dollar.png', 'bill')" onclick="addMoneyValue(10.00, 'images/10dollar.png', 'bill')" alt="$10" onerror="this.onerror=null; this.replaceWith(createMoneyFallback('$10'))">
                        </div>

                        <div class="action-row">
                            <button class="reset-btn" onclick="resetTray()">Reset</button>
                            <button class="submit-btn" onclick="checkStorePayment()">Pay Register</button>
                        </div>
                    </div>
                `;
            }

        } else if (currentTopic === 'addition') {
            interactiveArea.innerHTML = `
                <div class="input-row">
                    <input type="number" step="0.01" id="math-answer" placeholder="Answer" autofocus onkeydown="handleKeyPress(event)">
                    <button class="submit-btn" onclick="checkMathAnswer()">Submit</button>
                </div>
            `;
            const num1 = Math.floor(Math.random() * 10) + 1;
            const num2 = Math.floor(Math.random() * 10) + 1;
            newAnswer = num1 + num2;
            visualDisplay.innerHTML = `<div class="visual-items">${"🍎".repeat(num1)} + ${"🍎".repeat(num2)}</div>`;
            questionText.innerText = `${num1} + ${num2} = ?`;

        } else if (currentTopic === 'multiplication') {
            interactiveArea.innerHTML = `
                <div class="input-row">
                    <input type="number" step="0.01" id="math-answer" placeholder="Answer" autofocus onkeydown="handleKeyPress(event)">
                    <button class="submit-btn" onclick="checkMathAnswer()">Submit</button>
                </div>
            `;
            const num1 = Math.floor(Math.random() * 9) + 2;
            const num2 = Math.floor(Math.random() * 9) + 2;
            newAnswer = num1 * num2;
            visualDisplay.innerHTML = `<span class="math-badge">✖️ Times Tables</span>`;
            questionText.innerText = `${num1} × ${num2} = ?`;

        } else if (currentTopic === 'fractions') {
            interactiveArea.innerHTML = `
                <div class="input-row">
                    <input type="number" step="0.01" id="math-answer" placeholder="Answer" autofocus onkeydown="handleKeyPress(event)">
                    <button class="submit-btn" onclick="checkMathAnswer()">Submit</button>
                </div>
            `;
            const total = 4;
            const eaten = Math.floor(Math.random() * 3) + 1;
            newAnswer = total - eaten;
            visualDisplay.innerHTML = `<div class="visual-items">${"🍕".repeat(total)}</div>`;
            questionText.innerText = `You have 4 slices and eat ${eaten}. How many are left?`;
        }

    } while (newAnswer === lastCorrectAnswer);

    currentCorrectAnswer = newAnswer;
    lastCorrectAnswer = newAnswer;

    const answerInput = document.getElementById("math-answer");
    if (answerInput) answerInput.focus();
}

// ==========================================================================
// STAGE 3 DRAG AND DROP & WALLET LOGIC
// ==========================================================================

function handleDragStart(event, value, imgSrc, type) {
    event.dataTransfer.setData("text/plain", JSON.stringify({ value, imgSrc, type }));
}

function handleDragOver(event) {
    event.preventDefault();
    const tray = document.getElementById("cashier-tray");
    if (tray) tray.classList.add("drag-over");
}

function handleDragLeave(event) {
    const tray = document.getElementById("cashier-tray");
    if (tray) tray.classList.remove("drag-over");
}

function handleDrop(event) {
    event.preventDefault();
    const tray = document.getElementById("cashier-tray");
    if (tray) tray.classList.remove("drag-over");

    try {
        const data = JSON.parse(event.dataTransfer.getData("text/plain"));
        if (data && data.value) {
            addMoneyValue(data.value, data.imgSrc, data.type);
        }
    } catch (e) {
        console.error("Drag drop parse error:", e);
    }
}

function addMoneyValue(val, imgSrc, type) {
    currentPaidTotal = parseFloat((currentPaidTotal + val).toFixed(2));
    
    const paidDisplay = document.getElementById("paid-amount");
    if (paidDisplay) paidDisplay.innerText = currentPaidTotal.toFixed(2);

    const tray = document.getElementById("cashier-tray");
    const placeholder = document.getElementById("tray-placeholder");
    if (placeholder) placeholder.style.display = "none";

    if (tray) {
        const newImg = document.createElement("img");
        newImg.src = imgSrc;
        newImg.className = `${type === 'coin' ? 'coin-img' : 'bill-img'} tray-item`;
        tray.appendChild(newImg);
    }
}

function resetTray() {
    currentPaidTotal = 0;
    const paidDisplay = document.getElementById("paid-amount");
    if (paidDisplay) paidDisplay.innerText = "0.00";

    const tray = document.getElementById("cashier-tray");
    if (tray) {
        tray.innerHTML = `<span id="tray-placeholder" class="tray-placeholder">Drag money here or tap below!</span>`;
    }

    const feedback = document.getElementById("feedback-msg");
    if (feedback) feedback.innerText = "";
}

function checkStorePayment() {
    const feedback = document.getElementById("feedback-msg");

    if (Math.abs(currentPaidTotal - currentCorrectAnswer) < 0.001) {
        score += 15;
        streak += 1;
        document.getElementById("math-score").innerText = score;
        document.getElementById("math-streak").innerText = streak;

        feedback.innerText = "🎉 Exact change! You bought the toy!";
        feedback.style.color = "#27ae60";

        setTimeout(() => {
            generateNextQuestion();
        }, 1200);
    } else if (currentPaidTotal > currentCorrectAnswer) {
        feedback.innerText = `💵 Too much money! You placed $${currentPaidTotal.toFixed(2)}, but it costs $${currentCorrectAnswer.toFixed(2)}. Press Reset!`;
        feedback.style.color = "#e67e22";
    } else {
        const remaining = (currentCorrectAnswer - currentPaidTotal).toFixed(2);
        feedback.innerText = `🪙 Not enough money yet! You need $${remaining} more.`;
        feedback.style.color = "#e74c3c";
    }
}

// Fallback badge helper
function createMoneyFallback(symbol) {
    const span = document.createElement("span");
    span.className = "coin-fallback-badge";
    span.innerText = symbol;
    return span;
}

// Standard Answer Check
function checkMathAnswer() {
    const answerInput = document.getElementById("math-answer");
    if (!answerInput) return;

    const userAns = parseFloat(answerInput.value);
    const feedback = document.getElementById("feedback-msg");

    if (isNaN(userAns)) {
        feedback.innerText = "Please enter a number!";
        feedback.style.color = "#e67e22";
        return;
    }

    if (Math.abs(userAns - currentCorrectAnswer) < 0.001) {
        score += 10;
        streak += 1;
        document.getElementById("math-score").innerText = score;
        document.getElementById("math-streak").innerText = streak;

        feedback.innerText = "🎉 Correct! Great job!";
        feedback.style.color = "#27ae60";

        setTimeout(() => {
            generateNextQuestion();
        }, 1100);
    } else {
        streak = 0;
        document.getElementById("math-streak").innerText = streak;
        feedback.innerText = `❌ Try again! The correct answer was ${currentCorrectAnswer}.`;
        feedback.style.color = "#e74c3c";
    }
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        checkMathAnswer();
    }
}

function showTopicSelector() {
    document.getElementById("math-game-area").classList.add("hidden");
    document.getElementById("math-stage-selector").classList.add("hidden");
    document.getElementById("math-topic-selector").classList.remove("hidden");
}