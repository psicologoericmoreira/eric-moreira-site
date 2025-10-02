import { toast as sonnerToast } from "sonner";

interface ToastOptions {
  title?: string;
  description?: string;
}

export function useToast() {
  const toast = ({ title, description }: ToastOptions) => {
    if (title && description) {
      sonnerToast(title, { description });
    } else if (title) {
      sonnerToast(title);
    } else if (description) {
      sonnerToast(description);
    }
  };

  return { toast };
}

export { sonnerToast as toast };
