package com.sipios.dojo.realestatebff.service;

import com.sipios.dojo.realestatebff.client.ApiClient;
import com.sipios.dojo.realestatebff.service.model.User;
import com.sipios.dojo.realestatebff.service.model.UserAmount;
import com.sipios.dojo.realestatebff.service.model.UserLevel;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.when;


@ExtendWith(MockitoExtension.class)
class UserServiceTest {

    @Mock
    ApiClient apiClient;

    @InjectMocks
    private UserService service;

    @Test
    void shouldReturnUserAmountRightId() {
        when(apiClient.retrieveCurrentUser()).thenReturn(new User("5ea5993a-beef-4591-88f7-eb847ab90c43", "email@email.com", 1));
        UserAmount userAmount = service.getUserAmountDTOService();
        Assertions.assertEquals("5ea5993a-beef-4591-88f7-eb847ab90c43", userAmount.id());
    }

    @Test
    void should_retrieve_user_level() {
        // Given
        final int mockedUserLevel = 1;
        when(apiClient.retrieveCurrentUser()).thenReturn(new User("5ea5993a-beef-4591-88f7-eb847ab90c43", "email@email.com", mockedUserLevel));

        // When
        final UserLevel userLevel = service.getCurrentUserLevel();

        // Then
        assertThat(userLevel.level()).isEqualTo(mockedUserLevel);
    }
}
