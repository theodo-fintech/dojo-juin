package com.sipios.dojo.realestatebff.controller;

import com.sipios.dojo.realestatebff.controller.dto.UserAmountDTO;
import com.sipios.dojo.realestatebff.controller.mapper.UserAmountMapper;
import com.sipios.dojo.realestatebff.service.UserService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {

    private final UserService userService;

    private final UserAmountMapper userAmountMapper;

    public UserController(UserService userService, UserAmountMapper userAmountMapper) {
        this.userService = userService;
        this.userAmountMapper = userAmountMapper;
    }

    @GetMapping("amount")
    public UserAmountDTO getUserAmount(){
        return  userAmountMapper.from(userService.getUserAmountDTOService());
    }

}
