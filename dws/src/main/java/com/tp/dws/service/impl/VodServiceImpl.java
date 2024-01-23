package com.tp.dws.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tp.dws.dto.BaseResponse;
import com.tp.dws.dto.VodDto;
import com.tp.dws.enumstatus.ResultCode;
import com.tp.dws.exception.InvalidRequestException;
import com.tp.dws.model.BookMark;
import com.tp.dws.model.User;
import com.tp.dws.model.Vod;
import com.tp.dws.repository.BookMarkRepository;
import com.tp.dws.repository.UserRepository;
import com.tp.dws.repository.VodRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class VodServiceImpl {

		private final VodRepository vodRepository;
		private final UserRepository userRepository;
		private final BookMarkRepository bookmarkRepository;

		@Autowired
		public VodServiceImpl(VodRepository vodRepository, UserRepository userRepository,
				BookMarkRepository bookmarkRepository) {
			this.vodRepository = vodRepository;
			this.userRepository = userRepository;
			this.bookmarkRepository = bookmarkRepository;
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
				throw new InvalidRequestException("Vods empty", "동영상이 존재하지 않습니다.");
			}
			return new BaseResponse<>(
					ResultCode.SUCCESS.name(),
					vods,
					ResultCode.SUCCESS.getMsg());
					
		}
		
		public BaseResponse<List<Vod>> getBookmarkedVod(Long userId) {
		    // Retrieve the user from the database
		    User user = userRepository.findById(userId)
		            .orElseThrow(() -> new InvalidRequestException("User not found", "User not found."));

		    // Get bookmarked VODs for the user
		    Set<Vod> bookmarkedVod = user.getVod();

		    if (bookmarkedVod.isEmpty()) {
		        throw new InvalidRequestException("No bookmarked VODs", "There are no bookmarked VODs.");
		    }

		    return new BaseResponse<>(
		            ResultCode.SUCCESS.name(),
		            new ArrayList<>(bookmarkedVod),
		            ResultCode.SUCCESS.getMsg()
		    );
		}
		
		
		public BaseResponse<Void> addVodToBookmark(Long vodId, Long userId) {
	        // Retrieve the VOD from the database
	        Vod vod = vodRepository.findById(vodId)
	                .orElseThrow(() -> new InvalidRequestException("VOD not found", "Video not found."));

	        // Retrieve the user from the database
	        User user = userRepository.findById(userId)
	                .orElseThrow(() -> new InvalidRequestException("User not found", "User not found."));

	        // Check if the VOD is already in the user's bookmarks
	        if (user.getVod().contains(vod)) {
	            throw new InvalidRequestException("Already bookmarked", "Already added to favorites.");
	        }

	        // Create a new bookmark and associate it with the user and VOD
	        BookMark newBookmark = new BookMark();
	        newBookmark.setUser(user);
	        newBookmark.setVod(vod);
	        bookmarkRepository.save(newBookmark);

	        return new BaseResponse<>(
	                ResultCode.SUCCESS.name(),
	                null,
	                "The video has been added to your favorites."
	        );
	    }


}
