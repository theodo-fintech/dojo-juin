package com.sipios.dojo.realestatebff.service;

import com.sipios.dojo.realestatebff.client.ApiClient;
import org.springframework.stereotype.Service;

@Service
public class AssetService {

    private final ApiClient apiClient;

    public AssetService(ApiClient apiClient) {
        this.apiClient = apiClient;
    }


}
