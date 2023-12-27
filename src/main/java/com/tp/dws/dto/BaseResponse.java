package com.tp.dws.dto;

public class BaseResponse<T> {
	
	private String resultCode;
	
	private T data;
	
	private String massage;

	public BaseResponse() {
		super();
	}

	public BaseResponse(String resultCode, T data, String massage) {
		super();
		this.resultCode = resultCode;
		this.data = data;
		this.massage = massage;
	}

	public String getResultCode() {
		return resultCode;
	}

	public void setResultCode(String resultCode) {
		this.resultCode = resultCode;
	}

	public T getData() {
		return data;
	}

	public void setData(T data) {
		this.data = data;
	}

	public String getMassage() {
		return massage;
	}

	public void setMassage(String massage) {
		this.massage = massage;
	}
	
	

}
