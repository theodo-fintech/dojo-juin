package com.sipios.dojo.realestatebff.controller.mapper;

import com.sipios.dojo.realestatebff.controller.dto.UserAmountDTO;
import com.sipios.dojo.realestatebff.service.model.UserAmount;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserAmountMapper {
    UserAmountDTO from(UserAmount userAmount);
}
