// Global variables for game state and scoring
let currentCorrectAnswer = null;
let lastCorrectAnswer = null;
let currentTopic = '';
let currentCountingStage = 1;
let currentMoneyStage = 1;
let currentAdditionStage = 1; 
let currentMultDivStage = 1;
let currentWordProblemStage = 1;
let currentPaidTotal = 0;
let score = 0;
let streak = 0;
let showVisualHelper = true;

// Initializes the Math Lab workspace with the main topic cards
function initMathLab() {
    const workspace = document.getElementById("lesson-workspace");
    
    workspace.innerHTML = `
        <div id="math-topic-selector">
          <button class="back-topics-btn" onclick="goHome()">← Back to Dashboard</button>
            <p class="section-subtitle">Select a skill to practice:</p>
            <div class="topic-grid">
                <button class="topic-card" onclick="loadMathActivity('counting')">
                    <span class="topic-icon">🔢 ⬆️⬇️</span>
                    <h3>Counting & Number Sequences</h3>
                    <p>Practice normal counting up to 100 and what comes next</p>
                </button>
                <button class="topic-card" onclick="loadMathActivity('money')">
                    <span class="topic-icon">🪙 💵</span>
                    <h3>Money</h3>
                    <p>Coins, bills, & making change</p>
                </button>
                <button class="topic-card" onclick="loadMathActivity('addition')">
                    <span class="topic-icon">➕ ➖</span>
                    <h3>Addition & Subtraction</h3>
                    <p>Basics & visual counting</p>
                </button>
                <button class="topic-card" onclick="loadMathActivity('multiplication')">
                    <span class="topic-icon">✖️ ➗</span>
                    <h3>Multiplication & Division</h3>
                    <p>Times tables & division facts</p>
                </button>
                <button class="topic-card" onclick="loadMathActivity('word-problems')">
                    <span class="topic-icon">📝 💡</span>
                    <h3>Word Problems</h3>
                    <p>Real-world math stories & problem solving</p>
                </button>
            </div>
        </div>

        <div id="math-stage-selector" class="hidden"></div>
        <div id="math-game-area" class="game-area hidden"></div>
    `;
}

// Handles switching topics or showing sub-stages
function loadMathActivity(topic) {
    currentTopic = topic;

    if (topic === 'counting') {
        showCountingStageSelector();
    } else if (topic === 'money') {
        showMoneyStageSelector();
    } else if (topic === 'addition') {
        showAdditionStageSelector();
    } else if (topic === 'multiplication') {
        showMultDivStageSelector();
    } else if (topic === 'word-problems') {
        showWordProblemStageSelector();
    } else {
        document.getElementById("math-topic-selector").classList.add("hidden");
        document.getElementById("math-stage-selector").classList.add("hidden");
        startActivityWorkspace();
    }
}

// Displays Stage options for Counting
function showCountingStageSelector() {
    document.getElementById("math-topic-selector").classList.add("hidden");
    document.getElementById("math-game-area").classList.add("hidden");
    
    const stageSelector = document.getElementById("math-stage-selector");
    stageSelector.classList.remove("hidden");

    stageSelector.innerHTML = `
        <button class="back-topics-btn" onclick="showTopicSelector()">← Choose Different Topic</button>
        <p class="section-subtitle">Select a Counting Level:</p>
        <div class="topic-grid">
            <button class="topic-card" onclick="startCountingStage(1)">
                <span class="topic-icon">⬆️</span>
                <h3>Stage 1: What Comes Next?</h3>
                <p>Normal counting (1 to 100) — find the next number</p>
            </button>
            <button class="topic-card" onclick="startCountingStage(2)">
                <span class="topic-icon">⬇️</span>
                <h3>Stage 2: Count Backward</h3>
                <p>Normal counting down — find what comes before</p>
            </button>
            <button class="topic-card" onclick="startCountingStage(3)">
                <span class="topic-icon">🔀</span>
                <h3>Stage 3: Fill in the Missing Spot</h3>
                <p>Find the missing number anywhere in a short sequence</p>
            </button>
        </div>
    `;
}

// Displays Stage options for Money
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

