let captchaChecked = false;

function beforeSubmit(event) {
  
  if (captchaChecked) {
    
  } else {
    alert('check reCAPTCHA');
    event.preventDefault();
  }
}

function captchaSuccess() {
  captchaChecked = true;
}

