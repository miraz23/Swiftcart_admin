import React from 'react';
import { Outlet } from 'react-router-dom';

const layout = () => {

    return (
        <div>
            <main>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default layout;