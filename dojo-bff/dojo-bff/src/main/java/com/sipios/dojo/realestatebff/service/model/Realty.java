package com.sipios.dojo.realestatebff.service.model;

import java.math.BigDecimal;

public record Realty(
        int id,
        BigDecimal amount,
        BigDecimal rent,
        String label,
        String image,
        DeedTypeEnum deedType,
        int scoring,
        String lastScoreUpdate
) {
}
