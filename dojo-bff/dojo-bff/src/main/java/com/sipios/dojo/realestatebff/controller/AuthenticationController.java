package com.sipios.dojo.realestatebff.controller;

import com.sipios.dojo.realestatebff.client.ApiClient;
import com.sipios.dojo.realestatebff.controller.dto.CredentialDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/login")
public class AuthenticationController {

    private final ApiClient apiClient;

    public AuthenticationController(ApiClient apiClient) {
        this.apiClient = apiClient;
    }

    @PostMapping
    public ResponseEntity<Void> login(@RequestBody CredentialDTO credentialDTO){
        return apiClient.login(credentialDTO);
    }
}
