package com.sipios.dojo.realestatebff.controller;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@AutoConfigureMockMvc
@SpringBootTest
class UserControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    void shouldReturnUnauthorizedIfUserNotLoggedIn() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders
                .get("/user?id=d14833c6-19bd-4f7c-adf5-0b2813b3f315"))
                .andExpect(status().isUnauthorized());
    }
}