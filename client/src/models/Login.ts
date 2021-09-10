type Auth = {
    isLogin: boolean
}
type LoginDto = {
    login: string,
    password: string
}
type LoginResponseDto = {
    authToken: string
}


export type  {LoginDto, Auth, LoginResponseDto}