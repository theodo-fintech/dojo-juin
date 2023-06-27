package com.sipios.dojo.realestatebff.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.sipios.dojo.realestatebff.controller.dto.CredentialDTO;
import org.junit.jupiter.api.Test;
import org.mockserver.integration.ClientAndServer;
import org.mockserver.model.HttpRequest;
import org.mockserver.model.HttpResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.mockserver.integration.ClientAndServer.startClientAndServer;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@AutoConfigureMockMvc
@SpringBootTest
class AuthenticationControllerTest {
    @Autowired
    private MockMvc mockMvc;
    @Autowired
    private ObjectMapper objectMapper;

    private final ClientAndServer clientAndServer = startClientAndServer(3000);

    @Test
    void shouldReturnOkWhenUserNotLoggedIn() throws Exception {
        clientAndServer.when(
            HttpRequest.request().withMethod("POST").withPath("/auth/login")
        ).respond(
            HttpResponse.response().withStatusCode(HttpStatus.OK.value())
        );
        mockMvc.perform(MockMvcRequestBuilders
                        .post("/login")
                        .header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON)
                        .content(objectMapper
                                .writeValueAsString(new CredentialDTO("email2@email.com"))))
                .andExpect(status().isOk());
    }
}