import React from 'react';
export const SvgStripe = ({ className = '' }: { className?: string }) => (
    <svg
        className={`fenext_svg ${className}`}
        viewBox="0 0 650 650"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M288.3 223.6C288.3 201.3 306.9 192.7 336.7 192.7C380.1 192.7 435.2 206 478.6 229.4V95.1C431.3 76.2 384.1 69 336.8 69C221.1 69 144 129.4 144 230.4C144 388.3 360.8 362.7 360.8 430.8C360.8 457.2 337.9 465.7 306.1 465.7C258.9 465.7 197.9 446.2 150 420.2V548.7C199.269 569.955 252.342 580.978 306 581.1C424.6 581.1 506.3 530.1 506.3 427.5C506.3 257.3 288.3 287.8 288.3 223.6V223.6Z"
            fill="currentColor"
        />
    </svg>
);
