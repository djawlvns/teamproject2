package com.tp.dws.dto;

import java.util.Set;
import java.util.stream.Collectors;

import com.tp.dws.dto.UserDto;
import com.tp.dws.model.User;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;

public class UserDto {
	
	private Long id;
	
	@NotBlank
	private String loginId;
	@NotBlank
	@Pattern(regexp = "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@#$%^&*!])[A-Za-z\\d@#$%^&*!]{8,20}$",
			message = "영문 숫자 특수문자를 포함한 8~20자리로 입력해주세요.")
	private String password;
	@NotBlank
	private String name;
	@NotBlank
	@Pattern(regexp = "^([12]\\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01]))$",
	message = "날짜형식 (YYYY-MM-DD)을 확인해주세요.")
	private String birthDate;
	@NotBlank
	@Pattern(regexp = "^(MAN|WOMAN)$",
	message = "MAN이나 WOMAN즁 하나를 선택해주세요")
	private String gender;
	@NotBlank
	@Email
	private String email;
	
	private Set<RoleDto> roleDtoSet; 
	
	public UserDto() {
		super();
	}


	public UserDto(
			Long id,
			@NotBlank String loginId,
			@NotBlank @Pattern(regexp = "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@#$%^&*!])[A-Za-z\\d@#$%^&*!]{8,20}$", message = "영문 숫자 특수문자를 포함한 8~20자리로 입력해주세요.") String password,
			@NotBlank String name,
			@NotBlank @Pattern(regexp = "^([12]\\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01]))$", message = "날짜형식 (YYYY-MM-DD)을 확인해주세요.") String birthDate,
			@NotBlank @Pattern(regexp = "^(MAN|WOMAN)$", message = "MAN이나 WOMAN즁 하나를 선택해주세요") String gender,
			@NotBlank @Email String email, Set<RoleDto> roleDtoSet) {
		super();
		this.id = id;
		this.loginId = loginId;
		this.password = password;
		this.name = name;
		this.birthDate = birthDate;
		this.gender = gender;
		this.email = email;
		this.roleDtoSet = roleDtoSet;
	}
	

	
	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getLoginId() {
		return loginId;
	}


	public void setLoginId(String loginId) {
		this.loginId = loginId;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getBirthDate() {
		return birthDate;
	}


	public void setBirthDate(String birthDate) {
		this.birthDate = birthDate;
	}


	public String getGender() {
		return gender;
	}


	public void setGender(String gender) {
		this.gender = gender;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public Set<RoleDto> getRoleDtoSet() {
		return roleDtoSet;
	}


	public void setRoleDtoSet(Set<RoleDto> roleDtoSet) {
		this.roleDtoSet = roleDtoSet;
	}


	public static UserDto from(User user) {
		if(user == null) return null;
		
		Set<RoleDto> roleDtoSet = user.getRoles().stream()
				.map(role -> new RoleDto(role.getRoleName()))
				.collect(Collectors.toSet());
		Long userId = user.getId();
		
		return new UserDto(userId, user.getLoginId(), user.getPassword(), user.getName(),
				user.getBirthDate().toString(),user.getGender().toString(),user.getEmail(), roleDtoSet);
	}

}
