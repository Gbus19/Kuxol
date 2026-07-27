import api from "./api";

export interface RegisterRequest {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface LoginRequest {
    email: string;
    password: string;
}

export interface UserDto {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    plan: string;
}

export interface LoginResponse {
    success: boolean;
    message: string;
    token: string;
    refreshToken: string;
    user: UserDto;
}

export interface MeResponse {
    success: boolean;
    message: string;
    user: UserDto;
}

export async function register(
    data: RegisterRequest
) {
    const response = await api.post(
        "/auth/register",
        data
    );

    return response.data;
}

export async function login(
    data: LoginRequest
): Promise<LoginResponse> {

    const response = await api.post<LoginResponse>(
        "/auth/login",
        data
    );

    return response.data;
}

export async function me(): Promise<MeResponse> {

    const response = await api.get<MeResponse>(
        "/auth/me"
    );

    return response.data;
}