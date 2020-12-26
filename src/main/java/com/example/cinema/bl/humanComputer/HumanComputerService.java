package com.example.cinema.bl.humanComputer;

import com.example.cinema.vo.ResponseVO;

public interface HumanComputerService {

    /**
     * 得到当前热映的电影的信息
     * @return
     */
    ResponseVO getHotMovie();


    /**
     * 得到即将上映的电影
     * @return
     */
    ResponseVO getWillMovie();


    /**
     * 得到电影最新的票房
     * @return
     */
    ResponseVO getMoney();

    /**
     * 得到电影想看的人数
     * @return
     */
    ResponseVO getLikeNum();
}
