package com.example.cinema.vo;

import com.example.cinema.po.HotAndWillMovie;

public class HotAndWillMovieVO {
    private int movieId;
    /**
     * 电影的名字
     */
    private String name;
    /**
     * 电影的海报链接
     */
    private String link;

    /**
     * 电影的评分
     */
    private String score;

    public void setScore(String score) {
        this.score = score;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLink() {
        return link;
    }

    public String getScore() {
        return score;
    }

    public int getMovieId() {
        return movieId;
    }

    public void setMovieId(int movieId) {
        this.movieId = movieId;
    }

    public void setLink(String link) {
        this.link = link;
    }
    public HotAndWillMovieVO(HotAndWillMovie hotAndWillMovie){
        this.name=hotAndWillMovie.getName();
        this.link=hotAndWillMovie.getLink();
        this.score=hotAndWillMovie.getScore();
        this.movieId=hotAndWillMovie.getMovieId();
    }

}
