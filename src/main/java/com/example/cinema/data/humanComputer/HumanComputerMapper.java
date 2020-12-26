package com.example.cinema.data.humanComputer;

import com.example.cinema.po.DateLike;
import com.example.cinema.po.HotAndWillMovie;
import com.example.cinema.po.MovieAndLikeNum;
import com.example.cinema.po.MovieAndMoney;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.Date;
import java.util.List;


@Mapper
public interface HumanComputerMapper {
    /**
     * 获得正在热映的电影
     * @param date
     * @return
     */
    List<HotAndWillMovie> getHotMovie(@Param("date") Date date);

    /**
     * 获得即将上映的电影
     * @param date
     * @return
     */
    List<HotAndWillMovie> getWillMovie(@Param("date") Date date);

    /**
     * 获得上映电影的票房
     * @return
     */
    List<MovieAndMoney> getMovieAndMoney();

    /**
     * 获得为上映电影的喜欢人数
     * @return
     */
    List<MovieAndLikeNum> getMovieAndLikeNum();
}
