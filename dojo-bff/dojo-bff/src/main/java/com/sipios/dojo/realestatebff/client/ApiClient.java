package com.sipios.dojo.realestatebff.client;

import com.sipios.dojo.realestatebff.client.dto.*;
import com.sipios.dojo.realestatebff.controller.dto.CredentialDTO;
import com.sipios.dojo.realestatebff.service.model.*;
import jakarta.annotation.PostConstruct;
import jakarta.servlet.http.Cookie;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.Arrays;
import java.util.List;

import static java.util.Collections.emptyList;
import static java.util.Collections.reverse;

@Repository
public class ApiClient {

    private WebClient.Builder apiClientBuilder;
    @Value("${client.api.baseUrl}")
    private String apiClientBaseUrl;

    @PostConstruct
    public void setUp() {
        apiClientBuilder = WebClient.builder().baseUrl(apiClientBaseUrl);
    }

    public ResponseEntity<Void> login(CredentialDTO credentialDTO) {
        return  getWebClient().post().uri("auth/login").body(BodyInserters.fromValue(credentialDTO)).retrieve().toBodilessEntity().block();
    }

    private Cookie retrieveAccessCookie() {
        var attributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
        return Arrays.stream(attributes.getRequest().getCookies()).filter(c -> c.getName().equals("access_token")).findFirst().orElse(null);
    }

    private WebClient getWebClient() {
        return apiClientBuilder.build();
    }

    public User retrieveCurrentUser() {
        WebClient webClient = getWebClient();
        var user = webClient
        .get()
        .uri("users/me")
        .cookie("access_token", retrieveAccessCookie().getValue())
        .retrieve().bodyToMono(UserDto.class).block();
        return new User(user.id(), user.mail());
    }

    public void buyRealty(BuyRealty buyRealty) {
        WebClient webClient = getWebClient();
        BuyRealtyDto buyRealtyDto = new BuyRealtyDto(buyRealty.realtyId());
        webClient.post().uri("realties/buy")
                .cookie("access_token", retrieveAccessCookie().getValue()).body(BodyInserters.fromValue(buyRealtyDto)).retrieve().toBodilessEntity().block();
    }





    public List<Realty> retrieveAllRealties(String deedtype) {
        WebClient webClient = getWebClient();
        List<Realty> allRealities;

        if (deedtype != null ) {
            allRealities = webClient.get().uri(uriBuilder -> uriBuilder.path("realties").queryParam("type", deedtype).build()).cookie("access_token", retrieveAccessCookie().getValue()).retrieve().bodyToFlux(Realty.class).collectList().block();
        } else {
            allRealities = webClient.get().uri("realties").cookie("access_token", retrieveAccessCookie().getValue()).retrieve().bodyToFlux(Realty.class).collectList().block();
        }

        if(allRealities == null) return emptyList();

        reverse(allRealities);
        return allRealities.stream().limit(5).toList();
    }

    public List<Transaction> retrieveAllTransactions() {
        WebClient webClient = getWebClient();
        return webClient.get().uri("transactions")
                .cookie("access_token", retrieveAccessCookie().getValue()).retrieve().bodyToFlux(Transaction.class).collectList().block();
    }

    public List<Asset> retrieveAllAssets() {
        WebClient webClient = getWebClient();
        return webClient.get().uri("assets")
                .cookie("access_token", retrieveAccessCookie().getValue()).retrieve().bodyToFlux(Asset.class).collectList().block();
    }

    public AmountDto retrieveUserAmount() {
        WebClient webClient = getWebClient();
        return webClient.get().uri("users/amount")
                .cookie("access_token", retrieveAccessCookie().getValue()).retrieve().bodyToMono(AmountDto.class).block();
    }

    public UserScore retrieveUserScore(String id) {
        WebClient webClient = getWebClient();
        return webClient.get().uri("users/score", id)
                .cookie("access_token", retrieveAccessCookie().getValue()).retrieve().bodyToMono(UserScore.class).block();
    }
}
