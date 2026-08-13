// Initializer for Typing Quest selector workspace
function initTypingQuest() {
    const workspace = document.getElementById("lesson-workspace");
    if (!workspace) return;
    
    workspace.innerHTML = `
        <button class="back-topics-btn" onclick="goHome()">← Back to Dashboard</button>
        <p class="section-subtitle">Select a Typing Quest Level:</p>
        <div class="topic-grid">
            <button class="topic-card" onclick="startTypingStage(1)">
                <span class="topic-icon">🔤</span>
                <h3>Stage 1: Full Keyboard Warmup</h3>
                <p>Practice uppercase, lowercase, numbers, and punctuation</p>
            </button>
            <button class="topic-card" onclick="initStage2Submenu()">
                <span class="topic-icon">💬</span>
                <h3>Stage 2: Infinite Word Practice</h3>
                <p>Choose word lengths from 2 to 6 letters or mixed practice</p>
            </button>
            <button class="topic-card" onclick="initStage3Submenu()">
                <span class="topic-icon">⚡</span>
                <h3>Stage 3: Infinite Sentences</h3>
                <p>Choose sentence length preference or mixed practice</p>
            </button>
        </div>
        <div id="typing-game-area" class="game-area hidden"></div>
    `;
}

let currentTypingStage = 1;
let currentWordLengthOption = 'mixed'; // default tracking for stage 2 options
let currentSentenceLengthOption = 'mixed'; // default tracking for stage 3 sentence length options
let currentTypingTarget = "";
let typingScore = 0;
let typingStreak = 0;

// Submenu for Stage 2 word length options
function initStage2Submenu() {
    const workspace = document.getElementById("lesson-workspace");
    if (!workspace) return;

    workspace.innerHTML = `
        <button class="back-topics-btn" onclick="initTypingQuest()">← Back to Stages</button>
        <p class="section-subtitle">Choose Word Length for Practice:</p>
        <div class="topic-grid">
            <button class="topic-card" onclick="startTypingStage(2, '2')">
                <span class="topic-icon">2️⃣</span>
                <h3>2-Letter Words</h3>
                <p>Short warmup words</p>
            </button>
            <button class="topic-card" onclick="startTypingStage(2, '3')">
                <span class="topic-icon">3️⃣</span>
                <h3>3-Letter Words</h3>
                <p>Simple building blocks</p>
            </button>
            <button class="topic-card" onclick="startTypingStage(2, '4')">
                <span class="topic-icon">4️⃣</span>
                <h3>4-Letter Words</h3>
                <p>Expand your vocabulary</p>
            </button>
            <button class="topic-card" onclick="startTypingStage(2, '5')">
                <span class="topic-icon">5️⃣</span>
                <h3>5-Letter Words</h3>
                <p>Intermediate challenges</p>
            </button>
            <button class="topic-card" onclick="startTypingStage(2, '6')">
                <span class="topic-icon">6️⃣</span>
                <h3>6-Letter Words</h3>
                <p>Advanced word practice</p>
            </button>
            <button class="topic-card" onclick="startTypingStage(2, 'mixed')">
                <span class="topic-icon">🔀</span>
                <h3>Mixed Practice</h3>
                <p>Random mix of all word lengths (2 to 6)</p>
            </button>
        </div>
        <div id="typing-game-area" class="game-area hidden"></div>
    `;
}

// Submenu for Stage 3 sentence length options
function initStage3Submenu() {
    const workspace = document.getElementById("lesson-workspace");
    if (!workspace) return;

    workspace.innerHTML = `
        <button class="back-topics-btn" onclick="initTypingQuest()">← Back to Stages</button>
        <p class="section-subtitle">Choose Sentence Length for Practice:</p>
        <div class="topic-grid">
            <button class="topic-card" onclick="startTypingStage(3, 'short')">
                <span class="topic-icon">📝</span>
                <h3>Short Sentences</h3>
                <p>Quick, concise prompts</p>
            </button>
            <button class="topic-card" onclick="startTypingStage(3, 'medium')">
                <span class="topic-icon">📄</span>
                <h3>Medium Sentences</h3>
                <p>Standard sentence length</p>
            </button>
            <button class="topic-card" onclick="startTypingStage(3, 'long')">
                <span class="topic-icon">📜</span>
                <h3>Long Sentences</h3>
                <p>Elaborate, complex typing challenges</p>
            </button>
            <button class="topic-card" onclick="startTypingStage(3, 'mixed')">
                <span class="topic-icon">🔀</span>
                <h3>Mixed Sentences</h3>
                <p>Random mix of all sentence lengths</p>
            </button>
        </div>
        <div id="typing-game-area" class="game-area hidden"></div>
    `;
}

