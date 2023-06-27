package com.sipios.dojo.realestatebff.controller;

import com.sipios.dojo.realestatebff.client.ApiClient;
import com.sipios.dojo.realestatebff.service.model.Transaction;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("transactions")
public class TransactionController {

    private final ApiClient apiClient;

    public TransactionController(ApiClient apiClient) {
        this.apiClient = apiClient;
    }

    @GetMapping
    public List<Transaction> retrieveAllTransactions() {
        return apiClient.retrieveAllTransactions();
    }

}
