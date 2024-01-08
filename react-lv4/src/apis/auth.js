import api from './api'

// 로그인
export const login = (username, password) => api.post(`/login?username = ${username}&password=${password}`)

// 사용자 정보
export const info = (userId) => api.get(`/users/${userId}`)

// 회원 가입
export const join = (data) => api.post(`/users`, data)

// 회원 정보 수정
export const update = (data) => api.put(`/users`, data)

// 회원 탈퇴
export const remove = (userId) => api.delete(`/users/${userId}`)