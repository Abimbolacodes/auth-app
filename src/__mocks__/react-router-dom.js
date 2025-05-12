import { vi } from 'vitest'; // Import vi for mocking

export const useNavigate = vi.fn();
export const MemoryRouter = ({ children }) => <div>{children}</div>;