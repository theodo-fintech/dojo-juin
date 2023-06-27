package com.sipios.dojo.realestatebff.controller;

import com.sipios.dojo.realestatebff.client.ApiClient;
import com.sipios.dojo.realestatebff.controller.mapper.SellRealtyMapper;
import com.sipios.dojo.realestatebff.service.AssetService;
import com.sipios.dojo.realestatebff.service.model.Asset;
import org.springframework.web.bind.annotation.*;



import java.util.List;

@RestController
@RequestMapping("assets")
public class AssetController {

    private final ApiClient apiClient;

    private final AssetService assetService;

    public AssetController(ApiClient apiClient, AssetService assetService,  SellRealtyMapper sellRealtyMapper) {
        this.apiClient = apiClient;
        this.assetService = assetService;
        this.sellRealtyMapper = sellRealtyMapper;
    }

    private final SellRealtyMapper sellRealtyMapper;

    @GetMapping
    public List<Asset> retrieveAllAssets() {
        return apiClient.retrieveAllAssets();
    }




}
