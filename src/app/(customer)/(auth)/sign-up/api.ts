import { shopifyClient } from "@/config/shopify/shopifyClient";
import { CustomerData } from "./types";
import CreateCustomerMutation from "@/graphql/mutations/customerCreate.graphql";
import { swalAlert } from "@/utils/swal";

export const createCustomer = async (customerData: CustomerData) => {
  const variables = { input: customerData };
  const { data, errors } = await shopifyClient.request(CreateCustomerMutation, {
    variables,
  });

  if (errors && Object.keys(errors).length) {
    const message = errors.message || [];
    swalAlert("Error", message, "error");
  }

  const customerErrors = data?.customerCreate?.customerUserErrors || [];

  if (customerErrors.length) {
    const messages = customerErrors.map((error) => error.message).join(", ");
    swalAlert("Error", messages, "error");
  }
  if (data?.customerCreate?.customer) {
    swalAlert("Success", "Customer created successfully", "success");
  }
};
