import { swalAlert } from "./swal";

export const apiClient = async <T>(
  endpoint: string,
  payload: unknown,
  method: "POST" | "GET" | "PUT" | "DELETE" = "POST"
): Promise<T> => {
  const res = await fetch(endpoint, {
    method,
    headers: { "Content-Type": "application/json" },
    body: method !== "GET" ? JSON.stringify(payload) : undefined,
  });

  const data = await res.json();

  if (data.success === false) {
    swalAlert(
      "Something went wrong",
      data.message || "An error occurred while processing your request",
      "error"
    );
    throw new Error(data.message || "API request failed");
  }

  return data as T;
};
