package com.example.cinema.po;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class HotAndWillMovie {
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
}
