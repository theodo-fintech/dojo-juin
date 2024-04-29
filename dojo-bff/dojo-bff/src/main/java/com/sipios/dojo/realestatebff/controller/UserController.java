package com.sipios.dojo.realestatebff.controller;

import com.sipios.dojo.realestatebff.controller.dto.UserAmountDTO;
import com.sipios.dojo.realestatebff.controller.dto.UserScoreDTO;
import com.sipios.dojo.realestatebff.controller.mapper.UserAmountMapper;
import com.sipios.dojo.realestatebff.controller.mapper.UserScoreMapper;
import com.sipios.dojo.realestatebff.service.UserService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {

    private final UserService userService;

    private final UserAmountMapper userAmountMapper;
    private final UserScoreMapper userScoreMapper;

    public UserController(UserService userService, UserAmountMapper userAmountMapper, UserScoreMapper userScoreMapper) {
        this.userService = userService;
        this.userAmountMapper = userAmountMapper;
        this.userScoreMapper = userScoreMapper;
    }

    @GetMapping("amount")
    public UserAmountDTO getUserAmount(){
        return  userAmountMapper.from(userService.getUserAmountDTOService());
    }

    @GetMapping("score")
    public UserScoreDTO getUserScore(){
        return  userScoreMapper.from(userService.getUserScore());
    }
}
