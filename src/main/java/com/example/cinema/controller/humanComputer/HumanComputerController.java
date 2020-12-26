package com.example.cinema.controller.humanComputer;

import com.example.cinema.bl.humanComputer.HumanComputerService;
import com.example.cinema.vo.ResponseVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/humanComputer")
public class HumanComputerController {

    @Autowired
    HumanComputerService humanComputerService;

    @GetMapping(value = "/hot")
    public ResponseVO getHot(){
        return humanComputerService.getHotMovie();
    }

    @GetMapping(value = "/will")
    public ResponseVO getWill(){return humanComputerService.getWillMovie();}

    @GetMapping(value = "money")
    public ResponseVO getMoney(){return humanComputerService.getMoney();}

    @GetMapping(value = "like")
    public ResponseVO getLike(){return humanComputerService.getLikeNum();}
}
