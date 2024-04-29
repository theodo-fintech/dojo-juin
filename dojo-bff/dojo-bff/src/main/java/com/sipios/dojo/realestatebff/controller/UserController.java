package com.sipios.dojo.realestatebff.controller;

import com.sipios.dojo.realestatebff.controller.dto.UserAmountDTO;
import com.sipios.dojo.realestatebff.controller.dto.UserLevelDTO;
import com.sipios.dojo.realestatebff.controller.mapper.UserAmountMapper;
import com.sipios.dojo.realestatebff.controller.mapper.UserLevelMapper;
import com.sipios.dojo.realestatebff.service.UserService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {

    private final UserService userService;

    private final UserAmountMapper userAmountMapper;
    private final UserLevelMapper userLevelMapper;

    public UserController(UserService userService, UserAmountMapper userAmountMapper, UserLevelMapper userLevelMapper) {
        this.userService = userService;
        this.userAmountMapper = userAmountMapper;
        this.userLevelMapper = userLevelMapper;
    }

    @GetMapping("amount")
    public UserAmountDTO getUserAmount(){
        return  userAmountMapper.from(userService.getUserAmountDTOService());
    }

    @GetMapping("score")
    public UserLevelDTO getUserLevel() {
        return userLevelMapper.from(userService.getCurrentUserLevel());
    }
}
