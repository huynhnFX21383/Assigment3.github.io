"use strict";

function handleSubmit() {
  // Lấy giá trị của input email và chuyển sang chữ thường
  const emailValue = document.getElementById("email").value.toLocaleLowerCase();
  // Lấy element của thẻ p hiển thị lỗi
  const errorEmail = document.getElementById("error-email");
  // Điều kiện để là một email
  const checkEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // Dùng match để kiểm tra với email vừa nhập
  const check = emailValue.match(checkEmail);
  // Lấy phần chứa thông tin user
  const sectionContent = document.querySelector(
    "#personal-info .section-content"
  );
  // Lấy element để kiểm soát submit
  const submitControl = document.querySelector(".submit-email");
  if (check) {
    sectionContent.style.display = "block";
    submitControl.style.display = "none";
    errorEmail.innerHTML = "";
  } else {
    errorEmail.innerHTML = "Vui lòng nhập đúng Email";
  }
}

function handleOnMouseOver(element) {
  const viewMore = element.querySelector(".control-view");
  viewMore.style.display = "inline-block";
}

function handleOnMouseOut(element) {
  const viewMore = element.querySelector(".control-view");
  if (!viewMore.classList.value.includes("less-more")) {
    viewMore.style.display = "none";
  }
}

function handleViewMore(element) {
  const parentElement = element.closest(".parent");
  const viewMore = parentElement.querySelector(".control-view");
  const hideContent = parentElement.querySelectorAll(".hide-content");
  if (viewMore.classList.value.includes("view-more")) {
    hideContent.forEach((element) => {
      element.style.display = "block";
    });
    viewMore.classList.remove("view-more");
    viewMore.classList.add("view-less");
    viewMore.innerHTML = "View less &#x22CF;";
  } else {
    hideContent.forEach((element) => {
      element.style.display = "none";
    });
    viewMore.classList.remove("view-less");
    viewMore.classList.add("view-more");
    viewMore.innerHTML = "View more &#x22CE;";
  }
}
