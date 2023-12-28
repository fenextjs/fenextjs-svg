import React from 'react';
export const Size = ({ className = '' }: { className?: string }) => (
    <svg
        className={`fenext_svg ${className}`}
        viewBox="0 0 662 662"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M0.2 618.9C2.7 643.1 23.1 662 48 662H144H464C490.5 662 512 640.5 512 614V518C512 491.5 490.5 470 464 470H416V550C416 558.8 408.8 566 400 566C391.2 566 384 558.8 384 550V470H320V550C320 558.8 312.8 566 304 566C295.2 566 288 558.8 288 550V470H224V550C224 558.8 216.8 566 208 566C199.2 566 192 558.8 192 550V470H112C103.2 470 96 462.8 96 454C96 445.2 103.2 438 112 438H192V374H112C103.2 374 96 366.8 96 358C96 349.2 103.2 342 112 342H192V278H112C103.2 278 96 270.8 96 262C96 253.2 103.2 246 112 246H192V198C192 171.5 170.5 150 144 150H48C21.5 150 0 171.5 0 198V518V614C0 615.7 0.1 617.3 0.2 618.9Z"
            fill="currentColor"
        />
        <rect
            x="234"
            y="17"
            width="411"
            height="411"
            rx="30"
            stroke="currentColor"
            strokeWidth="20"
        />
    </svg>
);
export default Size;
