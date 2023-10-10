// A function that ensures the Document Object Model (DOM) is ready before executing the provided callback
var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}

// Call the ready function to set the height of the header when the DOM is ready
ready(() => {
    // Set the height of the header to match the height of the window
    document.querySelector(".header").style.height = window.innerHeight + "px";
})

// Function to open a PDF in a new window/tab
function openPdf(pdfFileName) {
    // Construct the full URL to the PDF file based on the provided file name
    var pdfUrl = pdfFileName;

    // Open the PDF in a new window/tab
    window.open(pdfUrl, '_blank');
}

// Function to open an image in a new window with a larger size
function openImage(imageSrc) {
    // Open the image in a new window with a larger size
    var newWindow = window.open(imageSrc, '_blank');
    newWindow.focus();
}

