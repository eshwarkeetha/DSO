import type { Struct, Schema } from '@strapi/strapi';

export interface SharedCart extends Struct.ComponentSchema {
  collectionName: 'components_shared_carts';
  info: {
    displayName: 'Cart';
    description: '';
  };
  attributes: {
    products: Schema.Attribute.Relation<'oneToMany', 'api::product.product'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.cart': SharedCart;
    }
  }
}
