// src/components/Layout.tsx

import React, { ReactNode } from "react";
import Footer from "./Footer";  // Adjust the path as needed

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col justify-between">
            <main className="flex-grow">{children}</main> {/* Main content area */}
            <Footer />
        </div>
    );
};

export default Layout;
