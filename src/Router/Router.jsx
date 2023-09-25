
import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Statistics from "../Pages/Statistics/Statistics";
import DonationsMade from "../Pages/DonationsMade/DonationsMade";
import Root from "../Pages/Root/Root";
import DonationDescription from "../Pages/DonationDescription/DonationDescription";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>, 
        children: [
            {
                path: '/',
                loader: () => fetch('/donation.json'), 
                element: <Home></Home>
            },
            {
                path: '/statistics',
                loader: () => fetch('donation.json'), 
                element: <Statistics></Statistics>
            },
            {
                path: '/donationdescription/:id',
                element: <DonationDescription/>,
                loader: async ({params}) => {
                    const res = await fetch('/donation.json')
                    const data = await res.json()
                    const donation = data.find(d=> d.id == params.id)

                    return donation

                },
                
            },
            {
                path: '/donation',
                element: <DonationsMade></DonationsMade>
            }
        ]
    }
])



export default router;