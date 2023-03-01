import {useState} from "react";
import {Helmet} from "react-helmet-async";
import {Container, Stack, Typography} from "@mui/material";
import { ProductList} from "../sections/@dashboard/products";
import PRODUCTS from "../_mock/products";

function MainAppPage() {
    const [openFilter, setOpenFilter] = useState(false);

    const handleOpenFilter = () => {
        setOpenFilter(true);
    };

    const handleCloseFilter = () => {
        setOpenFilter(false);
    };

    return (
        <>
            <Helmet>
                <title> Dashboard: Products | Minimal UI </title>
            </Helmet>

            <Container>
                <Typography variant="h4" sx={{ mb: 5 }}>
                    Products
                </Typography>

                <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}/>
                    <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }} />

                <ProductList products={PRODUCTS} />

            </Container>
        </>
    )
}
export default MainAppPage