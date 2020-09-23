function demo(e) {
  e.preventDefault();
  let name = document.form.name;
  let email = document.form.email;
  let message = document.form.message;
  let span = document.getElementById("error");
  let span1 = document.getElementById("error1");
  let span2 = document.getElementById("error2");
  let s = document.getElementById("success");
  let w = document.getElementById("warning");
  let s1 = document.getElementById("success1");
  let w1 = document.getElementById("warning1");
  let s2 = document.getElementById("success2");
  let w2 = document.getElementById("warning2");
  if (name.value == "") {
    span.classList.remove("text-success");
    span.classList.add("text-danger");
    span.innerHTML = "Error";
    name.style.border = "1px solid red";
    s.style.display = "none";
    w.style.display = "block";
    name.focus();
    return false;
  } else {
    span.classList.remove("text-danger");
    span.classList.add("text-success");
    span.innerHTML = "Success";
    name.style.border = "1px solid #2f5f30";
    w.style.display = "none";
    s.style.display = "block";
  }
  if (email.value == "") {
    span1.classList.remove("text-success");
    span1.classList.add("text-danger");
    span1.innerHTML = "Error";
    email.style.border = "1px solid red";
    s1.style.display = "none";
    w1.style.display = "block";
    email.focus();
    return false;
  } else if (
    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email.value
    )
  ) {
    span1.classList.remove("text-success");
    span1.classList.add("text-danger");
    span1.innerHTML = "Error";
    email.style.border = "1px solid red";
    s1.style.display = "none";
    w1.style.display = "block";
    email.focus();
    return false;
  } else {
    span1.classList.remove("text-danger");
    span1.classList.add("text-success");
    span1.innerHTML = "Success";
    email.style.border = "1px solid #2f5f30";
    w1.style.display = "none";
    s1.style.display = "block";
  }
  if (message.value == "") {
    span2.classList.remove("text-success");
    span2.classList.add("text-danger");
    span2.innerHTML = "Error";
    message.style.border = "1px solid red";
    s2.style.display = "none";
    w2.style.display = "block";
    message.focus();
    return false;
  } else {
    span2.classList.remove("text-danger");
    span2.classList.add("text-success");
    span2.innerHTML = "Success";
    message.style.border = "1px solid #2f5f30";
    w2.style.display = "none";
    s2.style.display = "block";
  }

  if (name.value != "" && email.value != "" && message.value != "") {
    span.classList.remove("text-success");
    span.innerHTML = " ";
    name.value = "";
    s.style.display = "none";
    w.style.display = "none";
    span1.classList.remove("text-success");
    span1.innerHTML = " ";
    email.value = "";
    s1.style.display = "none";
    w1.style.display = "none";
    span2.classList.remove("text-success");
    span2.innerHTML = " ";
    message.value = "";
    s2.style.display = "none";
    w2.style.display = "none";
  }
}