function startTypingStage(stageNum, option = 'mixed') {
    currentTypingStage = stageNum;
    if (stageNum === 2) currentWordLengthOption = option;
    if (stageNum === 3) currentSentenceLengthOption = option;
    
    typingScore = 0;
    typingStreak = 0;

    const selectorGrid = document.querySelector(".topic-grid");
    if (selectorGrid) selectorGrid.classList.add("hidden");

    const gameArea = document.getElementById("typing-game-area");
    if (gameArea) {
        gameArea.classList.remove("hidden");
        
        let backAction;
        if (stageNum === 2) backAction = "initStage2Submenu()";
        else if (stageNum === 3) backAction = "initStage3Submenu()";
        else backAction = "initTypingQuest()";

        let stageTitle = stageNum === 3 ? `Stage 3: Sentence Typing (${option.charAt(0).toUpperCase() + option.slice(1)})` : (stageNum === 2 ? `Stage 2: ${option === 'mixed' ? 'Mixed Words' : option + '-Letter Words'}` : `Stage ${stageNum}`);

        gameArea.innerHTML = `
            <div class="math-header-bar">
                <button class="back-topics-btn" onclick="${backAction}">← Choose Different Level</button>
                <div class="score-board">
                    <span class="score-badge">⭐ Score: <strong id="typing-score">0</strong></span>
                    <span class="streak-badge">🔥 Streak: <strong id="typing-streak">0</strong></span>
                </div>
            </div>
            <div class="problem-box">
                <h2>⌨️ Typing Quest - ${stageTitle}</h2>
                
                <!-- Fixed target display that stays completely still -->
                <div id="typing-target" style="font-size: 1.6rem; margin: 15px auto; font-weight: bold; letter-spacing: 0.5px; font-family: monospace; max-width: 90%; background: #f8f9fa; padding: 15px; border-radius: 8px; border: 2px solid #cbd5e1; word-break: break-word; white-space: normal; text-align: center; color: #1e293b;"></div>
                
                <!-- Live tracking feedback display showing what you've typed -->
                <div id="typing-live-preview" style="font-size: 1.4rem; margin: 10px auto; font-family: monospace; min-height: 40px; max-width: 90%; word-break: break-word; white-space: normal; text-align: center;"></div>

                <!-- Extra instruction line specifically for uppercase shift hints in Stage 1 -->
                <div id="shift-hint" style="font-size: 1rem; color: #2563eb; font-weight: bold; margin-bottom: 15px; min-height: 20px;"></div>

                <div class="input-row">
                    <input type="text" id="typing-input" placeholder="Type what you see above..." autocomplete="off" autofocus spellcheck="false" oninput="checkTypingInput()" style="font-size: 1.4rem; padding: 10px; width: 90%; max-width: 500px; text-align: center;">
                </div>
                <p id="typing-feedback" style="margin-top: 15px; font-weight: bold; min-height: 24px;"></p>
            </div>
        `;
    }

    generateNextTypingPrompt();
}

