$(document).ready(function () {

    function alertWin(message) {
        console.log(message);
        var meStr="<h3><span class='label label-default' style='color:white;position:absolute;z-index:10; top: 80px;'" +
            ">"+message+"</span></h3>>"
        $('#alertWindow').html(meStr);
        $("#alertWindow").show().delay(1500).hide(50);
        // $("#alertWindow").show();
    }

    $("#login-btn").click(function () {

        var formData = getLoginForm();
        if (!validateLoginForm(formData)) {
            return;
        }

        postRequest(
            '/login',
            formData,
            function (res) {
                if (res.success) {
                    sessionStorage.setItem('username', formData.username);
                    sessionStorage.setItem('id', res.content.id);
                    //规定经理、售票员与普通用户的区别
                    if (formData.username == "root") {
                        //影院经理
                        sessionStorage.setItem('role', 'admin');
                        window.location.href = "/admin/movie/manage"
                    }else if(formData.username.startsWith("/")){
                        //售票员
                        sessionStorage.setItem('role', 'seller');
                        window.location.href ="/seller/movie"
                    }
                    else {
                        //观众
                        sessionStorage.setItem('role', 'user');
                        window.location.href = "/user/home"
                    }
                } else {
                    alertWin(res.message);
                }
            },
            function (error) {
                alertWin(error);
            });
    });

    function getLoginForm() {
        return {
            username: $('#index-name').val(),
            password: $('#index-password').val()
        };
    }

    function validateLoginForm(data) {
        var isValidate = true;
        if (!data.username) {
            isValidate = false;
            $('#index-name').parent('.input-group').addClass('has-error');
            $('#index-name-error').css("visibility", "visible");
        }
        if (!data.password) {
            isValidate = false;
            $('#index-password').parent('.input-group').addClass('has-error');
            $('#index-password-error').css("visibility", "visible");
        }
        return isValidate;
    }
});