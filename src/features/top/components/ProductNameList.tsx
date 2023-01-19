import { Box, Text } from '@chakra-ui/react';
import { Product } from '../types/product';

type Props = { products: Product[] };

const ProductNameList = ({ products = [] }: Props): JSX.Element => (
    <Box>
        {products.map((product) => (
            <Text key={product.id}>{product.title}</Text>
        ))}
    </Box>
);

export default ProductNameList;