function generateNextTypingPrompt() {
    const inputField = document.getElementById("typing-input");
    const feedback = document.getElementById("typing-feedback");
    const shiftHint = document.getElementById("shift-hint");
    const targetDisplay = document.getElementById("typing-target");
    
    if (inputField) {
        inputField.value = "";
        inputField.focus();
    }
    if (feedback) feedback.innerText = "";

    if (currentTypingStage === 1) {
        const charPool = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,!?-/";
        currentTypingTarget = charPool[Math.floor(Math.random() * charPool.length)];
        
        if (shiftHint) {
            if (currentTypingTarget >= 'A' && currentTypingTarget <= 'Z') {
                shiftHint.innerText = `💡 Tip: Hold Shift + ${currentTypingTarget}`;
            } else {
                shiftHint.innerText = "";
            }
        }
    } 
    else if (currentTypingStage === 2) {
        if (shiftHint) shiftHint.innerText = "";

        const words2 = [
            "am", "an", "as", "at", "be", "by", "do", "go", "he", "hi", 
            "if", "in", "is", "it", "me", "my", "no", "of", "on", "or", 
            "so", "to", "up", "us", "we"
        ];

        const words3 = [
            "all", "and", "ant", "any", "are", "arm", "art", "bad", "bag", "bat", 
            "bed", "bee", "big", "box", "boy", "bus", "can", "cap", "cat", "cow", 
            "cup", "cut", "day", "dog", "dry", "ear", "eat", "egg", "end", "eye", 
            "fan", "far", "fat", "fly", "for", "fun", "get", "got", "hat", "her", 
            "him", "his", "hot", "hug", "ice", "jar", "job", "key", "kid", "lap", 
            "leg", "let", "log", "man", "map", "mat", "mix", "mom", "mud", "net", 
            "new", "not", "nut", "off", "old", "one", "our", "out", "owl", "pan", 
            "pen", "pet", "pig", "pin", "pop", "pot", "red", "run", "sad", "saw", 
            "say", "sea", "see", "sit", "sky", "sun", "ten", "the", "toe", "top", 
            "toy", "try", "two", "van", "was", "way", "wet", "who", "win", "yes", 
            "you", "zoo"
        ];

        const words4 = [
            "also", "away", "baby", "back", "ball", "bank", "bear", "bell", "best", "bird", 
            "blue", "boat", "book", "both", "bush", "cake", "call", "camp", "card", "care", 
            "city", "cold", "come", "cook", "cool", "corn", "dark", "dear", "deep", "desk", 
            "door", "duck", "each", "fall", "farm", "fast", "feet", "find", "fire", "fish", 
            "food", "foot", "frog", "from", "game", "girl", "give", "glad", "good", "grow", 
            "hand", "have", "head", "hear", "help", "here", "home", "hope", "horn", "jump", 
            "just", "keep", "kind", "king", "kite", "know", "lake", "lamp", "land", "last", 
            "leaf", "left", "like", "lion", "list", "look", "love", "made", "make", "many", 
            "milk", "moon", "more", "much", "must", "name", "nest", "nice", "once", "open", 
            "over", "park", "path", "play", "rain", "read", "ride", "ring", "road", "rock", 
            "room", "rose", "same", "sand", "ship", "shoe", "show", "sing", "snow", "some", 
            "song", "star", "stop", "swim", "tall", "team", "then", "them", "they", "this", 
            "time", "tree", "turn", "walk", "warm", "wash", "wind", "wish", "wood", "work", 
            "year", "your", "zoom"
        ];

        const words5 = [
            "about", "above", "actor", "adult", "after", "again", "agent", "alarm", "album", "alert", 
            "alley", "allow", "alone", "along", "aloud", "angel", "anger", "angle", "angry", "ankle", 
            "apple", "apply", "arena", "arrow", "aside", "asset", "audio", "avoid", "awake", "award", 
            "aware", "bacon", "badge", "baker", "basic", "basin", "batch", "beach", "begin", "being", 
            "below", "bench", "berry", "birth", "black", "blade", "blame", "blank", "blast", "blend", 
            "bless", "blind", "block", "blood", "bloom", "board", "boast", "bonus", "boost", "booth", 
            "bound", "brain", "brand", "bread", "break", "brick", "bride", "brief", "bring", "brisk", 
            "broad", "brown", "brush", "buddy", "build", "bumpy", "bunch", "burst", "cabin", "cable", 
            "camel", "canal", "candy", "canoe", "cargo", "carry", "catch", "cause", "cedar", "chain", 
            "chair", "chalk", "charm", "chart", "chase", "cheap", "check", "cheek", "cheer", "chess", 
            "chest", "chick", "chief", "child", "chill", "china", "claim", "clamp", "clash", "class", 
            "clean", "clear", "climb", "clock", "close", "cloth", "cloud", "clown", "coach", "coast", 
            "color", "count", "cover", "crack", "craft", "crane", "crash", "crawl", "crazy", "cream", 
            "creek", "crisp", "cross", "crowd", "crown", "crust", "curve", "daily", "dance", "dirty", 
            "donut", "doubt", "draft", "drain", "drama", "dream", "dress", "drink", "drive", "eager", 
            "early", "earth", "eight", "elbow", "empty", "enjoy", "enter", "equal", "event", "every", 
            "exact", "extra", "fairy", "faith", "fancy", "fault", "favor", "feast", "field", "fight", 
            "final", "first", "flame", "flash", "fleet", "float", "flock", "flood", "floor", "flour", 
            "flute", "focus", "force", "frame", "fresh", "front", "frost", "fruit", "funny", "giant", 
            "glass", "globe", "glove", "grace", "grade", "grain", "grand", "grape", "grass", "grave", 
            "great", "green", "group", "guard", "guess", "guide", "happy", "heart", "heavy", "hello", 
            "honey", "horse", "house", "image", "issue", "jeans", "jelly", "juice", "knife", "knock", 
            "lemon", "light", "lunch", "magic", "money", "monkey", "month", "mouse", "music", "night", 
            "noise", "ocean", "paper", "party", "peach", "phone", "photo", "piano", "plant", "plate", 
            "point", "puppy", "queen", "quiet", "radio", "rainy", "reach", "right", "river", "robot", 
            "round", "school", "seven", "shape", "shark", "sheep", "shine", "shirt", "short", "skate", 
            "sleep", "slide", "smart", "smile", "snake", "space", "speak", "spoon", "sport", "stand", 
            "start", "state", "stone", "story", "sweet", "table", "thank", "there", "these", "thing", 
            "think", "three", "tiger", "today", "touch", "train", "truck", "under", "visit", "voice", 
            "water", "where", "which", "white", "world", "write", "young"
        ];

        const words6 = [
            "action", "animal", "around", "artist", "asleep", "autumn", "bakery", "banana", "basket", "beaver", 
            "before", "behind", "better", "blanket", "bottle", "bounce", "branch", "bridge", "bright", "butter", 
            "button", "camera", "candle", "carrot", "castle", "cereal", "chance", "change", "cheese", "cherry", 
            "circle", "clever", "closet", "clouds", "cookie", "corner", "cotton", "crayon", "dinner", "doctor", 
            "donkey", "dragon", "driver", "engine", "family", "farmer", "father", "fellow", "finger", "finish", 
            "flower", "forest", "freeze", "friend", "garden", "gentle", "giraffe", "hammer", "happen", "harbor", 
            "helmet", "hidden", "holiday", "hungry", "insect", "island", "jacket", "jungle", "kitten", "ladder", 
            "leader", "leaves", "lemon", "lesson", "letter", "little", "lizard", "magnet", "marble", "market", 
            "meadow", "melody", "minute", "mirror", "monkey", "mother", "muffin", "nature", "needle", "noodle", 
            "number", "orange", "palace", "parade", "parent", "parrot", "pencil", "pepper", "person", "picnic", 
            "pigeon", "pillow", "planet", "pocket", "potato", "puddle", "puppet", "purple", "puzzle", "rabbit", 
            "racket", "radish", "rescue", "ribbon", "riddle", "river", "rocket", "runner", "safety", "sailor", 
            "school", "scream", "season", "second", "secret", "shadow", "shovel", "signal", "silver", "simple", 
            "singer", "sister", "smooth", "soccer", "spider", "sponge", "spring", "square", "squash", "stable", 
            "statue", "street", "string", "stripe", "summer", "sunset", "supper", "system", "teacher", "tennis", 
            "ticket", "tomato", "tongue", "tooth", "towel", "tractor", "traffic", "travel", "turtle", "twelve", 
            "twenty", "valley", "velvet", "violin", "wagon", "walnut", "wander", "warmth", "window", "winter", 
            "wisdom", "wonder", "wooden", "yellow", "yogurt", "zipper"
        ];
        
        let selectedPool = words2;
        if (currentWordLengthOption === '2') selectedPool = words2;
        else if (currentWordLengthOption === '3') selectedPool = words3;
        else if (currentWordLengthOption === '4') selectedPool = words4;
        else if (currentWordLengthOption === '5') selectedPool = words5;
        else if (currentWordLengthOption === '6') selectedPool = words6;
        else if (currentWordLengthOption === 'mixed') {
            const allPools = [words2, words3, words4, words5, words6];
            selectedPool = allPools[Math.floor(Math.random() * allPools.length)];
        }

        currentTypingTarget = selectedPool[Math.floor(Math.random() * selectedPool.length)];
    } 
    else if (currentTypingStage === 3) {
        if (shiftHint) shiftHint.innerText = "";

        const characters = [
            "Batman", "Superman", "Robin", "Joker", "Flash", "Green Lantern", 
            "The Rock", "Jey Uso", "Jimmy Uso", "The Undertaker", "Roman Reigns", 
            "Jacob Fatu", "CM Punk", "Cody Rhodes", "Spiderman", "Hulk", "Ironman", 
            "Thor", "Bane", "Kyrie Irving", "Michael Jordan", "Kevin Durant", 
            "Curry", "Baraka", "Raiden", "Liu Kang", "Johnny Cage", "Miguel", 
            "Robby", "Daniel LaRusso", "Cobra Kai", "Red Ranger", "Green Ranger", "Blue Ranger", 
            "Black Ranger", "Naruto", "Sasuke", "Drago", "Creed", "Rocky", "Venom"
        ];

        const interests = ["sports", "movies", "games", "wrestling", "karate", "football", "basketball", "fighting", "cooking", "music", "outdoors"];

        const shortTemplates = [
            `{char1} and {char2} studied {interest}.`,
            `{char1} asked {char2} about {interest}.`,
            `{char1} helped {char2} with {interest}.`,
            `{char1} loves {interest}.`,
            `{char2} practiced {interest} with {char1}.`,
            `{char1} finished his homework on {interest}.`,
            `{char1} and {char2} love {interest}.`,
            `{char1} talked about {interest}.`,
            `{char2} learned {interest} quickly.`,
            `{char1} enjoys {interest} every day.`,
            `{char1} practiced {interest} today.`,
            `{char2} mastered {interest}.`,
            `{char1} read about {interest}.`,
            `{char2} shared notes on {interest}.`,
            `{char1} reviewed {interest}.`,
            `{char2} taught {interest}.`,
            `{char1} wrote about {interest}.`,
            `{char2} skipped {interest}.`,
            `{char1} explored {interest}.`,
            `{char2} discussed {interest}.`,
            `{char1} practiced {interest} alone.`,
            `{char2} skipped homework for {interest}.`,
            `{char1} loves studying {interest}.`,
            `{char2} tested {char1} on {interest}.`,
            `{char1} finished {interest} early.`,
            `{char2} explained {interest} clearly.`,
            `{char1} forgot his {interest} notes.`,
            `{char2} remembered {interest} facts.`,
            `{char1} completed {interest} drills.`,
            `{char2} aced the {interest} test.`
        ];

        const mediumTemplates = [
            `While sitting at the kitchen table trying to finish his school work, {char1} asked {char2} for help with {interest}.`,
            `After spending the entire afternoon completing difficult homework assignments, {char1} and {char2} decided to relax by enjoying some {interest}.`,
            `During a quiet study session at the desk, {char1} surprised {char2} by finishing all of the math problems about {interest}.`,
            `Because they both wanted to do well on their upcoming school project, {char1} and {char2} studied {interest} together all evening.`,
            `While taking a short break from reading a long school book, {char1} laughed out loud at a funny story about {interest} told by {char2}.`,
            `{char1} shouted across the classroom during group work, making sure to check all of his answers for the {interest} assignment with {char2}.`,
            `{char1} loves listening to calm background music while working hard on school assignments alongside his friend {char2}.`,
            `Instead of procrastinating on his homework, {char1} decided to sit down early and finish reading about {interest} with {char2}.`,
            `{char1} spent the whole weekend organizing his school supplies and practicing {interest} with his best friend {char2}.`,
            `Whenever {char1} finishes his school work early, {char2} always rewards him with some free time to practice {interest}.`,
            `{char1} brought his laptop to the library so he could research {interest} while {char2} worked on history.`,
            `After failing his first quiz, {char1} asked {char2} to tutor him in {interest} every single afternoon.`,
            `{char2} found an old textbook filled with secret notes about {interest} and showed them excitedly to {char1}.`,
            `Even though the exam was extremely difficult, {char1} felt fully prepared because {char2} helped him review {interest}.`,
            `{char1} and {char2} spent hours arguing over the best way to solve the complex {interest} problem before finally agreeing.`,
            `When the teacher announced a pop quiz on {interest}, {char1} panicked and immediately looked across the room at {char2}.`,
            `{char1} packed his backpack with extra pencils, a notebook, and a special guidebook dedicated entirely to {interest}.`,
            `While walking home from school, {char1} and {char2} debated passionately about the history and future of {interest}.`,
            `{char2} promised to share his class notes with {char1} if he helped him finish his project about {interest}.`,
            `The library was completely silent until {char1} dropped his heavy folder filled with research papers on {interest}.`,
            `{char1} stayed up past midnight drinking coffee and typing out a massive report on {interest} for class.`,
            `{char2} walked over to the desk, handed {char1} a red pen, and told him to fix his {interest} equations.`,
            `Whenever {char1} felt overwhelmed by school, he would take a deep breath and focus entirely on {interest}.`,
            `{char1} and {char2} created a study group to help other classmates understand the fundamentals of {interest}.`,
            `The school bell rang loudly, signaling the end of class just as {char1} finished his presentation on {interest}.`,
            `{char2} smiled proudly as {char1} finally solved the tricky puzzle related to {interest} without any hints.`,
            `{char1} organized his desk drawers neatly before sitting down to read an advanced book about {interest}.`,
            `During the group presentation, {char1} spoke clearly about {interest} while {char2} managed the visual slides.`,
            `{char1} forgot his calculator at home, forcing him to borrow one from {char2} during their {interest} exam.`,
            `{char2} encouraged {char1} to keep trying even when the homework questions about {interest} got too hard.`
        ];

        const longTemplates = [
            `Desperate to pass the final exam and avoid summer school, {char1} begged {char2} to stay after class and explain the complex rules of {interest} in detail.`,
            `With only ten minutes left before the submission deadline, {char1} frantically typed his final sentence about {interest} while {char2} nervously watched the clock.`,
            `Recognizing that {char1} was struggling to keep up with the advanced coursework, {char2} spent his entire weekend creating custom flashcards to make learning {interest} much easier.`,
            `As the heavy rain tapped against the classroom window, {char1} and {char2} completely lost track of time while building an intricate science model based on {interest}.`,
            `Eager to impress their strict professor, {char1} and {char2} spent countless hours in the campus library researching obscure historical facts concerning {interest}.`,
            `Throwing his backpack onto the bedroom floor, {char1} collapsed into his rolling chair and immediately pulled up a digital simulator to practice {interest} alongside {char2}.`,
            `Convinced that {interest} was the most fascinating topic in the entire school curriculum, {char1} wrote a twenty-page essay and insisted that {char2} read every single word.`,
            `After accidentally deleting his entire digital project file, {char1} had to rely on {char2} to recreate the lost data structures regarding {interest} from memory.`,
            `Before heading out to the school assembly, {char1} made sure his locker was organized and double-checked that his homework assignment on {interest} was safely tucked inside his folder.`,
            `Surrounded by stacks of reference books and empty coffee cups, {char1} and {char2} debated the core principles of {interest} late into the stormy Tuesday night.`,
            `To celebrate finishing their grueling semester exams, {char1} and {char2} rewarded themselves by spending the entire weekend diving deep into their favorite hobby involving {interest}.`,
            `Walking briskly down the crowded school hallway, {char1} balanced a stack of heavy textbooks while quizzing {char2} on important vocabulary terms related to {interest}.`,
            `Even though he would rather have been playing outside in the sunshine, {char1} forced himself to sit at his desk and complete every single practice exercise for {interest}.`,
            `{char2} gently placed a hand on {char1}'s shoulder, offering words of encouragement when {char1} became visibly frustrated while trying to master {interest}.`,
            `Hoping to secure the top grade in the class, {char1} worked diligently on his extra-credit project about {interest} while {char2} proofread his rough drafts for grammar errors.`,
            `The flickering fluorescent lights of the study hall buzzed loudly overhead as {char1} and {char2} poured over intricate diagrams explaining the mechanics of {interest}.`,
            `Realizing they had completely misinterpreted the assignment instructions, {char1} and {char2} had to completely rewrite their research paper on {interest} the night before it was due.`,
            `{char1} adjusted his glasses, leaned closely over the wooden table, and began tracing out the complex flowchart detailing every stage of {interest} for {char2}.`,
            `Whenever {char1} felt like giving up on his difficult schoolwork, he thought about how proud {char2} would be once he finally understood {interest}.`,
            `With stacks of colored index cards scattered across the carpet, {char1} and {char2} played a competitive trivia game to test their knowledge of {interest} before the big test.`,
            `Staring blankly at the computer screen, {char1} tried desperately to figure out why his code for the {interest} project kept crashing until {char2} spotted the missing semicolon.`,
            `{char2} organized a surprise study party at his house, complete with snacks and drinks, to help {char1} prepare for the rigorous {interest} evaluation.`,
            `Following a long lecture that left most of the classroom confused, {char1} and {char2} stayed behind to ask the professor clarifying questions about {interest}.`,
            `{char1} carefully sharpened every pencil in his pouch before sitting down at the kitchen island to draft his comprehensive presentation outline regarding {interest}.`,
            `Determined not to let his team down, {char1} spent his lunch period reviewing complex {interest} theories while {char2} gathered materials for their afternoon lab.`,
            `The classroom grew entirely silent except for the rhythmic clicking of keyboards as {char1} and {char2} raced against the clock to finish their {interest} challenges.`,
            `{char1} sighed heavily, rubbed his tired eyes, and took a quick stretch break before diving back into his heavy textbook about {interest} with {char2}.`,
            `By combining their unique skills and dividing the workload evenly, {char1} and {char2} managed to finish their massive {interest} project two days ahead of schedule.`,
            `{char2} handed {char1} a freshly printed study guide filled with charts, diagrams, and practice questions designed to make mastering {interest} a breeze.`,
            `Refusing to let a single mistake slip past him, {char1} meticulously proofread every paragraph of his {interest} essay while {char2} timed him with a stopwatch.`
        ];

        let selectedTemplates = shortNamesPool = [];
        if (currentSentenceLengthOption === 'short') {
            selectedTemplates = shortTemplates;
        } else if (currentSentenceLengthOption === 'medium') {
            selectedTemplates = mediumTemplates;
        } else if (currentSentenceLengthOption === 'long') {
            selectedTemplates = longTemplates;
        } else {
            selectedTemplates = [...shortTemplates, ...mediumTemplates, ...longTemplates];
        }

        const randomTemplate = selectedTemplates[Math.floor(Math.random() * selectedTemplates.length)];
        let c1 = characters[Math.floor(Math.random() * characters.length)];
        let c2 = characters[Math.floor(Math.random() * characters.length)];
        while (c2 === c1) {
            c2 = characters[Math.floor(Math.random() * characters.length)];
        }
        let intst = interests[Math.floor(Math.random() * interests.length)];

        currentTypingTarget = randomTemplate
            .replace(/{char1}/g, c1)
            .replace(/{char2}/g, c2)
            .replace(/{interest}/g, intst);
    }

    if (targetDisplay) {
        targetDisplay.innerText = currentTypingTarget;
    }

    renderHighlightedPreview("");
}

