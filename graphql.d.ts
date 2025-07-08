// types/graphql.d.ts
declare module "*.graphql" {
  import { DocumentNode } from "graphql";
  const value: DocumentNode;
  export default value;
}

declare module "*.gql" {
  import { DocumentNode } from "graphql";
  const value: DocumentNode;
  export default value;
}

// declare module "*.graphql" {
//   const content: string;
//   export default content;
// }