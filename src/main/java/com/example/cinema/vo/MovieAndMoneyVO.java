package com.example.cinema.vo;

import com.example.cinema.po.MovieAndMoney;

public class MovieAndMoneyVO {
    private int movieId;
    private String name;
    private String money;

    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public String getMoney() {
        return money;
    }

    public void setMoney(String money) {
        this.money = money;
    }


    public int getMovieId() {
        return movieId;
    }

    public void setMovieId(int movieId) {
        this.movieId = movieId;
    }
}
