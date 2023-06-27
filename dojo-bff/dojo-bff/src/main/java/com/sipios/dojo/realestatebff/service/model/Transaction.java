package com.sipios.dojo.realestatebff.service.model;

import java.time.LocalDateTime;

public record Transaction(String transactionId, String userId, String realtyId, String amount, Realty realty, LocalDateTime createdAt) {

}