// Renders the live typing feedback in a smooth, continuous highlight style
function renderHighlightedPreview(userText) {
    const previewDisplay = document.getElementById("typing-live-preview");
    if (!previewDisplay) return;

    if (!userText) {
        previewDisplay.innerHTML = "";
        return;
    }

    let htmlOutput = "";
    let currentGroupType = null; // 'correct' or 'incorrect'
    let currentGroupText = "";

    for (let i = 0; i < userText.length; i++) {
        let typedChar = userText[i];
        let displayChar = typedChar === " " ? "&nbsp;" : typedChar;
        
        let isCorrect = (i < currentTypingTarget.length && typedChar === currentTypingTarget[i]);
        let groupType = isCorrect ? "correct" : "incorrect";

        if (groupType === currentGroupType) {
            currentGroupText += displayChar;
        } else {
            if (currentGroupText !== "") {
                htmlOutput += wrapGroup(currentGroupType, currentGroupText);
            }
            currentGroupType = groupType;
            currentGroupText = displayChar;
        }
    }
    
    if (currentGroupText !== "") {
        htmlOutput += wrapGroup(currentGroupType, currentGroupText);
    }

    previewDisplay.innerHTML = htmlOutput;
}

// Helper to wrap continuous chunks smoothly without breaking letter-spacing
function wrapGroup(type, text) {
    if (type === "correct") {
        return `<span style="background-color: #d1fae5; color: #065f46; padding: 2px 0; border-radius: 2px;">${text}</span>`;
    } else {
        return `<span style="background-color: #fee2e2; color: #991b1b; padding: 2px 0; border-radius: 2px;">${text}</span>`;
    }
}

