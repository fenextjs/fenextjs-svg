import React from 'react';
export const SvgNumberIncrease = ({
    className = '',
}: {
    className?: string;
}) => (
    <svg
        className={`fenext_svg ${className}`}
        viewBox="0 0 416 416"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M240 32C240 14.3 225.7 0 208 0C190.3 0 176 14.3 176 32V176H32C14.3 176 0 190.3 0 208C0 225.7 14.3 240 32 240H176V384C176 401.7 190.3 416 208 416C225.7 416 240 401.7 240 384V240H384C401.7 240 416 225.7 416 208C416 190.3 401.7 176 384 176H240V32Z"
            fill="currentColor"
        />
    </svg>
);
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
