import api from "./api";

export interface EventDto {
    id: string;
    name: string;
    slug: string;
    description: string | null;
    type: number;
    startDate: string;
    endDate: string | null;
    venue: string | null;
    status: number;
    createdAt: string;
}

export interface CreateEventRequest {
    name: string;
    description?: string;
    type: number;
    startDate: string;
    endDate?: string;
    venue?: string;
}

export interface UpdateEventRequest {
    name: string;
    description?: string;
    type: number;
    startDate: string;
    endDate?: string;
    venue?: string;
    status: number;
}

export async function getEvents(): Promise<EventDto[]> {
    const response = await api.get<EventDto[]>("/events");
    return response.data;
}

export async function getEvent(id: string): Promise<EventDto> {
    const response = await api.get<EventDto>(`/events/${id}`);
    return response.data;
}

export async function createEvent(data: CreateEventRequest): Promise<EventDto> {
    const response = await api.post<EventDto>("/events", data);
    return response.data;
}

export async function updateEvent(
    id: string,
    data: UpdateEventRequest
): Promise<void> {
    await api.put(`/events/${id}`, data);
}

export async function deleteEvent(id: string): Promise<void> {
    await api.delete(`/events/${id}`);
}