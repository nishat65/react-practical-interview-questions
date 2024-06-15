import { createContext, useState } from "react";
import { Toast, ToastContextProps, ToastType } from "../types/toast";

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
