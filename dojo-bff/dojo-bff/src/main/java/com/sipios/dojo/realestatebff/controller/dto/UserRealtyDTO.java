package com.sipios.dojo.realestatebff.controller.dto;

import com.sipios.dojo.realestatebff.service.model.DeedTypeEnum;

import java.math.BigDecimal;

public record UserRealtyDTO (
        int id,
        BigDecimal amount,
        BigDecimal rent,
        String label,
        String image,
        DeedTypeEnum deedType
    ){}
