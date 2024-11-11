import React from 'react';
export const SvgNumberDecrease = ({
    className = '',
}: {
    className?: string;
}) => (
    <svg
        className={`fenext_svg ${className}`}
        viewBox="0 0 416 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M32 0H240H384C401.7 0 416 14.3 416 32C416 49.7 401.7 64 384 64H240H32C14.3 64 0 49.7 0 32C0 14.3 14.3 0 32 0Z"
            fill="currentColor"
        />
    </svg>
);
