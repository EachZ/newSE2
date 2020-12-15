$(document).ready(function(){

    $(".none-data-tip").css("display","none");

    getMovieList('');

    function getMovieList(keyword) {
        getRequest(
            '/movie/search?keyword='+keyword,
            function (res) {
                renderMovieList(res.content);
            },
             function (error) {
            alert(error);
        });
    }

    function renderMovieList(list) {
        $('.movie-on-list').empty();
        var movieDomStr = '';
        if(list.length===0){
            $(".none-data-tip").css("display","block");
        }
        list.forEach(function (movie) {
            movie.description = movie.description || '';
            movieDomStr +=
                "<a target='_blank' href='/user/movieDetail?id="+ movie.id +"'>"+
                "<li class='movie-item card'>" +
                "<img class='movie-img' src='" + (movie.posterUrl || "../images/defaultAvatar.jpg") + "'/>" +
                "<div class='movie-info'>" +
                "<div class='movie-title'>" +
                "<span class='primary-text'>" + movie.name + "</span>" +
                "<span class='label "+(!movie.status ? 'primary-bg' : 'error-bg')+"'>" + (movie.status ? '已下架' : (new Date(movie.startDate)>=new Date()?'未上映':'热映中')) + "</span>" +
                "<span class='movie-want'><i class='icon-heart error-text'></i>" + (movie.likeCount || 0) + "人想看</span>" +
                "</div>" +
                "<div class='movie-description dark-text'><span>" + movie.description + "</span></div>" +
                "<div>类型：" + movie.type + "</div>" +
                "<div style='display: flex'><span>导演：" + movie.director + "</span><span style='margin-left: 30px;'>主演：" + movie.starring + "</span>" +
                "</div>" +
                "</div>"+
                "</li>"+
                "</a>";
        });
        $('.movie-on-list').append(movieDomStr);
    }

    $('#search-btn').click(function () {
        $(".none-data-tip").css("display","none");
        getMovieList($('#search-input').val());
    });

    $('#search-input').bind('keypress', function (event) {
        if (event.keyCode === "13") {
            $("#search-btn").click();
        }
    });

});