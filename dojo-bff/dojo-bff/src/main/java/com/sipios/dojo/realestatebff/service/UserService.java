package com.sipios.dojo.realestatebff.service;


import com.sipios.dojo.realestatebff.client.ApiClient;
import com.sipios.dojo.realestatebff.service.model.User;
import com.sipios.dojo.realestatebff.service.model.UserAmount;
import com.sipios.dojo.realestatebff.service.model.UserScore;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;

@Service
public class UserService {

    private final ApiClient apiClient;

    public UserService(ApiClient apiClient) {
        this.apiClient = apiClient;
    }

    public UserAmount getUserAmountDTOService() {
        User user = apiClient.retrieveCurrentUser();
        return new UserAmount(user.id(), BigDecimal.ZERO);
    }

    public UserScore getUserScore() {
        User user = apiClient.retrieveCurrentUser();
        return apiClient.retrieveUserScore(user.id());
    }
}
