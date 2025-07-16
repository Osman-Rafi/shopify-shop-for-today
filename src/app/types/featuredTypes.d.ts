export interface ProductNode {
  node: {
    handle: string;
    title: string;
    descriptionHtml: string;
    variants: {
      edges: Array<{
        node: {
          price: {
            amount: string;
          };
        };
      }>;
    };
  };
}