// Displays Stage options for Addition & Subtraction
function showAdditionStageSelector() {
    document.getElementById("math-topic-selector").classList.add("hidden");
    document.getElementById("math-game-area").classList.add("hidden");
    
    const stageSelector = document.getElementById("math-stage-selector");
    stageSelector.classList.remove("hidden");

    stageSelector.innerHTML = `
        <button class="back-topics-btn" onclick="showTopicSelector()">← Choose Different Topic</button>
        <p class="section-subtitle">Select an Addition & Subtraction Level:</p>
        <div class="topic-grid">
            <button class="topic-card" onclick="startAdditionStage(1)">
                <span class="topic-icon">➕</span>
                <h3>Stage 1: Addition</h3>
                <p>Practice adding numbers together</p>
            </button>
            <button class="topic-card" onclick="startAdditionStage(2)">
                <span class="topic-icon">➖</span>
                <h3>Stage 2: Subtraction</h3>
                <p>Practice taking away numbers</p>
            </button>
            <button class="topic-card" onclick="startAdditionStage(3)">
                <span class="topic-icon">🔀</span>
                <h3>Stage 3: Mixed Practice</h3>
                <p>A mix of addition and subtraction problems</p>
            </button>
        </div>
    `;
}

// Displays Stage options for Multiplication & Division
function showMultDivStageSelector() {
    document.getElementById("math-topic-selector").classList.add("hidden");
    document.getElementById("math-game-area").classList.add("hidden");
    
    const stageSelector = document.getElementById("math-stage-selector");
    stageSelector.classList.remove("hidden");

    stageSelector.innerHTML = `
        <button class="back-topics-btn" onclick="showTopicSelector()">← Choose Different Topic</button>
        <p class="section-subtitle">Select a Multiplication & Division Level:</p>
        <div class="topic-grid">
            <button class="topic-card" onclick="startMultDivStage(1)">
                <span class="topic-icon">✖️</span>
                <h3>Stage 1: Multiplication</h3>
                <p>Practice times tables with a handy reference chart</p>
            </button>
            <button class="topic-card" onclick="startMultDivStage(2)">
                <span class="topic-icon">➗</span>
                <h3>Stage 2: Division</h3>
                <p>Drag & drop emojis into groups to solve division facts</p>
            </button>
            <button class="topic-card" onclick="startMultDivStage(3)">
                <span class="topic-icon">🔀</span>
                <h3>Stage 3: Mixed Practice</h3>
                <p>A mix of multiplication and division problems</p>
            </button>
        </div>
    `;
}

// Displays Stage options for Word Problems (Separated into 3 subject levels + Mixed 4th stage)
function showWordProblemStageSelector() {
    document.getElementById("math-topic-selector").classList.add("hidden");
    document.getElementById("math-game-area").classList.add("hidden");
    
    const stageSelector = document.getElementById("math-stage-selector");
    stageSelector.classList.remove("hidden");

    stageSelector.innerHTML = `
        <button class="back-topics-btn" onclick="showTopicSelector()">← Choose Different Topic</button>
        <p class="section-subtitle">Select a Word Problem Subject Level:</p>
        <div class="topic-grid">
            <button class="topic-card" onclick="startWordProblemStage(1)">
                <span class="topic-icon">➕ ➖</span>
                <h3>Stage 1: Add & Subtract Stories</h3>
                <p>Real-world word problems focused on addition & subtraction</p>
            </button>
            <button class="topic-card" onclick="startWordProblemStage(2)">
                <span class="topic-icon">✖️ ➗</span>
                <h3>Stage 2: Multiply & Divide Stories</h3>
                <p>Word problems focused on groups, sharing, & multiplication/division</p>
            </button>
            <button class="topic-card" onclick="startWordProblemStage(3)">
                <span class="topic-icon">🪙 💵</span>
                <h3>Stage 3: Money Stories</h3>
                <p>Word problems focused on shopping, costs, and making change</p>
            </button>
            <button class="topic-card" onclick="startWordProblemStage(4)">
                <span class="topic-icon">🔀 💡</span>
                <h3>Stage 4: Mixed Word Problems</h3>
                <p>A fun combination of all three subjects together!</p>
            </button>
        </div>
    `;
}

function startCountingStage(stageNum) {
    currentCountingStage = stageNum;
    lastCorrectAnswer = null;
    document.getElementById("math-stage-selector").classList.add("hidden");
    startActivityWorkspace();
}

