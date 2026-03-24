export const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

export async function apiClient<T>(
    endpoint: string,
    options: RequestInit & { revalidate?: number | false } = {}
): Promise<T> {
    const { revalidate, ...fetchOptions } = options;

    const config: RequestInit = {
        ...fetchOptions,
        headers: {
            'Content-Type': 'application/json',
            ...fetchOptions.headers,
        },
        next: revalidate !== undefined ? { revalidate } : fetchOptions.next,
    };

    const response = await fetch(`${BASE_URL}${endpoint}`, config);

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `Error en la petición: ${response.status}`);
    }

    return response.json();
}
