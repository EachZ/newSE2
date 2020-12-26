package com.example.cinema.blImpl.humanComputer;


import com.example.cinema.bl.humanComputer.HumanComputerService;
import com.example.cinema.data.humanComputer.HumanComputerMapper;
import com.example.cinema.po.HotAndWillMovie;
import com.example.cinema.po.MovieAndLikeNum;
import com.example.cinema.po.MovieAndMoney;
import com.example.cinema.vo.HotAndWillMovieVO;
import com.example.cinema.vo.MovieAndLIkeNumVO;
import com.example.cinema.vo.MovieAndMoneyVO;
import com.example.cinema.vo.ResponseVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Service;


import java.text.SimpleDateFormat;
import java.util.*;
import java.util.Date;

@Service
public class HumanComputerImpl implements HumanComputerService {

    @Autowired
    private HumanComputerMapper humanComputerMapper;


    @Override
    public ResponseVO getHotMovie(){
        try{
            Date date = new Date();
            SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd");
            date = simpleDateFormat.parse(simpleDateFormat.format(date));
            return ResponseVO.buildSuccess(po2vo(humanComputerMapper.getHotMovie(date)));

        }catch(Exception e){
            e.printStackTrace();
            System.out.println(e.toString());
            return ResponseVO.buildFailure("获得所有热映电影失败");
        }
    }

    @Override
    public ResponseVO getWillMovie(){
        try{
            Date date = new Date();
            SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd");
            date = simpleDateFormat.parse(simpleDateFormat.format(date));
            return ResponseVO.buildSuccess(po2vo(humanComputerMapper.getWillMovie(date)));

        }catch(Exception e){
            e.printStackTrace();
            System.out.println(e.toString());
            return ResponseVO.buildFailure("获得即将上映电影失败");
        }
    }


    @Override
    public ResponseVO getMoney(){
        try{
            List<MovieAndMoney> movieAndMonies=humanComputerMapper.getMovieAndMoney();
            List<MovieAndMoneyVO> result=new ArrayList<>();
            int i=0;
            for(MovieAndMoney m:movieAndMonies){
                MovieAndMoneyVO mVO=new MovieAndMoneyVO();
                mVO.setMovieId(m.getMovieId());
                mVO.setName(m.getName());
                mVO.setMoney(m.getMoney()+"万");
                result.add(mVO);
                i++;
                if(i==9){
                    break;
                }
            }
            return ResponseVO.buildSuccess(result);
        }catch(Exception e){
            e.printStackTrace();
            System.out.println(e.toString());
            return ResponseVO.buildFailure("获得多有电影票房失败");
        }
    }

    @Override
    public ResponseVO getLikeNum(){
        try{
            List<MovieAndLikeNum> movieAndLikeNums=humanComputerMapper.getMovieAndLikeNum();
            List<MovieAndLIkeNumVO> result=new ArrayList<>();
            int i=0;
            for(MovieAndLikeNum m:movieAndLikeNums){
                MovieAndLIkeNumVO mVO=new MovieAndLIkeNumVO();
                mVO.setMovieId(m.getMovieId());
                mVO.setName(m.getName());
                mVO.setLikeNum(m.getLikeNum());
                result.add(mVO);
                i++;
                if(i==9){
                    break;
                }
            }
            return ResponseVO.buildSuccess(result);
        }catch(Exception e){
            e.printStackTrace();
            System.out.println(e.toString());
            return ResponseVO.buildFailure("获得电影想看人数失败");
        }
    }



    public List<HotAndWillMovieVO> po2vo(List<HotAndWillMovie> hotAndWillMovies){
        List<HotAndWillMovieVO> result=new ArrayList<>();
        int i=0;
        for(HotAndWillMovie hotAndWillMovie:hotAndWillMovies){
            if(hotAndWillMovie.getScore()==null){
                hotAndWillMovie.setScore("");
            }
            if(i==8){
                break;
            }
            HotAndWillMovieVO h=new HotAndWillMovieVO(hotAndWillMovie);
            result.add(h);
            i++;
        }
        return result;
    }
}
