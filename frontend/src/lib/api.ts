const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

interface RequestOptions extends RequestInit {
  token?: string | null;
}

async function request<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
  const { token, headers: customHeaders, ...rest } = options;

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...((customHeaders as Record<string, string>) || {}),
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const res = await fetch(`${API_URL}${endpoint}`, { headers, ...rest });

  if (!res.ok) {
    const error = await res.json().catch(() => ({ message: 'Request failed' }));
    throw new Error(error.message || `HTTP ${res.status}`);
  }

  if (res.status === 204) return {} as T;
  return res.json();
}

export const api = {
  auth: {
    register: (data: any) => request('/auth/register', { method: 'POST', body: JSON.stringify(data) }),
    login: (data: any) => request('/auth/login', { method: 'POST', body: JSON.stringify(data) }),
    profile: (token: string) => request('/auth/profile', { token }),
  },
  users: {
    me: (token: string) => request('/users/me', { token }),
    updateMe: (token: string, data: any) => request('/users/me', { method: 'PUT', token, body: JSON.stringify(data) }),
    getAll: (token: string, page = 1) => request(`/users?page=${page}`, { token }),
    getById: (token: string, id: string) => request(`/users/${id}`, { token }),
  },
  challenges: {
    create: (token: string | null, data: any) => request('/challenges', { method: 'POST', ...(token ? { token } : {}), body: JSON.stringify(data) }),
    my: (token: string) => request('/challenges/my', { token }),
    getAll: (token: string, page = 1) => request(`/challenges?page=${page}`, { token }),
    getById: (token: string, id: string) => request(`/challenges/${id}`, { token }),
    complete: (token: string, id: string) => request(`/challenges/${id}/complete`, { method: 'PATCH', token }),
  },
  orders: {
    create: (token: string, data: any) => request('/orders', { method: 'POST', token, body: JSON.stringify(data) }),
    my: (token: string) => request('/orders/my', { token }),
    getAll: (token: string, page = 1) => request(`/orders?page=${page}`, { token }),
    getById: (token: string, id: string) => request(`/orders/${id}`, { token }),
    getPrice: () => request('/orders/price'),
  },
  payments: {
    createIntent: (token: string, orderId: string) => request(`/payments/create-intent/${orderId}`, { method: 'POST', token }),
    my: (token: string) => request('/payments/my', { token }),
  },
  testimonials: {
    getPublic: () => request('/testimonials/public'),
    create: (token: string, data: any) => request('/testimonials', { method: 'POST', token, body: JSON.stringify(data) }),
    my: (token: string) => request('/testimonials/my', { token }),
    getAll: (token: string, page = 1) => request(`/testimonials?page=${page}`, { token }),
    approve: (token: string, id: string) => request(`/testimonials/${id}/approve`, { method: 'PATCH', token }),
    reject: (token: string, id: string) => request(`/testimonials/${id}/reject`, { method: 'PATCH', token }),
  },
  contact: {
    create: (data: any) => request('/contact', { method: 'POST', body: JSON.stringify(data) }),
    getAll: (token: string, page = 1) => request(`/contact?page=${page}`, { token }),
    markRead: (token: string, id: string) => request(`/contact/${id}/read`, { method: 'PATCH', token }),
  },
  admin: {
    dashboard: (token: string) => request('/admin/dashboard', { token }),
    getStats: (token: string) => request('/admin/dashboard', { token }),
  },
};
