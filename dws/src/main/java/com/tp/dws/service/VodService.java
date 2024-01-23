package com.tp.dws.service;

import java.util.List;

import com.tp.dws.dto.BaseResponse;
import com.tp.dws.model.Vod;

public interface VodService {

	public BaseResponse<List<Vod>> getAllVod();
	public BaseResponse<List<Vod>> getBookmarkdVod();
}
