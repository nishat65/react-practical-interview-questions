import { createContext, useState } from "react";

type ToastType = "info" | "success" | "warning" | "error";

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

export const ToastContext = createContext<ToastContextProps | undefined>(
  undefined
);

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = (
    content: string,
    type: ToastType = "info",
    duration: number = 3000
  ) => {
    const id = Date.now();
    setToasts((prevToasts) => [...prevToasts, { id, content, type, duration }]);
    setTimeout(() => removeToast(id), duration);
  };

  const removeToast = (id: number) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
};
