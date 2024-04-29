package com.sipios.dojo.realestatebff.controller.mapper;

import com.sipios.dojo.realestatebff.controller.dto.UserLevelDTO;
import com.sipios.dojo.realestatebff.service.model.UserLevel;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserLevelMapper {
    UserLevelDTO from(UserLevel userLevel);
}
