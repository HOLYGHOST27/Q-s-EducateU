// Switches from the Dashboard view to the requested subject workspace
function startSubject(subjectName) {
    document.getElementById("dashboard-view").classList.add("hidden");
    document.getElementById("lesson-view").classList.remove("hidden");
    document.getElementById("lesson-title").innerText = subjectName + " Lab";

    // Switch background to solid color for courses
    document.body.classList.remove("dashboard-bg");

    // Call the specific app initializer depending on the subject clicked
    if (subjectName === 'Math') {
        initMathLab();
    } else if (subjectName === 'Typing') {
        initTypingQuest(); 
    } else if (subjectName === 'Reading') {
        initReadingLab(); 
    }
}

// Initializer for Typing Quest workspace
function initTypingQuest() {
    const workspace = document.getElementById("lesson-workspace");
    if (!workspace) return;
    
    workspace.innerHTML = `
        <div class="subject-workspace">
            <h2>⌨️ Typing Quest</h2>
            <p class="section-subtitle">Coming soon! Practice your typing skills here.</p>
        </div>
    `;
}

// Initializer for Reading & Sight Words workspace
function initReadingLab() {
    // This now triggers the reading & sight words interface from reading.js
    if (typeof initReadingModule === 'function') {
        initReadingModule();
    } else {
        const workspace = document.getElementById("lesson-workspace");
        if (!workspace) return;
        workspace.innerHTML = `
            <div class="subject-workspace">
                <h2>📖 Reading & Sight Words</h2>
                <p class="section-subtitle">Error: reading.js not loaded properly.</p>
            </div>
        `;
    }
}

// Global function to return back to the main dashboard from any app page
function goHome() {
    document.getElementById("lesson-view").classList.add("hidden");
    document.getElementById("dashboard-view").classList.remove("hidden");

    // Bring back the animated gradient for the main dashboard
    document.body.classList.add("dashboard-bg");
}

// Ensure the animated background is active when the app first loads
window.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("dashboard-bg");
});