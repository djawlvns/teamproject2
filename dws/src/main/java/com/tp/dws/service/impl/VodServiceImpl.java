package com.tp.dws.service.impl;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tp.dws.dto.BaseResponse;
import com.tp.dws.dto.VodDto;
import com.tp.dws.enumstatus.ResultCode;
import com.tp.dws.exception.InvalidRequestException;
import com.tp.dws.model.Vod;
import com.tp.dws.repository.VodRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class VodServiceImpl {

		private final VodRepository vodRepository;

		@Autowired
		public VodServiceImpl(VodRepository vodRepository) {
			this.vodRepository = vodRepository;
		}
		
		public BaseResponse<Void> createVod(VodDto vodDto){
			Vod vod = new Vod();
			vod.setTitle(vodDto.getTitle());
			vod.setDate(vodDto.getDate());
			vod.setDescription(vodDto.getDescription());
			vod.setThumbnail(vodDto.getThumbnail());
			vod.setUrl(vodDto.getUrl());
			
			vodRepository.save(vod);
			return new BaseResponse<>(
					ResultCode.SUCCESS.name(),
					null,
					"동영상이 게재되었습니다.");
		}
		
		public BaseResponse<List<Vod>> getAllVod(){
			List<Vod> vods = vodRepository.findAll();
			if(vods.isEmpty()) {
				throw new InvalidRequestException("Vods empty", "vod가 존재하지 않습니다");
			}
			return new BaseResponse<> (
					ResultCode.SUCCESS.name(),
					vods,
					ResultCode.SUCCESS.getMsg()
					);
					
		}



}
