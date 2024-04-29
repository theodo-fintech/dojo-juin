package com.sipios.dojo.realestatebff.service.model;

import java.math.BigDecimal;

public record UserScore(BigDecimal userAbove, BigDecimal userBelow, BigDecimal currentUser){
}
