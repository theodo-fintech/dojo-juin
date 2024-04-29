package com.sipios.dojo.realestatebff.controller.mapper;

import com.sipios.dojo.realestatebff.controller.dto.UserScoreDTO;
import com.sipios.dojo.realestatebff.service.model.UserScore;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserScoreMapper {
    UserScoreDTO from(UserScore userScore);
}