function startMoneyStage(stageNum) {
    currentMoneyStage = stageNum;
    lastCorrectAnswer = null;
    document.getElementById("math-stage-selector").classList.add("hidden");
    startActivityWorkspace();
}

function startAdditionStage(stageNum) {
    currentAdditionStage = stageNum;
    lastCorrectAnswer = null;
    document.getElementById("math-stage-selector").classList.add("hidden");
    startActivityWorkspace();
}

function startMultDivStage(stageNum) {
    currentMultDivStage = stageNum;
    lastCorrectAnswer = null;
    document.getElementById("math-stage-selector").classList.add("hidden");
    startActivityWorkspace();
}

function startWordProblemStage(stageNum) {
    currentWordProblemStage = stageNum;
    lastCorrectAnswer = null;
    document.getElementById("math-stage-selector").classList.add("hidden");
    startActivityWorkspace();
}

// Sets up active question card workspace
function startActivityWorkspace() {
    score = 0;
    streak = 0;

    const gameArea = document.getElementById("math-game-area");
    gameArea.classList.remove("hidden");

    let backAction = 'showTopicSelector()';
    if (currentTopic === 'counting') {
        backAction = 'showCountingStageSelector()';
    } else if (currentTopic === 'money') {
        backAction = 'showMoneyStageSelector()';
    } else if (currentTopic === 'addition') {
        backAction = 'showAdditionStageSelector()';
    } else if (currentTopic === 'multiplication') {
        backAction = 'showMultDivStageSelector()';
    } else if (currentTopic === 'word-problems') {
        backAction = 'showWordProblemStageSelector()';
    }

    gameArea.innerHTML = `
        <div class="math-header-bar">
            <button class="back-topics-btn" onclick="${backAction}">← Back</button>
            <div class="score-board">
                <span class="score-badge">⭐ Score: <strong id="math-score">0</strong></span>
                <span class="streak-badge">🔥 Streak: <strong id="math-streak">0</strong></span>
            </div>
        </div>
        <div class="problem-box" id="problem-card">
            ${(currentTopic === 'addition' || currentTopic === 'multiplication' || currentTopic === 'counting' || currentTopic === 'word-problems') ? `
                <div class="visual-toggle-row">
                    <button class="toggle-btn" onclick="toggleVisualHelper()">
                        ${showVisualHelper ? '👁️ Hide Visual Helper' : '👁️ Show Visual Helper'}
                    </button>
                </div>
            ` : ''}
            <div id="visual-display" class="visual-counters ${showVisualHelper ? '' : 'hidden'}"></div>
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

function toggleVisualHelper() {
    showVisualHelper = !showVisualHelper;
    const visualDisplay = document.getElementById("visual-display");
    const toggleBtn = document.querySelector(".toggle-btn");

    if (visualDisplay) {
        if (showVisualHelper) {
            visualDisplay.classList.remove("hidden");
            if (toggleBtn) toggleBtn.innerText = "👁️ Hide Visual Helper";
        } else {
            visualDisplay.classList.add("hidden");
            if (toggleBtn) toggleBtn.innerText = "👁️ Show Visual Helper";
        }
    }
}

// Master dynamic problem generator across all sections
function generateNextQuestion() {
    const feedback = document.getElementById("feedback-msg");
    if (feedback) feedback.innerText = "";

    const questionText = document.getElementById("question-text");
    const visualDisplay = document.getElementById("visual-display");
    const interactiveArea = document.getElementById("interactive-area");

    let newAnswer = null;

    do {
        if (currentTopic === 'counting') {
            interactiveArea.innerHTML = `
                <div class="input-row">
                    <input type="number" id="math-answer" placeholder="Answer" autofocus onkeydown="handleKeyPress(event)">
                    <button class="submit-btn" onclick="checkMathAnswer()">Submit</button>
                </div>
            `;

            const step = 1;
            const seqLength = 4; 
            let startNum;
            let missingIndex;

            if (currentCountingStage === 1) {
                startNum = Math.floor(Math.random() * 95) + 1; 
                missingIndex = seqLength - 1; 
            } else if (currentCountingStage === 2) {
                startNum = Math.floor(Math.random() * 95) + 5; 
                missingIndex = 0; 
            } else {
                startNum = Math.floor(Math.random() * 92) + 1;
                missingIndex = Math.floor(Math.random() * seqLength);
            }

            let sequence = [];
            for (let i = 0; i < seqLength; i++) {
                if (currentCountingStage === 2) {
                    sequence.push(startNum - i);
                } else {
                    sequence.push(startNum + i);
                }
            }

            newAnswer = sequence[missingIndex];
            let displaySeq = sequence.map((num, idx) => idx === missingIndex ? '❓' : num).join(', ');

            visualDisplay.innerHTML = `
                <div class="times-table-container">
                    <img src="images/countingtable.png" 
                         alt="Counting Table Reference" 
                         class="times-table-img" 
                         onerror="this.onerror=null; this.replaceWith(createCountingTableFallback())">
                </div>
            `;

            if (currentCountingStage === 2) {
                questionText.innerText = `Count backward (1 to 100). What number comes next?\n\n[ ${displaySeq} ]`;
            } else {
                questionText.innerText = `Count normally (1 to 100). What number comes next?\n\n[ ${displaySeq} ]`;
            }

        } else if (currentTopic === 'money') {
            if (currentMoneyStage === 1) {
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
                    { name: "$20 Bill", val: 20.00, img: "images/20dollar.png", sym: "$20", isCoin: false }
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
                    { name: "Skateboard", price: 18.50, icon: "🛹" }
                ];

                const toy = toys[Math.floor(Math.random() * toys.length)];
                newAnswer = toy.price;

                visualDisplay.innerHTML = `<div class="store-item"><span class="store-icon">${toy.icon}</span><h3>${toy.name}</h3></div>`;
                questionText.innerText = `Price: $${toy.price.toFixed(2)} — Drag cash to register to pay!`;

                interactiveArea.innerHTML = `
                    <div class="store-workspace">
                        <p class="paid-status">Tray Total: <strong>$<span id="paid-amount">0.00</span></strong></p>
                        
                        <div id="cashier-tray" class="cashier-tray" ondragover="handleDragOver(event)" ondragleave="handleDragLeave(event)" ondrop="handleDrop(event)">
                            <span id="tray-placeholder" class="tray-placeholder">Drag money here or tap below!</span>
                        </div>

                        <div class="wallet-shelf">
                            <img src="images/quarter.png" class="coin-img draggable-money" draggable="true" ondragstart="handleDragStart(event, 0.25, 'images/quarter.png', 'coin')" onclick="addMoneyValue(0.25, 'images/quarter.png', 'coin')" alt="Quarter" onerror="this.onerror=null; this.replaceWith(createMoneyFallback('25¢'))">
                            <img src="images/dime.png" class="coin-img draggable-money" draggable="true" ondragstart="handleDragStart(event, 0.10, 'images/dime.png', 'dime')" onclick="addMoneyValue(0.10, 'images/dime.png', 'coin')" alt="Dime" onerror="this.onerror=null; this.replaceWith(createMoneyFallback('10¢'))">
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

            let isAddition = true;
            if (currentAdditionStage === 1) {
                isAddition = true;
            } else if (currentAdditionStage === 2) {
                isAddition = false;
            } else {
                isAddition = Math.random() >= 0.5;
            }

            if (isAddition) {
                const num1 = Math.floor(Math.random() * 9) + 1;
                const num2 = Math.floor(Math.random() * 9) + 1;
                newAnswer = num1 + num2;

                const group1 = generateAppleImages(num1);
                const group2 = generateAppleImages(num2);

                visualDisplay.innerHTML = `
                    <div class="apple-group">${group1}</div>
                    <span class="operator-sign">+</span>
                    <div class="apple-group">${group2}</div>
                `;
                questionText.innerText = `${num1} + ${num2} = ?`;
            } else {
                const num1 = Math.floor(Math.random() * 9) + 2;
                const num2 = Math.floor(Math.random() * num1) + 1;
                newAnswer = num1 - num2;

                const activeApples = generateAppleImages(num1 - num2);
                const subtractedApples = generateAppleImages(num2, true);

                visualDisplay.innerHTML = `
                    <div class="apple-group">
                        ${activeApples}
                        ${subtractedApples}
                    </div>
                `;
                questionText.innerText = `${num1} - ${num2} = ?`;
            }

        } else if (currentTopic === 'multiplication') {
            let isMultiplication = true;
            if (currentMultDivStage === 1) {
                isMultiplication = true;
            } else if (currentMultDivStage === 2) {
                isMultiplication = false;
            } else {
                isMultiplication = Math.random() >= 0.5;
            }

            if (isMultiplication) {
                interactiveArea.innerHTML = `
                    <div class="input-row">
                        <input type="number" step="0.01" id="math-answer" placeholder="Answer" autofocus onkeydown="handleKeyPress(event)">
                        <button class="submit-btn" onclick="checkMathAnswer()">Submit</button>
                    </div>
                `;

                const num1 = Math.floor(Math.random() * 9) + 2;
                const num2 = Math.floor(Math.random() * 9) + 2;
                newAnswer = num1 * num2;

                visualDisplay.innerHTML = `
                    <div class="times-table-container">
                        <img src="images/timestable.png" 
                             alt="Times Table Reference" 
                             class="times-table-img" 
                             onerror="this.onerror=null; this.replaceWith(createTimesTableFallback())">
                    </div>
                `;
                questionText.innerText = `${num1} × ${num2} = ?`;

            } else {
                const divisor = Math.floor(Math.random() * 4) + 2;
                const quotient = Math.floor(Math.random() * 5) + 1;
                const dividend = divisor * quotient;
                newAnswer = quotient;

                const emojis = ['🍎', '⭐', '🎈', '🍪', '🐶', '⚽', '🏎️', '🎨', '🍕', '🧁'];
                const currentEmoji = emojis[Math.floor(Math.random() * emojis.length)];

                questionText.innerText = `${dividend} ÷ ${divisor} = ?`;

                visualDisplay.innerHTML = `
                    <div class="division-workspace">
                        <p class="helper-subtitle">Drag the ${currentEmoji} into the ${divisor} groups to divide them equally!</p>
                        <div id="emoji-pool" class="emoji-pool" ondragover="handleDragOverEmoji(event)" onmouseleave="handleDragLeaveEmoji(event)" ondrop="handleDropEmoji(event, 'emoji-pool')">
                            ${generateDraggableEmojis(dividend, currentEmoji)}
                        </div>
                        <div class="division-buckets-container">
                            ${generateDivisionBuckets(divisor)}
                        </div>
                    </div>
                `;

                interactiveArea.innerHTML = `
                    <div class="division-controls">
                        <button class="reset-btn" onclick="resetDivisionWorkspace('${currentEmoji}', ${dividend}, ${divisor})">Reset Emojis</button>
                    </div>
                    <div class="input-row">
                        <input type="number" step="0.01" id="math-answer" placeholder="Answer" autofocus onkeydown="handleKeyPress(event)">
                        <button class="submit-btn" onclick="checkMathAnswer()">Submit</button>
                    </div>
                `;
            }

        } else if (currentTopic === 'word-problems') {
            interactiveArea.innerHTML = `
                <div class="input-row">
                    <input type="number" step="0.01" id="math-answer" placeholder="Answer" autofocus onkeydown="handleKeyPress(event)">
                    <button class="submit-btn" onclick="checkMathAnswer()">Submit</button>
                </div>
            `;

            const problemData = buildDynamicWordProblem();
            newAnswer = problemData.answer;

            questionText.innerText = problemData.story;
            visualDisplay.innerHTML = `<div class="word-problem-visual">${problemData.visualHint}</div>`;
        }

    } while (newAnswer === lastCorrectAnswer);

    currentCorrectAnswer = newAnswer;
    lastCorrectAnswer = newAnswer;

    const answerInput = document.getElementById("math-answer");
    if (answerInput) answerInput.focus();
}

