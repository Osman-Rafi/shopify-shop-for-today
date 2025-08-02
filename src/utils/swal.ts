import Swal from "sweetalert2";

type AlertOptions = "info" | "error" | "success" | "warning" | "question";

export const swalAlert = (
  title = "Response",
  text: string | string[] = "No message provided",
  icon: AlertOptions = "info"
) => {
  Swal.fire({
    title,
    text: Array.isArray(text) ? text.join(", ") : text,
    icon,
    confirmButtonText: "OK",
  });
};
