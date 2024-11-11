import React from 'react';
export const SvgCardJCB = ({ className = '' }: { className?: string }) => (
    <svg
        className={`fenext_svg fenext_svg_card_jcb ${className}`}
        viewBox="0 0 10000 5000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <rect
            width="10000"
            height="5000"
            rx="940"
            fill="var(--fenext-svg-bg,#FFF)"
        />
        <path
            d="M4801.53 1524.61C4380.16 1567.23 4078.34 1683.24 3883.04 1878.57C3788.35 1974.46 3700.76 2139.01 3671.17 2277.51C3648.68 2386.42 3647.5 2610.16 3669.99 2720.26C3738.64 3073.03 4023.89 3325.18 4470.12 3428.18C4512.73 3437.65 4574.27 3451.85 4606.23 3460.14C4719.86 3486.18 5095.07 3499.2 5349.54 3485C5480.93 3477.9 5609.94 3467.24 5635.98 3461.32C5662.02 3455.4 5721.2 3443.57 5766.18 3436.46C5966.21 3402.13 6019.47 3390.29 6043.14 3378.46C6066.82 3365.43 6068 3355.96 6068 3181.94C6068 3078.95 6063.27 2997.27 6056.16 2992.53C6050.25 2988.98 6013.55 3002.01 5974.49 3022.13C5935.43 3041.07 5896.38 3057.64 5888.09 3057.64C5879.8 3057.64 5858.5 3064.75 5841.93 3074.22C5811.16 3089.61 5742.51 3112.1 5618.23 3145.25C5534.19 3167.74 5303.38 3199.7 5222.9 3199.7C5141.23 3199.7 4980.25 3170.11 4896.22 3139.33C4706.84 3069.48 4580.19 2940.45 4515.09 2752.22C4478.4 2642.13 4476.03 2378.14 4511.54 2270.41C4609.78 1973.28 4860.71 1814.65 5230 1814.65C5478.56 1814.65 5753.16 1879.75 6005.27 2000.5C6026.57 2009.97 6049.06 2014.71 6054.98 2009.97C6063.27 2005.24 6068 1936.58 6068 1826.48C6068 1656.02 6066.82 1648.91 6041.96 1632.34C6014.74 1614.58 5976.86 1606.3 5772.1 1573.15C5716.47 1563.68 5658.47 1553.02 5641.9 1549.47C5572.06 1532.9 5215.79 1506.86 5087.96 1508.04C5012.21 1509.22 4883.2 1516.33 4801.53 1524.61ZM2620.12 1574.33C2615.38 1577.88 2611.83 1833.59 2611.83 2141.38C2611.83 2736.83 2605.92 2811.41 2552.65 2930.98C2520.7 3003.19 2424.82 3096.71 2344.34 3134.59C2272.14 3168.92 2137.2 3199.7 2059.08 3199.7C1912.32 3199.7 1601.02 3133.41 1467.27 3074.22C1447.15 3064.75 1424.66 3057.64 1416.38 3057.64C1409.28 3057.64 1370.22 3041.07 1331.16 3022.13C1290.92 3002.01 1250.67 2988.98 1242.39 2991.35C1230.55 2996.09 1227 3039.89 1227 3181.94V3365.43L1267.24 3382.01C1306.3 3398.58 1342.99 3405.68 1576.17 3443.57C1776.2 3475.53 1848.4 3482.63 2067.37 3489.73C2300.54 3498.02 2602.36 3482.63 2700.61 3458.96C2868.68 3418.71 2944.43 3395.03 3014.26 3363.07C3213.11 3270.73 3326.74 3146.43 3396.57 2948.73C3422.61 2875.34 3422.61 2865.87 3422.61 2223.06V1571.96L3024.92 1568.41C2807.13 1567.23 2624.85 1569.6 2620.12 1574.33ZM6367.46 1574.33C6355.62 1579.07 6352.07 1775.58 6352.07 2501.25C6352.07 3418.71 6352.07 3423.44 6375.74 3436.46C6393.5 3445.93 6675.2 3448.3 7343.94 3444.75C8377.24 3440.01 8353.57 3441.2 8505.07 3367.8C8582.01 3329.92 8692.08 3225.74 8726.41 3158.27C8802.16 3011.48 8784.4 2830.35 8681.43 2700.13C8609.23 2607.8 8476.66 2536.77 8299.12 2495.34C8267.16 2488.23 8241.12 2476.39 8243.49 2470.48C8244.67 2464.56 8270.71 2453.9 8300.3 2445.62C8541.76 2384.06 8682.61 2185.18 8649.47 1950.78C8621.07 1749.54 8469.56 1622.87 8204.43 1577.88C8141.7 1567.23 6392.31 1563.68 6367.46 1574.33ZM7752.29 1869.1C7832.78 1910.53 7890.77 2004.05 7890.77 2092.84C7890.77 2189.91 7816.2 2295.27 7728.62 2321.32C7680.09 2335.52 7136.81 2343.81 7123.79 2329.6C7113.14 2320.13 7106.03 1915.27 7115.5 1877.39L7121.42 1850.16H7418.51C7668.25 1850.16 7720.33 1853.71 7752.29 1869.1ZM7805.55 2644.5C7919.18 2695.4 7973.63 2811.41 7947.59 2945.18C7935.75 3004.37 7925.1 3024.5 7880.12 3069.48C7805.55 3144.06 7757.02 3152.35 7410.22 3152.35C7149.83 3152.35 7133.26 3151.17 7121.42 3129.86C7108.4 3105 7104.85 2693.03 7116.69 2645.68L7123.79 2619.64H7437.45C7729.8 2619.64 7753.47 2620.82 7805.55 2644.5Z"
            fill="var(--fenext-svg-color-1,#284D8A)"
        />
    </svg>
);
