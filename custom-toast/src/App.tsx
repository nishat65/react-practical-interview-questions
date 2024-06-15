import React from "react";
import { ToastProvider } from "./context/ToastContext";
import "./App.css";
import { useToast } from "./hooks/useToast";
import ToastContainer from "./components/ToastContainer";

const App: React.FC = () => {
  return (
    <ToastProvider>
      <div className="App">
        <h1>Custom Toast Example</h1>
        <Toaster />
        <ToastProviderComponent />
      </div>
    </ToastProvider>
  );
};

const Toaster: React.FC = () => {
  const { addToast } = useToast();

  const showToast = (type: "info" | "success" | "warning" | "error") => {
    addToast(`This is a ${type} message`, type);
  };

  return (
    <div>
      <button onClick={() => showToast("info")}>Show Info Toast</button>
      <button onClick={() => showToast("success")}>Show Success Toast</button>
      <button onClick={() => showToast("warning")}>Show Warning Toast</button>
      <button onClick={() => showToast("error")}>Show Error Toast</button>
    </div>
  );
};

const ToastProviderComponent: React.FC = () => {
  const { toasts } = useToast();
  return <ToastContainer toasts={toasts} />;
};

export default App;
