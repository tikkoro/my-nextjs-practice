import useSWR from 'swr';
import { skimArgs } from '@/utils/fn';
import { getProducts } from '../api/getProducts';
import ProductNameList from './ProductNameList';

const ProductList = (): JSX.Element => {
    const { data: products = [] } = useSWR(
        ['productlist'],
        skimArgs(getProducts)
    );

    return <ProductNameList products={products} />;
};

export default ProductList;
