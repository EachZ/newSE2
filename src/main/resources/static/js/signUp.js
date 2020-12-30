$(document).ready(function () {
    function alertWin(message) {
        console.log(message);
        var meStr="<h3><span class='label label-danger' style='margin-left:120px;color:white;position:absolute;z-index:10; top: 80px;'" +
            ">"+message+"</span></h3>"
        $('#alertWindow').html(meStr);
        $("#alertWindow").show().delay(1500).hide(50);
        // $("#alertWindow").show();
    }
    $("#signUp-btn").click(function () {
        var formData = getSignUpForm();
        if (!validateSignUpForm(formData)) {
            return;
        }

        postRequest(
            '/register',
            formData,
            function (res) {
                if (res.success) {
                    alertWin("注册成功");
                    window.location.href = "/index";
                } else {
                    alertWin(res.message);
                }
            },
            function (error) {
                alertWin(error);
            });
    });

    //获得注册表单
    function getSignUpForm() {
        return {
            username: $('#signUp-name').val(),
            password: $('#signUp-password').val(),
            secondPassword: $('#signUp-second-password').val()
        };
    }

    //验证表单
    function validateSignUpForm(data) {
        var isValidate = true;
        if (!data.username || data.username.length < 4 || data.username.length > 10) {
            isValidate = false;
            // $('#signUp-name').parent('.input-group').addClass('has-error');
            $('#signUp-name-error').css("visibility", "visible");
            $('#signUp-name-error').text("用户名长度应在4-10位内");
        }
        if(!(/^[0-9a-zA-Z]+$/.test(data.username))){
            isValidate=false;
            $('#signUp-name-error').css("visibility", "visible");
            $('#signUp-name-error').text("用户名中只能包含英文字母或数字");
        }
        if (!data.password || data.password.length < 6 || data.password.length > 12) {
            isValidate = false;
            $('#signUp-password').parent('.input-group').addClass('has-error');
            $('#signUp-password-error').css("visibility", "visible");
        }

        if (!data.secondPassword) {
            isValidate = false;
            $('#signUp-second-password').parent('.input-group').addClass('has-error');
            $('#signUp-second-password-error').css("visibility", "visible");
            $('#signUp-second-password-error').text("请再次输入密码");
        } else if (data.secondPassword != data.password) {
            isValidate = false;
            $('#signUp-second-password').parent('.input-group').addClass('has-error');
            $('#signUp-second-password-error').css("visibility", "visible");
            $('#signUp-second-password-error').text("两次输入密码不一致");
        }

        return isValidate;
    }
});