// Dynamic Word Problem Engine Separated into Subject Levels and Mixed 4th Stage
function buildDynamicWordProblem() {
    const names = ["Leo", "Maya", "Sam", "Sophia", "Alex", "Chloe", "Ethan", "Zoe"];
    const name = names[Math.floor(Math.random() * names.length)];

    let subType = '';

    if (currentWordProblemStage === 1) {
        // Stage 1: Add & Subtract Stories
        const addSubtractTypes = ["addition", "subtraction"];
        subType = addSubtractTypes[Math.floor(Math.random() * addSubtractTypes.length)];
    } else if (currentWordProblemStage === 2) {
        // Stage 2: Multiply & Divide Stories
        const multDivideTypes = ["multiplication", "division"];
        subType = multDivideTypes[Math.floor(Math.random() * multDivideTypes.length)];
    } else if (currentWordProblemStage === 3) {
        // Stage 3: Money Stories
        subType = "money";
    } else {
        // Stage 4: Mixed Word Problems (Combination of all)
        const allTypes = ["addition", "subtraction", "multiplication", "division", "money"];
        subType = allTypes[Math.floor(Math.random() * allTypes.length)];
    }

    if (subType === "addition") {
        const items = [{ name: "shiny rocks", icon: "🪨" }, { name: "colorful stickers", icon: "⭐" }, { name: "seashells", icon: "🐚" }];
        const item = items[Math.floor(Math.random() * items.length)];
        const n1 = Math.floor(Math.random() * 10) + 3;
        const n2 = Math.floor(Math.random() * 10) + 3;
        return {
            answer: n1 + n2,
            story: `${name} found ${n1} ${item.name} at the park. Later, a friend gave ${name} ${n2} more. How many ${item.name} does ${name} have in total?`,
            visualHint: `${item.icon} ${n1} + ${item.icon} ${n2} = ?`
        };
    } else if (subType === "subtraction") {
        const items = [{ name: "cupcakes", icon: "🧁" }, { name: "balloons", icon: "🎈" }, { name: "cookies", icon: "🍪" }];
        const item = items[Math.floor(Math.random() * items.length)];
        const n1 = Math.floor(Math.random() * 12) + 6;
        const n2 = Math.floor(Math.random() * (n1 - 2)) + 1;
        return {
            answer: n1 - n2,
            story: `${name} had ${n1} ${item.name} and shared ${n2} of them with friends. How many ${item.name} are left?`,
            visualHint: `${item.icon} ${n1} − ${item.icon} ${n2} = ?`
        };
    } else if (subType === "multiplication") {
        const s = { container: "boxes", item: "donuts", icon: "🍩" };
        const groups = Math.floor(Math.random() * 4) + 2;
        const itemsPerGroup = Math.floor(Math.random() * 4) + 2;
        return {
            answer: groups * itemsPerGroup,
            story: `${name} organized ${groups} ${s.container} of ${s.item}. If each box has ${itemsPerGroup} ${s.item}, how many total ${s.item} are there?`,
            visualHint: `${s.icon} ${groups} × ${itemsPerGroup} = ?`
        };
    } else if (subType === "division") {
        const friends = Math.floor(Math.random() * 3) + 2;
        const perPerson = Math.floor(Math.random() * 4) + 2;
        const total = friends * perPerson;
        return {
            answer: perPerson,
            story: `${name} has ${total} pieces of candy to share equally among ${friends} friends. How many pieces will each friend get?`,
            visualHint: `🍬 ${total} ÷ ${friends} = ?`
        };
    } else {
        const itemPrice = 3.50;
        const paidBill = 10.00;
        return {
            answer: paidBill - itemPrice,
            story: `${name} bought a book for $${itemPrice.toFixed(2)} and paid with a $${paidBill.toFixed(2)} bill. How much change should ${name} receive? ($)`,
            visualHint: `📖 Paid $${paidBill.toFixed(2)} − Cost $${itemPrice.toFixed(2)} = ?`
        };
    }
}

