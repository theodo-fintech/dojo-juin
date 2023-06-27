package com.sipios.dojo.realestatebff.controller.mapper;

import com.sipios.dojo.realestatebff.controller.dto.BuyRealtyDTO;
import com.sipios.dojo.realestatebff.service.model.BuyRealty;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface BuyRealtyMapper {
    BuyRealty from(BuyRealtyDTO buyRealtyDTO);
}
