package com.sipios.dojo.realestatebff.auth;

import jakarta.servlet.http.Cookie;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.web.SecurityFilterChain;

import java.util.Arrays;
import java.util.Optional;

@Configuration
public class SecurityConfiguration {

    @Bean
    public WebSecurityCustomizer webSecurityCustomizer() {
        return (web) -> web.ignoring().requestMatchers("/login");
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf(AbstractHttpConfigurer::disable)
            .cors(AbstractHttpConfigurer::disable)
            .authorizeHttpRequests((authz) ->
                authz.requestMatchers(request ->
                    Arrays.stream(Optional.ofNullable(request.getCookies()).orElse(new Cookie[0])).anyMatch(cookie -> "access_token".equals(cookie.getName())))
                .permitAll()
            )
            .exceptionHandling(exceptionHandling ->
                exceptionHandling.authenticationEntryPoint((_request, response, _authException) -> response.setStatus(HttpStatus.UNAUTHORIZED.value()))
            );
        return http.build();
    }
}




