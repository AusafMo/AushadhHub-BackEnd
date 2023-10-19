// script.js
document.getElementById('file').addEventListener('change', function () 
{
    const fileInput = document.getElementById('file');
    const imagePreview = document.getElementById('image');
    const imageContainer = document.getElementById('something');

    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const reader = new FileReader();

        reader.onload = function () {
            imagePreview.src = reader.result;
            imageContainer.style.display = 'block';
            svgImage.style.display = 'none'; // Hide the SVG image
        }

        reader.readAsDataURL(file);
    } 
    else {
        imagePreview.src = '';
        imageContainer.style.display = 'none';
        svgImage.style.display = 'block'; // Show the SVG image
    }
});
