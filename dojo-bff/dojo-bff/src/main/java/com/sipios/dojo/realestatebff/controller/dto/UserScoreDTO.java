package com.sipios.dojo.realestatebff.controller.dto;

import java.math.BigDecimal;

public record UserScoreDTO(BigDecimal userAbove, BigDecimal userBelow, BigDecimal currentUser){
}
