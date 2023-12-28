import React from 'react';
export const Font = ({ className = '' }: { className?: string }) => (
    <svg
        className={`fenext_svg ${className}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
    >
        <path
            d="M254 52.8C249.3 40.3 237.3 32 224 32s-25.3 8.3-30 20.8L57.8 416H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32h-1.8l18-48H303.8l18 48H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H390.2L254 52.8zM279.8 304H168.2L224 155.1 279.8 304z"
            fill="currentColor"
        />
    </svg>
);
export default Font;
