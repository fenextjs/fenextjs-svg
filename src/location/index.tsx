import React from 'react';
export const Location = ({ className = '' }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`fenext_svg ${className}`}
        viewBox="0 0 14.668 20.65"
    >
        <g data-name="location (1)">
            <path
                data-name="Path 11844"
                d="M82.593 19.887a.59.59 0 0 0 .982 0c1.4-2.1 3.455-4.684 4.889-7.316a11.728 11.728 0 0 0 1.7-5.487 7.084 7.084 0 0 0-14.164 0 11.728 11.728 0 0 0 1.7 5.487c1.437 2.629 3.5 5.229 4.893 7.316zm.491-18.706a5.91 5.91 0 0 1 5.9 5.9 10.624 10.624 0 0 1-1.56 4.923 74.247 74.247 0 0 1-4.343 6.505 74.255 74.255 0 0 1-4.343-6.505 10.624 10.624 0 0 1-1.56-4.923 5.91 5.91 0 0 1 5.9-5.9z"
                transform="translate(-75.75 .25)"
                fill="#464646"
                stroke="#464646"
                strokeWidth="1px"
            ></path>
            <path
                data-name="Path 11845"
                d="M169.542 97.084A3.542 3.542 0 1 0 166 93.542a3.546 3.546 0 0 0 3.542 3.542zm0-5.9a2.361 2.361 0 1 1-2.361 2.361 2.364 2.364 0 0 1 2.361-2.364z"
                transform="translate(-162.208 -86.208)"
                fill="#464646"
                stroke="#464646"
                strokeWidth="1px"
            ></path>
        </g>
    </svg>
);
// export const LocationAnimation = ({ className = "" }: { className?: string }) => (
//     <>
//         <svg
//             className={`fenext_svg ${className}`}
//             viewBox="0 0 100 100"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//         >
//             <style jsx>
//                 {`
//                     .Vector_291 {
//                         animation: 0.5s linear 0.2s 1 normal forwards running
//                             Vector_291;
//                         width: 50px;
//                         animation-iteration-count: infinite;
//                     }
//                     @keyframes Vector_291 {
//                         0% {
//                             width: 50px;
//                         }
//                         40% {
//                             width: 50px;
//                         }
//                         86% {
//                             width: 60px;
//                         }
//                         100% {
//                             width: 60px;
//                         }
//                     }
//                     .c_352 {
//                         animation: 0.5s linear 0s 1 normal forwards running
//                             c_352;
//                         transform: translateX(32.81px)
//                             translateY(13.989999999999998px);
//                         animation-iteration-count: infinite;
//                     }
//                     @keyframes c_352 {
//                         0% {
//                             transform: translateX(32.81px)
//                                 translateY(13.989999999999998px);
//                         }
//                         60% {
//                             transform: translateX(37.56px)
//                                 translateY(13.989999999999998px);
//                         }
//                         100% {
//                             transform: translateX(12.56px)
//                                 translateY(13.989999999999998px);
//                         }
//                     }
//                 `}
//             </style>
//             <g
//                 clip-path="url(#clip_0_561)"
//                 width="100"
//                 height="100"
//                 data-name="Frame 4"
//             >
//                 <rect
//                     width="100"
//                     height="100"
//                     fill="white"
//                     data-name="Frame 4"
//                 />
//                 <g
//                     transform="translate(25 14)"
//                     width="57.7"
//                     height="72.31"
//                     data-name="Group"
//                 >
//                     <path
//                         d="M25.0043 72.309C24.6897 72.309 24.3751 72.1823 24.1275 71.9267C23.3928 71.171 6.07653 53.2412 1.2766 36.6801C0.430269 33.7593 0 30.7932 0 27.8656C0 20.1959 2.87996 12.7864 7.90112 7.53753C12.9953 2.214 19.6564 -0.442109 26.6584 0.0601536C39.0368 0.949294 49.0446 12.0194 49.9355 25.8135C50.1568 29.2208 49.8077 32.6665 48.9025 36.0579C45.0463 50.4855 26.697 71.0217 25.9176 71.8882C25.6659 72.1688 25.3351 72.309 25.0043 72.309ZM3.73644 35.7954C7.71846 49.5307 21.3186 64.8905 24.9718 68.843C28.7144 64.5217 43.2197 47.2276 46.4244 35.2366C47.2403 32.1801 47.5549 29.0805 47.356 26.024C46.5563 13.6597 37.5876 3.73436 26.492 2.94024C20.2125 2.49002 14.2374 4.87011 9.66887 9.64386C5.10031 14.4199 2.58364 20.8927 2.58364 27.8701C2.58567 30.4945 2.97332 33.162 3.73644 35.7954Z"
//                         fill="#121331"
//                         data-name="Vector"
//                         className="Vector_291"
//                     />
//                     <path
//                         d="M13.25 27.7501C6.38599 27.7501 0.802647 21.5261 0.802647 13.8745C0.802647 6.22293 6.38599 -0.00105476 13.25 -0.00105476C20.114 -0.00105476 25.6974 6.22293 25.6974 13.8745C25.6974 21.5261 20.114 27.7501 13.25 27.7501ZM13.25 2.8813C7.81278 2.8813 3.38832 7.81342 3.38832 13.8745C3.38832 19.9356 7.81278 24.8677 13.25 24.8677C18.6872 24.8677 23.1117 19.9356 23.1117 13.8745C23.1117 7.81342 18.6892 2.8813 13.25 2.8813Z"
//                         fill="#08A88A"
//                         data-name="c"
//                         className="c_352"
//                     />
//                 </g>
//             </g>
//             <defs>
//                 <clipPath id="clip_0_561">
//                     <rect width="100" height="100" />
//                 </clipPath>
//             </defs>
//         </svg>
//     </>
// );

export default Location;
