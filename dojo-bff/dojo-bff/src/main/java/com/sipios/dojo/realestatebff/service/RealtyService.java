package com.sipios.dojo.realestatebff.service;

import com.sipios.dojo.realestatebff.client.ApiClient;
import com.sipios.dojo.realestatebff.service.model.BuyRealty;
import com.sipios.dojo.realestatebff.service.model.Realty;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;


@Service
public class RealtyService {
    private final ApiClient apiClient;

    public RealtyService(ApiClient apiClient) {
        this.apiClient = apiClient;
    }

    public List<Realty> getRealtiesByType(String deedtype,List<Integer> ids ){
        List<Realty> realties = apiClient.retrieveAllRealties(deedtype);

        if(ids == null) return  realties;

        return realties.stream()
                .filter(realty -> ids.contains(realty.id()))
                .toList();

    }


    public void buyRealty(BuyRealty buyRealty){
        apiClient.buyRealty(buyRealty);
    }

}
