package com.example.cinema.vo;

import com.example.cinema.po.MovieAndLikeNum;

public class MovieAndLIkeNumVO {
    private int MovieId;
    private String name;
    private int likeNum;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getLikeNum() {
        return likeNum;
    }

    public void setLikeNum(int likeNum) {
        this.likeNum = likeNum;
    }

    public void setMovieId(int movieId) {
        MovieId = movieId;
    }

    public int getMovieId() {
        return MovieId;
    }
}
