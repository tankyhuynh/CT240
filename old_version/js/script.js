$(document).ready(function () {
  // // Header

  $("#content").load("content-mess.html");
  $("#tabs-list").load("mess.html");

  // User Detail
  $(".user-detail").click(function (e) {
    $("#user-detail").show(500);
    $(".overlay").show();
  });

  // Close
  $(".user__icon-close").click(function (e) {
    $("#user-detail").hide(500);
    $(".overlay").hide();
  });

  $(".user__case--item").click(function (e) {
    $("#user-detail").hide(500);
    $(".overlay").hide();
  });

  $(".overlay").click(function (e) {
    $("#user-detail").hide(500);
    $("#add-friend-content").hide(500);
    $("#setting-content").hide(500);

    $(".overlay").hide();
  });
  // Close add friend

  $(".fa-times").click(function (e) {
    $("#add-friend-content").hide(500);
    $("#setting-content").hide(500);

    $(".overlay").hide();
  });

  $(".add-friend__card--icon").click(function (e) {
    $("#add-friend-content").hide(500);

    $(".overlay").hide();
  });

  // // User Case

  // Messeger
  $("#mess").click(function (e) {
    $(".user__case--item").removeClass("active");
    $(this).addClass("active");

    $("#content").load("content-mess.html");
    $("#tabs-list").load("mess.html");
  });

  // Contacts
  $("#contacts").click(function (e) {
    $(".user__case--item").removeClass("active");
    $(this).addClass("active");

    $("#content").load("content-add-friends.html");
    $("#tabs-list").load("contacts.html");
  });

  // Add friends
  $("#add-friend").click(function (e) {
    $("#add-friend-content").show(500);
    $(".overlay").show();
  });

  // Setting
  $("#setting").click(function (e) {
    $("#setting-content").show(500);
    $(".overlay").show();
  });

  $("#edit-user").click(function (e) {
    $(".edit-input").removeAttr("disabled");
    $("#edit-user").hide();
    $("#save-edit-user").show();
  });

  $(".icon-hide-show").click(function (e) {
    $(".icon-hide-show").toggle(250);
  });

  // Login
  $("#login").click(function (e) {
    $("#form-login").show(500);
    $("#form-register").hide(500);
    $(".form-title").removeClass("active");
    $(this).addClass("active");
  });

  $("#register").click(function (e) {
    $("#form-register").show(500);
    $("#form-login").hide(500);
    $(".form-title").removeClass("active");
    $(this).addClass("active");
  });

  // Validate Form
  check_login_username = false;
  check_login_password = false;

  // Login Username
  $("#login-username").keyup(function (e) {
    var value = $(this).val();

    if (value.length == 0 || value.length != 10) {
      if (value.length == 0)
        $("#login-username-err").text("*Vui lòng nhập số điện thoại!");
      if (value.length != 10)
        $("#login-username-err").text("*Số điện thoại không hợp lệ!");
      check_login_username = false;
    } else {
      $("#login-username-err").text("");
      check_login_username = true;
    }
  });

  // Login Password
  $("#login-password").keyup(function (e) {
    var value = $(this).val();
    if (value.length < 6 || value.length > 15 || value.length == 0) {
      if (value.length < 6)
        $("#login-password-err").text("*Mật khẩu tối thiểu 6 kí tự!");
      if (value.length > 15)
        $("#login-password-err").text("*Mật khẩu không quá 15 ký tự!");
      if (value.length == 0)
        $("#login-password-err").text("*Vui lòng nhập mật khẩu!");
      check_login_password = false;
    } else {
      $("#login-password-err").text("");
      check_login_password = true;
    }
  });

  // Login Register
  $("#sub-login").click(function (e) {
    if (check_login_username && check_login_password) {
      return true;
    } else return false;
  });

  //Register

  check_res_name = false;
  check_res_username = false;
  check_res_password = false;
  check_res_re_password = false;

  // Register Name
  $("#res-name").keyup(function (e) {
    var value = $(this).val();

    if (value.length == 0 || value.length > 30) {
      if (value.length == 0) $("#res-name-err").text("*Vui lòng nhập họ tên!");
      if (value.length > 30) $("#res-name-err").text("*Họ tên quá dài!");
      check_res_name = false;
    } else {
      $("#res-name-err").text("");
      check_res_name = true;
    }
  });

  // Resgister Username
  $("#res-username").keyup(function (e) {
    var value = $(this).val();

    if (value.length == 0 || value.length != 10) {
      if (value.length == 0)
        $("#res-username-err").text("*Vui lòng nhập số điện thoại!");
      if (value.length != 10)
        $("#res-username-err").text("*Số điện thoại không hợp lệ!");
      check_res_username = false;
    } else {
      $("#res-username-err").text("");
      check_res_username = true;
    }
  });

  // Resgister Password
  $("#res-password").keyup(function (e) {
    var value = $(this).val();
    if (value.length < 6 || value.length > 15 || value.length == 0) {
      if (value.length < 6)
        $("#res-password-err").text("*Mật khẩu tối thiểu 6 kí tự!");
      if (value.length > 15)
        $("#res-password-err").text("*Mật khẩu không quá 15 ký tự!");
      if (value.length == 0)
        $("#res-password-err").text("*Vui lòng nhập mật khẩu!");
      check_res_password = false;
    } else {
      $("#res-password-err").text("");
      check_res_password = true;
    }
  });

  // Resgister Re-Password
  $("#res-re_password").keyup(function (e) {
    var value = $(this).val();
    var password = $("#res-password").val();

    if (value != password) {
      $("#res-re_password-err").text("*Mật khẩu không trùng khớp!");
      check_res_re_password = false;
    } else {
      $("#res-re_password-err").text("");
      check_res_re_password = true;
    }
  });

  // Submit Register
  $("#sub-res").click(function (e) {
    if (
      check_res_name &&
      check_res_username &&
      check_res_password &&
      check_res_re_password
    ) {
      return true;
    } else {
      return false;
    }
  });

  // Edit User
  check_edit_name = true;
  check_edit_new_password = false;
  check_edit_re_password = false;

  // Name
  $("#edit-name").keyup(function (e) {
    var value = $(this).val();

    if (value.length == 0 || value.length > 30) {
      if (value.length == 0) $("#edit-name-err").text("*Vui lòng nhập họ tên!");
      if (value.length > 30) $("#edit-name-err").text("*Họ tên quá dài!");
      check_edit_name = false;
    } else {
      $("#edit-name-err").text("");
      check_edit_name = true;
    }
  });

  // Submit Edit
  $("#save-edit-user").click(function (e) {
    if (check_edit_name) {
      $("#setting-content").hide(500);
      return true;
    } else {
      return false;
    }
  });

  // Edit New Password
  $("#edit-new-password").keyup(function (e) {
    var value = $(this).val();
    if (value.length < 6 || value.length > 15 || value.length == 0) {
      if (value.length < 6)
        $("#edit-new-password-err").text("*Mật khẩu tối thiểu 6 kí tự!");
      if (value.length > 15)
        $("#edit-new-password-err").text("*Mật khẩu không quá 15 ký tự!");
      if (value.length == 0)
        $("#edit-new-password-err").text("*Vui lòng nhập mật khẩu!");
      check_edit_new_password = false;
    } else {
      $("#edit-new-password-err").text("");
      check_edit_new_password = true;
    }
  });

  // Edit Re-Password
  $("#edit-re-password").keyup(function (e) {
    var value = $(this).val();
    var password = $("#edit-new-password").val();

    if (value != password) {
      $("#edit-re-password-err").text("*Mật khẩu không trùng khớp!");
      check_edit_re_password = false;
    } else {
      $("#edit-re-password-err").text("");
      check_edit_re_password = true;
    }
  });

  // Submit ChangPassword
  $("#save-change-password").click(function (e) {
    if (check_edit_new_password && check_edit_re_password) {
      $("#setting-content").hide(500);
      return true;
    } else {
      return false;
    }
  });
});
