package com.sipios.dojo.realestatebff.controller.mapper;


import com.sipios.dojo.realestatebff.controller.dto.SellRealtyDTO;
import com.sipios.dojo.realestatebff.service.model.SellRealty;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface SellRealtyMapper {
    SellRealty from(SellRealtyDTO sellRealtyDTO);
}