function checkTypingInput() {
    const inputField = document.getElementById("typing-input");
    const feedback = document.getElementById("typing-feedback");
    if (!inputField) return;

    const userText = inputField.value;

    // Always update the live highlighting as they type or backspace
    renderHighlightedPreview(userText);

    // If they haven't finished typing the full length of the target yet, do nothing (allow backspacing/editing)
    if (userText.length < currentTypingTarget.length) {
        if (feedback) feedback.innerText = "";
        return;
    }

    // Once the user has typed enough characters to match the length, check if it's correct
    if (userText === currentTypingTarget) {
        typingScore += 10;
        typingStreak += 1;

        document.getElementById("typing-score").innerText = typingScore;
        document.getElementById("typing-streak").innerText = typingStreak;

        triggerSuccessEffects(typingStreak);

        setTimeout(() => {
            generateNextTypingPrompt();
        }, 1200); 
    } 
    // If they typed the full length but it doesn't match, or they hit enter/went over, mark as wrong
    else if (userText.length >= currentTypingTarget.length) {
        typingStreak = 0;
        const streakEl = document.getElementById("typing-streak");
        if (streakEl) streakEl.innerText = typingStreak;

        triggerErrorEffects();
    }
}

// Success animations, screen flash, and large motivational popup banner
function triggerSuccessEffects(streak) {
    const problemBox = document.querySelector(".problem-box");

    // 1. Flash the problem box green
    if (problemBox) {
        problemBox.style.transition = "background-color 0.4s ease";
        problemBox.style.backgroundColor = "#d1fae5"; 
        setTimeout(() => {
            problemBox.style.backgroundColor = "";
        }, 1000);
    }

    // 2. Determine motivational text (repeats every 5 or 10, with fire emojis for streaks)
    let motivationMsg = "🎉 Awesome Job!";
    
    if (streak > 0 && streak % 10 === 0) {
        motivationMsg = `🚀 UNSTOPPABLE! 🚀\n${streak} in a Row - Rockstar!!`;
    } else if (streak > 0 && streak % 5 === 0) {
        motivationMsg = `🔥 YOU'RE ON FIRE! 🔥\n${streak} Correct in a Row!`;
    }

    // 3. Create a large, unmissable pop-up celebration banner in the center of the screen
    showBigCelebrationBanner(motivationMsg, "#065f46");

    // 4. Trigger celebratory confetti/sparkle burst
    triggerConfettiBurst();
}

