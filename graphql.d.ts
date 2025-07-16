// types/graphql.d.ts
// declare module "*.graphql" {
//   import { DocumentNode } from "graphql";
//   const value: DocumentNode | string;
//   export default value;
// }

// declare module "*.gql" {
//   import { DocumentNode } from "graphql";
//   const value: DocumentNode | string;
//   export default value;
// }

declare module "*.graphql" {
  const value: string; // ✅ NOT DocumentNode
  export default value;
}

declare module "*.gql" {
  const value: string;
  export default value;
}