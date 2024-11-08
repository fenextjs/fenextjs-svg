import React from 'react';
export const SvgColor = ({ className = '' }: { className?: string }) => (
    <svg
        className={`fenext_svg ${className}`}
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M50 25C50 25.0879 50 25.1758 50 25.2637C49.9609 28.8281 46.7187 31.25 43.1543 31.25H33.5938C31.0059 31.25 28.9062 33.3496 28.9062 35.9375C28.9062 36.2695 28.9453 36.5918 29.0039 36.9043C29.209 37.9004 29.6387 38.8574 30.0586 39.8242C30.6543 41.1719 31.2402 42.5098 31.2402 43.9258C31.2402 47.0312 29.1309 49.8535 26.0254 49.9805C25.6836 49.9902 25.3418 50 24.9902 50C11.1914 50 0 38.8086 0 25C0 11.1914 11.1914 0 25 0C38.8086 0 50 11.1914 50 25ZM12.5 28.125C12.5 26.3965 11.1035 25 9.375 25C7.64648 25 6.25 26.3965 6.25 28.125C6.25 29.8535 7.64648 31.25 9.375 31.25C11.1035 31.25 12.5 29.8535 12.5 28.125ZM12.5 18.75C14.2285 18.75 15.625 17.3535 15.625 15.625C15.625 13.8965 14.2285 12.5 12.5 12.5C10.7715 12.5 9.375 13.8965 9.375 15.625C9.375 17.3535 10.7715 18.75 12.5 18.75ZM28.125 9.375C28.125 7.64648 26.7285 6.25 25 6.25C23.2715 6.25 21.875 7.64648 21.875 9.375C21.875 11.1035 23.2715 12.5 25 12.5C26.7285 12.5 28.125 11.1035 28.125 9.375ZM37.5 18.75C39.2285 18.75 40.625 17.3535 40.625 15.625C40.625 13.8965 39.2285 12.5 37.5 12.5C35.7715 12.5 34.375 13.8965 34.375 15.625C34.375 17.3535 35.7715 18.75 37.5 18.75Z"
            fill="currentColor"
        />
    </svg>
);
