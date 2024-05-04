function showImage(event) {
    // Prevent default link behavior
    event.preventDefault();
    
    // Get the image element
    var img = document.getElementById("clickyFinger");
    
    // Toggle the display style to show/hide the image
    img.style.display = (img.style.display === "none" ? "block" : "none");
}