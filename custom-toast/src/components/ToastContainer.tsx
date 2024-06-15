import { Toast } from "../types/toast";
import "./ToastContainer.css";

interface ToastContainerProps {
  toasts: Toast[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ toasts }) => {
  return (
    <div className="toast-container">
      {toasts.map((toast) => (
        <div key={toast.id} className={`toast toast-${toast.type}`}>
          {toast.content}
        </div>
      ))}
    </div>
  );
};

export default ToastContainer;
