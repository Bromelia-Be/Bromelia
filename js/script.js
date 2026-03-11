console.log('hallo script.js')

/* Open when someone clicks on the span element */
function openNav() {
    const width = window.innerWidth;
    let overlayWidth;

    // Responsive overlay width
    if (width <= 600) {
        overlayWidth = "100%"; // Full width on mobile
    } else if (width <= 1024) {
        overlayWidth = "50%"; // Half width on tablets
    } else {
        overlayWidth = "33%"; // Original 1/3 on desktop
    }

    document.getElementById("myNav").style.width = overlayWidth;
    document.getElementById("overlayBackground").style.display = "block";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    document.getElementById("overlayBackground").style.display = "none";
}

// Close overlay when window is resized
window.addEventListener('resize', function () {
    if (document.getElementById("myNav").style.width !== "0%") {
        closeNav();
    }
});