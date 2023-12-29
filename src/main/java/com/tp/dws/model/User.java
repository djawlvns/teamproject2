package com.tp.dws.model;

import java.time.LocalDate;
import java.util.Set;

import com.tp.dws.enumstatus.Gender;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import jakarta.persistence.UniqueConstraint;

@Entity
@Table(name = "users", uniqueConstraints = {
		@UniqueConstraint(name = "uk_member_login_id", columnNames = { "loginId" })
})
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(nullable = false, length = 30, updatable = false)
	private String loginId;

	@Column(nullable = false, length = 100)
	private String password;

	@Column(nullable = false, length = 30)
	private String name;
	@Column(nullable = false)
	@Temporal(TemporalType.DATE)
	private LocalDate birthDate;

	@Column(nullable = false, length = 5)
	@Enumerated(EnumType.STRING)
	private Gender gender;

	@Column(nullable = false, length = 100)
	private String email;

	@Column(name = "activated")
	private boolean activated;

	@ManyToMany
	@JoinTable(name = "user_role", joinColumns = {
			@JoinColumn(name = "id", referencedColumnName = "id") }, inverseJoinColumns = {
					@JoinColumn(name = "role_name", referencedColumnName = "role_name") })
	private Set<Role> role;

	@ManyToMany
	@JoinTable(name = "user_homework", joinColumns = {
			@JoinColumn(name = "id", referencedColumnName = "id") }, inverseJoinColumns = {
					@JoinColumn(name = "homework_id", referencedColumnName = "homework_id")
			})
	private Set<HomeWork> homeWork;

	@ManyToMany
	@JoinTable(name = "user_bookmark", joinColumns = {
			@JoinColumn(name = "id", referencedColumnName = "id") }, inverseJoinColumns = {
					@JoinColumn(name = "vod_id", referencedColumnName = "vod_id")
			})
	private Set<Vod> bookmarkVod;

	@ManyToMany
	@JoinTable(name = "user_lecture", joinColumns = {
			@JoinColumn(name = "id", referencedColumnName = "id") }, inverseJoinColumns = {
					@JoinColumn(name = "lectures_id", referencedColumnName = "lectures_id")
			})
	private Set<Lecture> lecture;

	@ManyToMany
	@JoinTable(name = "user_vod", joinColumns = {
			@JoinColumn(name = "id", referencedColumnName = "id") }, inverseJoinColumns = {
					@JoinColumn(name = "vod_id", referencedColumnName = "vod_id")
			})
	private Set<Vod> vod;

	@ManyToMany
	@JoinTable(name = "user_attendance", joinColumns = {
			@JoinColumn(name = "id", referencedColumnName = "id") }, inverseJoinColumns = {
					@JoinColumn(name = "lectures_id", referencedColumnName = "lectures_id")
			})
	private Set<Lecture> atdcLecture;

	@ManyToMany
	@JoinTable(name = "user_board", joinColumns = {
			@JoinColumn(name = "id", referencedColumnName = "id") }, inverseJoinColumns = {
					@JoinColumn(name = "board_id", referencedColumnName = "board_id") })
	private Set<Board> board;

	public User() {
		super();
	}

	public User(Long id, String loginId, String password, String name, LocalDate birthDate,
			Gender gender, String email, boolean activated) {
		super();
		this.id = id;
		this.loginId = loginId;
		this.password = password;
		this.name = name;
		this.birthDate = birthDate;
		this.gender = gender;
		this.email = email;
		this.activated = activated;
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

	public LocalDate getBirthDate() {
		return birthDate;
	}

	public void setBirthDate(LocalDate birthDate) {
		this.birthDate = birthDate;
	}

	public Gender getGender() {
		return gender;
	}

	public void setGender(Gender gender) {
		this.gender = gender;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public boolean isActivated() {
		return activated;
	}

	public void setActivated(boolean activated) {
		this.activated = activated;
	}

	public Set<Role> getrRoles() {
		return role;
	}

	public void setRoles(Set<Role> role) {
		this.role = role;
	}

}
