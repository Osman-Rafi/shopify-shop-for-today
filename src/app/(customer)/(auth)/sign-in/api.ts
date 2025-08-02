// import { shopifyClient } from "@/config/shopify/shopifyClient";
// import customerAccessTokenCreate from "@/graphql/mutations/customerAccessTokenCreate.graphql";
// import { swalAlert } from "@/utils/swal";

// export const createCustomerAccessTotken = async (customerData: {
//   email: string;
//   password: string;
// }) => {
//   const variables = { input: customerData };
//   const { data, errors } = await shopifyClient.request(
//     customerAccessTokenCreate,
//     {
//       variables,
//     }
//   );

//   //error handling
//   if (errors && Object.keys(errors).length) {
//     const message = errors.message || [];
//     swalAlert("Error", message, "error");
//   }

//   const customerErrors =
//     data?.customerAccessTokenCreate?.customerUserErrors || [];

//   if (customerErrors.length) {
//     const messages = customerErrors.map((error) => error.message).join(", ");
//     swalAlert("Error", messages, "error");
//   }

//   const accessToken =
//     data?.customerAccessTokenCreate?.customerAccessToken?.accessToken;

//   if (accessToken) {
//     localStorage.setItem("customerAccessToken", accessToken);

//     return { success: true, accessToken };
//   }
// };
