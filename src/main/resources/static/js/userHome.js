$(document).ready(function() {
    //正在热映
    getHot();
    //即将上映
    getComing();
    //票房统计
    getBoxingRate();
    //最受欢迎
    getPopularMovie();

    function getComing(){
        getRequest(
            '/humanComputer/will',
            function (res) {
                var row3String='';
                var row4String='';
                var data = res.content || [];
                console.log(data);

                var nameList = data.map(function (item) {
                    return item.name;
                });

                var idList=data.map(function (item) {
                    return item.movieId;
                });

                var linkList=data.map(function (item) {
                    return item.link;
                });
                var scoreList=data.map(function (item) {
                    return item.score;
                });

                for(var i=0;i<nameList.length;i++){
                    if(i===0||i===1||i===2||i===3){
                        row3String=row3String+
                            '<div class="col-md-3 movie-block">\n' +
                            '                        <a target="_blank" href="/user/movieDetail?id='+idList[i]+'">\n' +
                            '                            <div class="thediv">\n' +
                            '                                <img class="movie-img" src="'+linkList[i]+'">\n' +
                            '                                <div class="tip">\n' +
                            '                                    <span class="movie-name">'+nameList[i]+'</span>\n' +
                            '                                    <span class="movie-score">'+scoreList[i]+'</span>\n' +
                            '                                </div>\n' +
                            '                            </div>\n' +
                            '                            <button type="button" class="btn btn-default" style="border-radius: 0px;">购票</button>\n' +
                            '                        </a>\n' +
                            '                    </div>'
                    }
                }
                $("#row3").append(row3String);

                for(var i=0;i<nameList.length;i++){
                    if(i===4||i===5||i===6||i===7){
                        row4String=row4String+
                            '<div class="col-md-3 movie-block">\n' +
                            '                        <a target="_blank" href="/user/movieDetail?id='+idList[i]+'">\n' +
                            '                            <div class="thediv">\n' +
                            '                                <img class="movie-img" src="'+linkList[i]+'">\n' +
                            '                                <div class="tip">\n' +
                            '                                    <span class="movie-name">'+nameList[i]+'</span>\n' +
                            '                                    <span class="movie-score">'+scoreList[i]+'</span>\n' +
                            '                                </div>\n' +
                            '                            </div>\n' +
                            '                            <button type="button" class="btn btn-default" style="border-radius: 0px;">购票</button>\n' +
                            '                        </a>\n' +
                            '                    </div>'
                    }
                }
                $("#row4").append(row4String);
            },
            function (error) {
                alert(JSON.stringify(error));
            });
    }

    function getHot(){
        getRequest(
            '/humanComputer/hot',
            function (res) {
                var row1String='';
                var row2String='';
                var data = res.content || [];
                console.log(data);

                var nameList = data.map(function (item) {
                    return item.name;
                });

                var idList=data.map(function (item) {
                    return item.movieId;
                });

                var linkList=data.map(function (item) {
                    return item.link;
                });
                var scoreList=data.map(function (item) {
                    return item.score;
                });

                for(var i=0;i<nameList.length;i++){
                    if(i===0||i===1||i===2||i===3){
                        row1String=row1String+
                            '<div class="col-md-3 movie-block">\n' +
                            '                        <a target="_blank" href="/user/movieDetail?id='+idList[i]+'">\n' +
                            '                            <div class="thediv">\n' +
                            '                                <img class="movie-img" src="'+linkList[i]+'">\n' +
                            '                                <div class="tip">\n' +
                            '                                    <span class="movie-name">'+nameList[i]+'</span>\n' +
                            '                                    <span class="movie-score">'+scoreList[i]+'</span>\n' +
                            '                                </div>\n' +
                            '                            </div>\n' +
                            '                            <button type="button" class="btn btn-default" style="border-radius: 0px;">购票</button>\n' +
                            '                        </a>\n' +
                            '                    </div>'
                    }
                }
                $("#row1").append(row1String);

                for(var i=0;i<nameList.length;i++){
                    if(i===4||i===5||i===6||i===7){
                        row2String=row2String+
                            '<div class="col-md-3 movie-block">\n' +
                            '                        <a target="_blank" href="/user/movieDetail?id='+idList[i]+'">\n' +
                            '                            <div class="thediv">\n' +
                            '                                <img class="movie-img" src="'+linkList[i]+'">\n' +
                            '                                <div class="tip">\n' +
                            '                                    <span class="movie-name">'+nameList[i]+'</span>\n' +
                            '                                    <span class="movie-score">'+scoreList[i]+'</span>\n' +
                            '                                </div>\n' +
                            '                            </div>\n' +
                            '                            <button type="button" class="btn btn-default" style="border-radius: 0px;">购票</button>\n' +
                            '                        </a>\n' +
                            '                    </div>'
                    }
                }
                $("#row2").append(row2String);
            },
            function (error) {
                alert(JSON.stringify(error));
            });
    }

    //票房统计
    function getBoxingRate(){

        var nameList=[];
        getRequest(
            '/humanComputer/money',
            function (res) {
                var data = res.content || [];
                console.log(data);
                nameList = data.map(function (item) {
                    return item.name;
                });
                console.log(nameList);
                var boxingStr='';
                console.log(nameList.length);
                var idList=data.map(function (item) {
                    return item.movieId;
                });
                var rateList=data.map(function (item) {
                    return item.money;
                });
                for(var i=0;i<nameList.length;i++){
                    if(i===0||i===1||i===2){
                        boxingStr=boxingStr+
                            '<a target="_blank" href="/user/movieDetail?id='+idList[i]+'">\n' +
                            '                                <div class="box">\n' +
                            '                                    <li>\n' +
                            '                                        <i class="number top-number">'+(i+1)+'</i>\n' +
                            '                                        <span class="movieName">'+nameList[i]+'</span>\n' +
                            '                                        <span class="boxingRate">'+rateList[i]+'</span>\n' +
                            '                                    </li>\n' +
                            '                                </div>\n' +
                            '                            </a>'
                    }
                    else {
                        boxingStr = boxingStr +
                            '<a target="_blank" href="/user/movieDetail?id='+idList[i]+'">\n' +
                            '                                <div class="box">\n' +
                            '                                    <li>\n' +
                            '                                        <i class="number">'+(i+1)+'</i>\n' +
                            '                                        <span class="movieName">'+nameList[i]+'</span>\n' +
                            '                                        <span class="boxingRate">'+rateList[i]+'</span>\n' +
                            '                                    </li>\n' +
                            '                                </div>\n' +
                            '                            </a>'
                    }
                }
                console.log(boxingStr);
                $("#boxingOffice").append(boxingStr);
            },
            function (error) {
                alert(JSON.stringify(error));
            });
        //
    }

    //最受欢迎
    function getPopularMovie(){
        var nameList=[];
        getRequest(
            '/humanComputer/like',
            function (res) {
                var data = res.content || [];
                console.log(data);
                nameList = data.map(function (item) {
                    return item.name;
                });
                console.log(nameList);
                var boxingStr='';
                console.log(nameList.length);
                var idList=data.map(function (item) {
                    return item.movieId;
                });
                var likeList=data.map(function (item) {
                    return item.likeNum;
                });
                for(var i=0;i<nameList.length;i++){
                    if(i===0||i===1||i===2){
                        boxingStr=boxingStr+
                            '<a target="_blank" href="/user/movieDetail?id='+idList[i]+'">\n' +
                            '                                <div class="box">\n' +
                            '                                    <li>\n' +
                            '                                        <i class="number top-number">'+(i+1)+'</i>\n' +
                            '                                        <span class="movieName">'+nameList[i]+'</span>\n' +
                            '                                        <span class="popularNum">'+likeList[i]+'</span>\n' +
                            '                                    </li>\n' +
                            '                                </div>\n' +
                            '                            </a>'
                    }
                    else {
                        boxingStr = boxingStr +
                            '<a target="_blank" href="/user/movieDetail?id='+idList[i]+'">\n' +
                            '                                <div class="box">\n' +
                            '                                    <li>\n' +
                            '                                        <i class="number">'+(i+1)+'</i>\n' +
                            '                                        <span class="movieName">'+nameList[i]+'</span>\n' +
                            '                                        <span class="popularNum">'+likeList[i]+'</span>\n' +
                            '                                    </li>\n' +
                            '                                </div>\n' +
                            '                            </a>'
                    }
                }
                console.log(boxingStr);
                $("#popularMovie").append(boxingStr);
            },
            function (error) {
                alert(JSON.stringify(error));
            });
    }
});