// Division Drag and Drop Helpers
function generateDraggableEmojis(count, emoji) {
    let html = '';
    for (let i = 0; i < count; i++) {
        const emojiId = `emoji-${i}-${Date.now()}`;
        html += `<span id="${emojiId}" class="draggable-emoji" draggable="true" ondragstart="handleEmojiDragStart(event, '${emojiId}')">${emoji}</span>`;
    }
    return html;
}

function generateDivisionBuckets(groupCount) {
    let html = '';
    for (let i = 1; i <= groupCount; i++) {
        html += `
            <div class="division-bucket-wrapper">
                <span class="bucket-label">Group ${i}</span>
                <div id="bucket-${i}" class="division-bucket" ondragover="handleDragOverEmoji(event)" onmouseleave="handleDragLeaveEmoji(event)" ondrop="handleDropEmoji(event, 'bucket-${i}')"></div>
            </div>
        `;
    }
    return html;
}

function handleEmojiDragStart(event, emojiId) {
    event.dataTransfer.setData("text/plain", emojiId);
}

function handleDragOverEmoji(event) {
    event.preventDefault();
    const dropZone = event.currentTarget;
    if (dropZone) dropZone.classList.add("bucket-drag-over");
}

function handleDragLeaveEmoji(event) {
    const dropZone = event.currentTarget;
    if (dropZone) dropZone.classList.remove("bucket-drag-over");
}

