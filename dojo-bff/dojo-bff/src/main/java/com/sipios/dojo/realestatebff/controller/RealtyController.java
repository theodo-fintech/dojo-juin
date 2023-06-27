package com.sipios.dojo.realestatebff.controller;

import com.sipios.dojo.realestatebff.controller.dto.BuyRealtyDTO;
import com.sipios.dojo.realestatebff.controller.mapper.BuyRealtyMapper;
import com.sipios.dojo.realestatebff.service.RealtyService;
import com.sipios.dojo.realestatebff.service.model.BuyRealty;
import com.sipios.dojo.realestatebff.service.model.Realty;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/realties")
public class RealtyController {

    private final RealtyService realtyService;
    private final BuyRealtyMapper buyRealtyMapper;


    public RealtyController(RealtyService realtyService, BuyRealtyMapper buyRealtyMapper) {
        this.realtyService = realtyService;
        this.buyRealtyMapper = buyRealtyMapper;
    }

    @GetMapping()
    public List<Realty> getRealtiesByType(@RequestParam(required = false) String deedType, @RequestParam(required = false) List<Integer> ids){
        return realtyService.getRealtiesByType(deedType,ids);
    }

    @PostMapping("/buy")
    public void buyRealty(@RequestBody BuyRealtyDTO buyRealtyDTO){
        BuyRealty buyRealty = buyRealtyMapper.from(buyRealtyDTO);
        realtyService.buyRealty(buyRealty);
    }


}
