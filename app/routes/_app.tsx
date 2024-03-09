import {Outlet} from '@remix-run/react';

export function loader() {
    return {date: new Date()};
}

export default function AppLayout() {
    return <div>
        <Outlet/>
    </div>;
}