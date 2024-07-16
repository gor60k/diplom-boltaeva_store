import BasketPage from "./pages/BasketPage";
import Shop from "./pages/Shop/Shop";
import ProductPage from "./pages/ProductPage/ProductPage";
import { ABOUT_PAGE, ADMIN_ROUTE, BASKET_PAGE, PRODUCTPAGE_ROUTE, SHOP_ROUTE } from "./utils/consts";
import { About } from "./pages/About";
import { Admin } from "./pages/Admin"; 

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop,
    },
    {
        path: PRODUCTPAGE_ROUTE + '/:id',
        Component: ProductPage,
    },
    {
        path: ABOUT_PAGE,
        Component: About
    },
    {
        path: ADMIN_ROUTE,
        Component: Admin
    }
]

export const privateRoutes = [
    {
        path: BASKET_PAGE,
        Component: BasketPage
    }
]