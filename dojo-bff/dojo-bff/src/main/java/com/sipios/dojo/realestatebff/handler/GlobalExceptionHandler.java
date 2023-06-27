package com.sipios.dojo.realestatebff.handler;

import org.springframework.http.ProblemDetail;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.reactive.function.client.WebClientResponseException;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(WebClientResponseException.Unauthorized.class)
    ProblemDetail handleUnauthorizedFromApi(WebClientResponseException.Unauthorized unauthorized) {
        ProblemDetail problemDetail = ProblemDetail.forStatusAndDetail(unauthorized.getStatusCode(), unauthorized.getMessage());
        problemDetail.setTitle(unauthorized.getStatusText());
        return problemDetail;
    }

}
