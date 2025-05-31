// Event listener for DOM content loaded
document.addEventListener("DOMContentLoaded", function () {
    
    // Toggle between Sign Up and Sign In forms
    const toggleForm = document.getElementById('toggle-form');
    const formTitle = document.getElementById('form-title');
    const toggleText = document.getElementById('toggle-text');
    const signupForm = document.getElementById('signupForm');
    const loginForm = document.getElementById('loginForm');
    
    toggleForm.addEventListener('click', function () {
        // Toggle between Sign Up and Sign In
        if (formTitle.textContent === "Sign Up") {
            formTitle.textContent = "Sign In";
            toggleText.innerHTML = "Don't have an account? <a href='#' id='toggle-form'>Sign up</a>";
            signupForm.style.display = "none";
            loginForm.style.display = "block";
        } else {
            formTitle.textContent = "Sign Up";
            toggleText.innerHTML = "Already have an account? <a href='#' id='toggle-form'>Sign in</a>";
            signupForm.style.display = "block";
            loginForm.style.display = "none";
        }
    });

    // Handle 'Your Preference' section visibility toggle
    function showOptions(preference) {
        const forHer = document.getElementById('forHer');
        const forHim = document.getElementById('forHim');
        
        if (preference === 'forHer') {
            forHer.classList.remove('hidden');
            forHim.classList.add('hidden');
        } else if (preference === 'forHim') {
            forHim.classList.remove('hidden');
            forHer.classList.add('hidden');
        }
    }

    // Virtual Try-On functionality
    const openCameraButton = document.getElementById('openCamera');
    const captureImageButton = document.getElementById('captureImage');
    const uploadImage = document.getElementById('uploadImage');
    const video = document.getElementById('video');
    const canvas = document.getElementById('canvas');
    
    // Open Camera
    openCameraButton.addEventListener('click', function () {
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true })
                .then(function (stream) {
                    video.srcObject = stream;
                    video.style.display = 'block';
                    canvas.style.display = 'none';
                    captureImageButton.style.display = 'block';
                }).catch(function (error) {
                    console.error('Error accessing camera: ', error);
                });
        } else {
            alert("Your browser does not support camera access.");
        }
    });

    // Capture Image from camera
    captureImageButton.addEventListener('click', function () {
        const context = canvas.getContext('2d');
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        video.style.display = 'none';
        canvas.style.display = 'block';
        captureImageButton.style.display = 'none';
    });

    // Upload Image
    uploadImage.addEventListener('change', function () {
        const file = uploadImage.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function () {
                const img = new Image();
                img.onload = function () {
                    const context = canvas.getContext('2d');
                    canvas.width = img.width;
                    canvas.height = img.height;
                    context.drawImage(img, 0, 0);
                    canvas.style.display = 'block';
                };
                img.src = reader.result;
            };
            reader.readAsDataURL(file);
        }
    });
});


function showOptions(id) {
    document.getElementById('forHer').classList.add('hidden');
    document.getElementById('forHim').classList.add('hidden');
  
    document.getElementById(id).classList.remove('hidden');
  }

  const openCameraBtn = document.getElementById("openCamera");
const captureBtn = document.getElementById("captureImage");
const video = document.getElementById("video");
const canvas = document.getElementById("canvas");

openCameraBtn.addEventListener("click", () => {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
      video.srcObject = stream;
      video.style.display = "block";
      captureBtn.style.display = "inline-block";
    })
    .catch(err => {
      alert("Camera access denied or unavailable.");
      console.error(err);
    });
});

captureBtn.addEventListener("click", () => {
  const context = canvas.getContext("2d");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  context.drawImage(video, 0, 0);
  canvas.style.display = "block";
});



  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");
  const showSignup = document.getElementById("show-signup");
  const showLogin = document.getElementById("show-login");

  showSignup.addEventListener("click", (e) => {
    e.preventDefault();
    loginForm.classList.add("hidden");
    signupForm.classList.remove("hidden");
  });

  showLogin.addEventListener("click", (e) => {
    e.preventDefault();
    signupForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
  });


  document.addEventListener('DOMContentLoaded', function () {
    const showSignupBtn = document.getElementById('show-signup');
    const showLoginBtn = document.getElementById('show-login');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
  
    showSignupBtn.addEventListener('click', function (e) {
      e.preventDefault();
      loginForm.classList.add('hidden');
      signupForm.classList.remove('hidden');
    });
  
    showLoginBtn.addEventListener('click', function (e) {
      e.preventDefault();
      signupForm.classList.add('hidden');
      loginForm.classList.remove('hidden');
    });
  });
  