function handleDropEmoji(event, targetId) {
    event.preventDefault();
    const targetBucket = document.getElementById(targetId);
    if (targetBucket) targetBucket.classList.remove("bucket-drag-over");

    const emojiId = event.dataTransfer.getData("text/plain");
    const emojiElement = document.getElementById(emojiId);

    if (emojiElement && targetBucket) {
        targetBucket.appendChild(emojiElement);
    }
}

function resetDivisionWorkspace(emoji, count, divisor) {
    const pool = document.getElementById("emoji-pool");
    if (pool) pool.innerHTML = generateDraggableEmojis(count, emoji);

    for (let i = 1; i <= divisor; i++) {
        const bucket = document.getElementById(`bucket-${i}`);
        if (bucket) bucket.innerHTML = '';
    }
}

function createTimesTableFallback() {
    const div = document.createElement("div");
    div.className = "times-table-fallback";
    div.innerHTML = `<p><strong>📊 Times Table Helper Chart</strong></p><p>1×1=1 | 2×2=4 | 3×3=9 | 4×4=16 | 5×5=25</p>`;
    return div;
}

function createCountingTableFallback() {
    const div = document.createElement("div");
    div.className = "times-table-fallback";
    div.innerHTML = `<p><strong>🔢 Counting Helper Table (1 to 100)</strong></p><p>1, 2, 3, 4, 5, 6, 7, 8, 9, 10...</p>`;
    return div;
}

