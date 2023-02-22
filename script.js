var btnposition = "right";

function checkValidation() {
  const email = document.forms["signin-form"]["email"].value;
  const password = document.forms["signin-form"]["pass"].value;
  let button = document.getElementById("submit-btn").style;
  const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (
    (!email.match(emailPattern) || password.length < 8) &&
    btnposition == "right"
  ) {
    button.float = "left";
    btnposition = "left";
    return false;
  } else if (
    (!email.match(emailPattern) || password.length < 8) &&
    btnposition == "left"
  ) {
    button.float = "right";
    btnposition = "right";
    return false;
  } else {
    document.getElementById("submit-btn").type = "submit";
    button.cursor = "pointer";
  }
}

