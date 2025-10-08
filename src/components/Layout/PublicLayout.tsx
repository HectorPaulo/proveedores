import React from 'react';
import Navbar from '../Navbar/Navbar';
import type { ReactNode } from 'react';

interface PublicLayoutProps {
    children: ReactNode;
}

const PublicLayout: React.FC<PublicLayoutProps> = ({ children }) => {
    return (
        <div className="relative">
            <div
                className="absolute inset-0 blur-xl h-[580px]"
                style={{
                    background:
                        "linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(232, 121, 249, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)",
                }}
            ></div>
            <div className="relative">
                <Navbar />
                {children}
            </div>
        </div>
    );
};

export default PublicLayout;