function generateAppleImages(count, isSubtracted = false) {
    let html = '';
    const extraClass = isSubtracted ? 'apple-img subtracted' : 'apple-img';
    for (let i = 0; i < count; i++) {
        html += `<img src="images/apple.png" alt="Apple" class="${extraClass}" onerror="this.onerror=null; this.replaceWith(createAppleFallback(${isSubtracted}))">`;
    }
    return html;
}

function createAppleFallback(isSubtracted) {
    const span = document.createElement("span");
    span.className = isSubtracted ? "apple-fallback subtracted" : "apple-fallback";
    span.innerText = "🍎";
    return span;
}

// Store Wallet & Drag-and-Drop Checkout Logic
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

        // Trigger success animation!
        triggerSuccessEffects(streak);

        setTimeout(() => {
            generateNextQuestion();
        }, 1200);
    } else if (currentPaidTotal > currentCorrectAnswer) {
        feedback.innerText = `💵 Too much money! You placed $${currentPaidTotal.toFixed(2)}, but it costs $${currentCorrectAnswer.toFixed(2)}. Press Reset!`;
        feedback.style.color = "#e67e22";
        
        // Trigger error animation
        triggerErrorEffects();
    } else {
        const remaining = (currentCorrectAnswer - currentPaidTotal).toFixed(2);
        feedback.innerText = `🪙 Not enough money yet! You need $${remaining} more.`;
        feedback.style.color = "#e74c3c";
        
        // Trigger error animation
        triggerErrorEffects();
    }
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

        // Trigger success animation!
        triggerSuccessEffects(streak);

        setTimeout(() => {
            generateNextQuestion();
        }, 1100);
    } else {
        streak = 0;
        document.getElementById("math-streak").innerText = streak;
        feedback.innerText = `❌ Try again! The correct answer was ${currentCorrectAnswer}.`;
        feedback.style.color = "#e74c3c";
        
        // Trigger error animation
        triggerErrorEffects();
    }
}

function showTopicSelector() {
    document.getElementById("math-game-area").classList.add("hidden");
    document.getElementById("math-stage-selector").classList.add("hidden");
    document.getElementById("math-topic-selector").classList.remove("hidden");
}