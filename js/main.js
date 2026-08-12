// Switches from the Dashboard view to the requested subject workspace
function startSubject(subjectName) {
    document.getElementById("dashboard-view").classList.add("hidden");
    document.getElementById("lesson-view").classList.remove("hidden");
    document.getElementById("lesson-title").innerText = subjectName + " Lab";

    // Call the specific app initializer depending on the subject clicked
    if (subjectName === 'Math') {
        initMathLab();
    } else if (subjectName === 'Typing') {
        // initTypingQuest();  <-- We will add this later when we build typing!
    } else if (subjectName === 'Reading') {
        // initReadingLab();   <-- We will add this later when we build reading!
    }
}

// Global function to return back to the main dashboard from any app page
function goHome() {
    document.getElementById("lesson-view").classList.add("hidden");
    document.getElementById("dashboard-view").classList.remove("hidden");
}