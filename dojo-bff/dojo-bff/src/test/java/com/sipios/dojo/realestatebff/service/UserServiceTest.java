package com.sipios.dojo.realestatebff.service;

import com.sipios.dojo.realestatebff.client.ApiClient;
import com.sipios.dojo.realestatebff.service.model.User;
import com.sipios.dojo.realestatebff.service.model.UserAmount;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.math.BigDecimal;
import java.util.UUID;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;


@ExtendWith(MockitoExtension.class)
class UserServiceTest {

    @Mock
    ApiClient apiClient;

    @InjectMocks
    private UserService service;

    @Test
    void shouldReturnUserAmountRightId() {
        when(apiClient.retrieveCurrentUser()).thenReturn(new User("5ea5993a-beef-4591-88f7-eb847ab90c43", "email@email.com"));
        UserAmount userAmount = service.getUserAmountDTOService();
        Assertions.assertEquals("5ea5993a-beef-4591-88f7-eb847ab90c43", userAmount.id());
    }
}