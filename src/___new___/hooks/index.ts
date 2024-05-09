import { useLocation } from '@docusaurus/router';
import { useProductId } from '../../utils/useProductId';

export const useDocVersion = (productId: string | undefined) => {
  const { pathname } = useLocation();
  const regex = new RegExp(`${productId}\/(latest|\d+(\.\d+)*)\/`);

  return productId === 'calico-cloud' || !productId ? null : (pathname.match(regex) ?? [])[1];
};

export const useDocUrl = (docId: string) => {
  const productId = useProductId();
  const version = useDocVersion(productId);

  return `/${[productId, version, docId].filter(Boolean).join('/')}`;
};
