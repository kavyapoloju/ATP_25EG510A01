let canResend = false;
let countdown = 10;

function sendOTP() {
  if (!canResend && countdown !== 10) {
    console.log("Please wait until countdown finishes to resend OTP.");
    return;
  }

  console.log("OTP Sent Successfully");
  canResend = false;
  countdown = 10;

  const interval = setInterval(() => {
    console.log(`Resend available in: ${countdown} seconds`);
    countdown--;

    if (countdown < 0) {
      clearInterval(interval);
      canResend = true;
      console.log("You can now resend OTP.");
    }
  }, 1000);
}

// Initial send
sendOTP();

// Try resending after 3 seconds (will fail)
setTimeout(() => {
  sendOTP();
}, 3000);

// Try resending after 12 seconds (will succeed)
setTimeout(() => {
  sendOTP();
}, 12000);