// Error animations (red flash and "Try again")
function triggerErrorEffects() {
    const problemBox = document.querySelector(".problem-box");
    
    // 1. Flash problem box red
    if (problemBox) {
        problemBox.style.transition = "background-color 0.2s ease";
        problemBox.style.backgroundColor = "#fee2e2"; 
        setTimeout(() => {
            problemBox.style.backgroundColor = "";
        }, 500);
    }

    // 2. Show large "Try Again" pop-up banner
    showBigCelebrationBanner("❌ Try Again! ❌", "#991b1b");
}

// Helper to display a large popup motivational message
function showBigCelebrationBanner(message, bgColor) {
    const container = document.getElementById("typing-game-area") || document.body;
    
    // Remove any existing banner if it's still there
    const existingBanner = document.getElementById("big-motivation-banner");
    if (existingBanner) existingBanner.remove();

    const banner = document.createElement("div");
    banner.id = "big-motivation-banner";
    banner.innerHTML = message.replace("\n", "<br>");
    banner.style.position = "absolute";
    banner.style.top = "40%";
    banner.style.left = "50%";
    banner.style.transform = "translate(-50%, -50%) scale(0.5)";
    banner.style.background = bgColor;
    banner.style.color = "#ffffff";
    banner.style.padding = "20px 40px";
    banner.style.borderRadius = "16px";
    banner.style.fontSize = "1.8rem";
    banner.style.fontWeight = "bold";
    banner.style.textAlign = "center";
    banner.style.boxShadow = "0 10px 25px rgba(0,0,0,0.3)";
    banner.style.zIndex = "1000";
    banner.style.transition = "transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.3s ease";
    banner.style.opacity = "0";
    banner.style.pointerEvents = "none";

    container.style.position = "relative";
    container.appendChild(banner);

    // Animate pop-in
    setTimeout(() => {
        banner.style.transform = "translate(-50%, -50%) scale(1)";
        banner.style.opacity = "1";
    }, 20);

    // Fade out and remove after a short delay
    setTimeout(() => {
        banner.style.transform = "translate(-50%, -50%) scale(0.8)";
        banner.style.opacity = "0";
        setTimeout(() => banner.remove(), 300);
    }, 900);
}

function triggerConfettiBurst() {
    const container = document.getElementById("typing-game-area");
    if (!container) return;

    const burst = document.createElement("div");
    burst.innerText = "🎉🔥🎉🔥🎉🔥🎉🔥🎉🔥🎉🔥🎉🔥";
    burst.style.position = "absolute";
    burst.style.fontSize = "2.2rem";
    burst.style.left = `${Math.random() * 60 + 20}%`;
    burst.style.top = "25%";
    burst.style.transition = "all 1s ease-out";
    burst.style.pointerEvents = "none";
    burst.style.zIndex = "10";
    
    container.style.position = "relative";
    container.appendChild(burst);

    setTimeout(() => {
        burst.style.transform = "translateY(-50px) scale(1.6)";
        burst.style.opacity = "0";
    }, 20);

    setTimeout(() => {
        burst.remove();
    }, 1000);
}