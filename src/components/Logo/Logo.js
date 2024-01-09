// material-ui
import { useTheme } from '@mui/material/styles';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
  const theme = useTheme();

  return (
    /**
     * if you want to use image instead of svg uncomment following, and comment out <svg> element.
     *
     * <img src={logo} alt="Mantis" width="100" />
     *
     */
    <>
      <svg width="150" height="86.377" viewBox="0 0 291.358 86.377">
        <path
          d="M 207.861 57.08 L 211.279 57.08 A 51.14 51.14 0 0 1 206.274 64.17 A 38.744 38.744 0 0 1 200.391 69.824 A 27.862 27.862 0 0 1 190.491 74.742 A 26.49 26.49 0 0 1 183.789 75.586 A 23.491 23.491 0 0 1 179.313 75.187 Q 176.747 74.688 174.746 73.567 A 12.15 12.15 0 0 1 172.412 71.875 Q 168.877 68.584 168.284 62.351 A 27.816 27.816 0 0 1 168.164 59.717 A 36.58 36.58 0 0 1 168.317 56.47 Q 168.467 54.788 168.765 52.94 A 58.915 58.915 0 0 1 168.775 52.881 A 50.57 50.57 0 0 1 170.606 45.362 A 43.537 43.537 0 0 1 174.097 37.403 Q 176.221 33.643 179.053 30.762 A 21.683 21.683 0 0 1 194.793 24.124 A 27.332 27.332 0 0 1 195.166 24.121 A 20.192 20.192 0 0 1 198.337 24.353 Q 200.02 24.621 201.352 25.2 A 8.158 8.158 0 0 1 204.053 27.051 A 7.383 7.383 0 0 1 205.689 29.937 Q 206.201 31.57 206.201 33.692 A 17.704 17.704 0 0 1 204.346 41.675 A 21.527 21.527 0 0 1 199.219 48.291 Q 195.947 51.123 191.797 52.808 A 27.523 27.523 0 0 1 183.203 54.785 A 75.313 75.313 0 0 0 183.074 56.267 Q 182.975 57.569 182.961 58.496 A 19.511 19.511 0 0 0 182.959 58.789 A 20.238 20.238 0 0 0 183.075 61.041 Q 183.339 63.393 184.206 64.761 A 4.437 4.437 0 0 0 184.815 65.528 A 4.689 4.689 0 0 0 186.478 66.602 Q 187.861 67.151 189.91 67.185 A 16.497 16.497 0 0 0 190.186 67.188 Q 195.606 67.188 200.098 64.258 A 23.711 23.711 0 0 0 203.263 61.817 A 26.679 26.679 0 0 0 203.76 61.353 A 60.585 60.585 0 0 0 205.161 59.962 Q 205.779 59.33 206.454 58.609 A 122.347 122.347 0 0 0 207.861 57.08 A 46.556 46.556 0 0 0 207.657 58.107 Q 207.374 59.622 207.229 60.98 A 25.108 25.108 0 0 0 207.08 63.623 A 21.146 21.146 0 0 0 207.127 65.051 Q 207.463 70.012 210.205 72.754 A 9.122 9.122 0 0 0 214.593 75.22 A 13.08 13.08 0 0 0 217.774 75.586 A 18.481 18.481 0 0 0 224.317 74.414 A 18.921 18.921 0 0 0 227.291 72.991 A 21.274 21.274 0 0 0 232.031 69.141 A 25.183 25.183 0 0 0 233.292 67.627 Q 234.986 65.425 236.413 62.623 A 46.415 46.415 0 0 0 238.77 57.08 L 234.57 57.08 A 18.317 18.317 0 0 1 233.332 60.139 A 13.271 13.271 0 0 1 230.957 63.428 Q 229.785 64.6 228.394 65.259 A 6.604 6.604 0 0 1 225.537 65.918 Q 223.389 65.918 222.437 65.088 A 2.073 2.073 0 0 1 222.372 65.03 Q 221.729 64.419 221.552 63.211 A 6.944 6.944 0 0 1 221.484 62.207 A 16.874 16.874 0 0 1 221.514 61.19 Q 221.551 60.569 221.637 60.033 A 7.717 7.717 0 0 1 221.875 58.985 L 228.272 29.004 L 234.277 29.004 L 235.059 25 L 229.053 25 L 232.471 9.18 L 217.676 11.182 L 214.649 25 L 211.377 25 L 210.547 29.004 L 213.867 29.004 L 207.861 57.08 Z M 68.311 1.416 L 52.637 75 L 38.233 75 L 45.899 38.721 A 48.715 48.715 0 0 0 42.401 37.268 A 36.084 36.084 0 0 0 39.136 36.231 A 38.223 38.223 0 0 0 33.381 35.189 A 42.463 42.463 0 0 0 32.52 35.108 A 169.367 169.367 0 0 0 23.242 60.156 A 133.353 133.353 0 0 0 21.295 67.647 Q 19.717 74.604 19.551 79.648 A 35.271 35.271 0 0 0 19.531 80.811 A 17.221 17.221 0 0 0 19.634 82.76 Q 19.905 85.135 20.899 86.377 A 53.031 53.031 0 0 1 18.944 86.343 Q 17.395 86.286 16.113 86.133 Q 14.063 85.889 12.256 84.961 A 7.895 7.895 0 0 1 7.982 79.636 Q 7.52 77.933 7.52 75.781 Q 7.52 73.272 8.119 70.009 A 54.805 54.805 0 0 1 8.569 67.822 A 72.513 72.513 0 0 1 9.845 63.001 A 95.541 95.541 0 0 1 11.572 57.813 A 139.98 139.98 0 0 1 22.217 35.108 A 40.02 40.02 0 0 0 19.307 35.379 Q 17.864 35.57 16.652 35.862 A 15.84 15.84 0 0 0 14.331 36.597 A 8.179 8.179 0 0 0 12.498 37.624 A 5.842 5.842 0 0 0 10.498 40.283 A 0.469 0.469 0 0 1 10.78 40.389 Q 11.078 40.612 11.377 41.309 A 5.282 5.282 0 0 1 11.817 43.408 A 3.145 3.145 0 0 1 10.711 45.851 A 4.534 4.534 0 0 1 10.205 46.24 Q 8.594 47.315 6.201 47.315 Q 3.516 47.315 1.807 45.85 Q 0 44.336 0 41.504 A 8.254 8.254 0 0 1 1.113 37.395 A 10.26 10.26 0 0 1 1.514 36.743 A 11.872 11.872 0 0 1 3.866 34.173 A 15.669 15.669 0 0 1 5.811 32.813 A 22.178 22.178 0 0 1 9.651 30.991 A 28.104 28.104 0 0 1 12.378 30.152 A 30.971 30.971 0 0 1 18.038 29.275 A 36.745 36.745 0 0 1 20.41 29.199 Q 21.846 29.199 23.76 29.336 A 85.377 85.377 0 0 1 25.635 29.492 A 134.506 134.506 0 0 1 31.934 20.371 Q 37.183 13.44 42.432 8.74 Q 52.197 0 60.401 0 A 27.607 27.607 0 0 1 63.538 0.168 Q 66.324 0.487 68.311 1.416 Z M 75.342 75 L 89.795 7.08 A 24.103 24.103 0 0 0 83.597 10.743 A 20.671 20.671 0 0 0 79.443 15.381 Q 75.83 20.899 75.83 28.906 Q 75.83 32.031 76.514 33.887 A 5.628 5.628 0 0 0 76.764 34.555 A 4.466 4.466 0 0 0 77.002 35.01 A 1.546 1.546 0 0 1 77.148 35.351 A 1.239 1.239 0 0 1 77.197 35.694 A 21.68 21.68 0 0 1 74.38 35.524 Q 71.077 35.089 69.287 33.545 Q 66.992 31.613 66.59 27.722 A 16.966 16.966 0 0 1 66.504 25.977 A 15.701 15.701 0 0 1 67.707 20.007 A 18.169 18.169 0 0 1 67.92 19.507 A 23.312 23.312 0 0 1 70.421 15.213 A 28.235 28.235 0 0 1 71.924 13.33 A 32.367 32.367 0 0 1 75.731 9.609 A 38.686 38.686 0 0 1 77.759 8.032 Q 81.152 5.567 85.108 3.76 A 42.604 42.604 0 0 1 94.93 0.621 A 36.599 36.599 0 0 1 101.611 0 Q 103.708 0 105.38 0.17 A 25.889 25.889 0 0 1 105.615 0.195 L 89.697 75 L 75.342 75 Z M 267.09 29.59 L 267.09 30.322 L 268.164 25 L 282.568 25 L 275.391 58.985 A 10.386 10.386 0 0 0 275.006 61.007 A 12.906 12.906 0 0 0 274.951 62.207 Q 274.951 65.893 277.969 66.417 A 6.34 6.34 0 0 0 279.053 66.504 Q 281.787 66.504 284.033 63.721 Q 285.43 62.002 286.459 59.233 A 28.728 28.728 0 0 0 287.158 57.08 L 291.358 57.08 Q 288.672 64.697 284.863 69.141 A 20.684 20.684 0 0 1 280.975 72.612 A 17.53 17.53 0 0 1 277.588 74.414 Q 274.609 75.586 271.289 75.586 Q 267.126 75.586 264.628 73.359 A 8.106 8.106 0 0 1 264.526 73.267 Q 262.012 70.947 261.475 66.406 A 32.392 32.392 0 0 1 258.941 69.573 Q 257.51 71.137 256.01 72.29 A 18.994 18.994 0 0 1 255.518 72.656 A 14.772 14.772 0 0 1 246.582 75.586 A 14.872 14.872 0 0 1 242.379 75.02 A 11.489 11.489 0 0 1 237.354 72.022 Q 233.252 67.822 233.252 59.522 A 39.243 39.243 0 0 1 233.572 54.621 A 47.209 47.209 0 0 1 233.96 52.1 A 48.294 48.294 0 0 1 236.035 44.385 Q 239.16 35.791 244.58 30.518 A 21.937 21.937 0 0 1 251.082 26.109 A 19.722 19.722 0 0 1 258.984 24.512 Q 263.037 24.512 265.064 25.904 Q 267.09 27.295 267.09 29.59 Z M 125.098 57.08 L 135.791 6.983 L 150.586 4.981 L 145.801 27.49 A 34.544 34.544 0 0 1 147.516 26.506 Q 149.25 25.58 150.595 25.173 A 10.103 10.103 0 0 1 150.684 25.147 A 10.13 10.13 0 0 1 152.403 24.797 A 13.601 13.601 0 0 1 154.004 24.707 A 13.325 13.325 0 0 1 157.538 25.149 A 9.304 9.304 0 0 1 162.549 28.467 A 13.042 13.042 0 0 1 164.478 32.145 Q 165.687 35.597 165.807 40.658 A 47.908 47.908 0 0 1 165.82 41.797 A 38.311 38.311 0 0 1 165.635 45.475 A 49.076 49.076 0 0 1 165.234 48.56 A 43.593 43.593 0 0 1 163.428 55.762 A 38.157 38.157 0 0 1 160.167 62.913 A 28.819 28.819 0 0 1 154.932 69.434 A 23.361 23.361 0 0 1 139.744 75.556 A 30.314 30.314 0 0 1 138.379 75.586 Q 131.543 75.586 127.979 72.241 Q 124.434 68.915 124.414 62.859 A 20.822 20.822 0 0 1 124.414 62.793 A 26.472 26.472 0 0 1 124.545 60.089 Q 124.682 58.76 124.961 57.604 A 15.149 15.149 0 0 1 125.098 57.08 Z M 261.377 57.08 L 266.162 34.522 Q 266.162 34.142 266.029 33.659 A 5.587 5.587 0 0 0 265.942 33.374 A 5.201 5.201 0 0 0 265.332 32.129 A 3.826 3.826 0 0 0 262.785 30.759 A 5.551 5.551 0 0 0 262.061 30.713 A 6.305 6.305 0 0 0 259.156 31.439 A 8.258 8.258 0 0 0 258.179 32.031 Q 256.299 33.35 254.639 35.694 A 28.126 28.126 0 0 0 252.31 39.822 Q 251.334 41.924 250.516 44.423 A 55.039 55.039 0 0 0 249.805 46.778 A 45.476 45.476 0 0 0 248.5 52.667 A 41.989 41.989 0 0 0 248.486 52.759 A 43.448 43.448 0 0 0 248.164 55.489 Q 248.054 56.786 248.047 57.951 A 26.349 26.349 0 0 0 248.047 58.106 Q 248.047 63.086 249.902 64.844 A 3.316 3.316 0 0 0 250.53 65.378 A 2.613 2.613 0 0 0 251.318 65.723 A 6.339 6.339 0 0 0 252.204 65.875 A 8.487 8.487 0 0 0 253.076 65.918 A 4.875 4.875 0 0 0 254.378 65.733 A 6.709 6.709 0 0 0 255.444 65.332 A 8.995 8.995 0 0 0 257.01 64.381 A 11.268 11.268 0 0 0 257.861 63.672 Q 260.498 61.133 261.377 57.08 Z M 144.483 33.594 L 139.014 58.985 A 10.937 10.937 0 0 0 138.777 60.31 A 8.653 8.653 0 0 0 138.721 61.279 Q 138.721 65.772 143.667 65.914 A 11.435 11.435 0 0 0 143.994 65.918 A 5.099 5.099 0 0 0 146.613 65.149 Q 148.219 64.2 149.796 62.077 A 19.869 19.869 0 0 0 149.951 61.865 Q 152.03 58.907 153.52 54.443 A 46.67 46.67 0 0 0 154.151 52.393 A 45.628 45.628 0 0 0 155.455 45.74 A 37.398 37.398 0 0 0 155.713 41.406 A 21.268 21.268 0 0 0 155.549 38.683 Q 155.369 37.288 154.99 36.123 A 10.33 10.33 0 0 0 154.443 34.766 Q 153.76 33.35 152.734 32.569 A 3.764 3.764 0 0 0 150.391 31.787 A 14.715 14.715 0 0 0 148.767 31.873 A 10.996 10.996 0 0 0 147.315 32.129 A 10.207 10.207 0 0 0 146.263 32.461 Q 145.208 32.864 144.646 33.418 A 2.569 2.569 0 0 0 144.483 33.594 Z M 46.826 34.278 L 52.637 7.08 Q 48.291 9.424 43.506 15.918 A 93.121 93.121 0 0 0 38.387 23.803 A 120.004 120.004 0 0 0 34.619 30.811 A 77.23 77.23 0 0 1 41.089 32.337 A 58.435 58.435 0 0 1 46.826 34.278 Z M 183.984 50 A 13.186 13.186 0 0 0 188.909 48.644 A 15.331 15.331 0 0 0 189.404 48.389 Q 192.041 46.973 194.092 44.678 Q 196.143 42.334 197.315 39.429 Q 198.486 36.524 198.486 33.496 A 11.485 11.485 0 0 0 198.437 32.392 Q 198.329 31.278 197.986 30.564 A 3.127 3.127 0 0 0 197.925 30.445 A 1.878 1.878 0 0 0 196.574 29.449 A 2.937 2.937 0 0 0 195.996 29.395 A 4.137 4.137 0 0 0 194.183 29.834 Q 193.572 30.129 192.959 30.623 A 9.139 9.139 0 0 0 192.359 31.153 A 15.213 15.213 0 0 0 190.891 32.798 Q 189.833 34.16 188.818 35.987 A 39.287 39.287 0 0 0 187.153 39.475 A 50.559 50.559 0 0 0 185.986 42.529 A 53.794 53.794 0 0 0 183.984 50 Z"
          fill={theme.palette.common.black}
          fillOpacity="0.85"
        />
        <defs>
          <linearGradient id="paint0_linear" x1="8.62526" y1="14.0888" x2="5.56709" y2="17.1469" gradientUnits="userSpaceOnUse">
            <stop stopColor={theme.palette.primary.darker} />
            <stop offset="0.9637" stopColor={theme.palette.primary.dark} stopOpacity="0" />
          </linearGradient>
          <linearGradient id="paint1_linear" x1="26.2675" y1="14.1279" x2="28.7404" y2="16.938" gradientUnits="userSpaceOnUse">
            <stop stopColor={theme.palette.primary.darker} />
            <stop offset="1" stopColor={theme.palette.primary.dark} stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};

export default Logo;
