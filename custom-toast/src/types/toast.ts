export type ToastType = "info" | "success" | "warning" | "error";

export interface Toast {
  id: number;
  content: string;
  type: ToastType;
  duration: number;
}

export interface ToastContextProps {
  toasts: Toast[];
  addToast: (content: string, type?: ToastType, duration?: number) => void;
  removeToast: (id: number) => void;
}
