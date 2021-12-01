import styled, { keyframes } from 'styled-components'

const breatheAnimation = keyframes`
0% { height: 100px; width: 100px; }
30% { height: 400px; width: 400px; opacity: 1 }
40% { height: 405px; width: 405px; opacity: 0.3; }
100% { height: 100px; width: 100px; opacity: 0.6; }
`
const Merit = styled.svg`
  animation-name: ${breatheAnimation};
  animation-duration: 8s;
  animation-iteration-count: infinite;
`

const Logo = () => {
  return (
    <div>
      <Merit
        width='170'
        height='171'
        viewBox='0 0 170 171'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect
          x='11'
          y='13'
          width='156'
          height='158'
          rx='15'
          fill='url(#paint0_linear_296_242)'
        />
        <path
          d='M155.226 32.855C155.226 33.1717 155.099 33.4567 154.846 33.71C154.656 33.9 154.402 33.995 154.086 33.995H122.926C122.609 33.995 122.451 34.1533 122.451 34.47V49.195C122.451 49.5117 122.609 49.67 122.926 49.67H143.351C143.667 49.67 143.921 49.7967 144.111 50.05C144.364 50.24 144.491 50.4933 144.491 50.81V60.025C144.491 60.3417 144.364 60.6267 144.111 60.88C143.921 61.07 143.667 61.165 143.351 61.165H122.926C122.609 61.165 122.451 61.3233 122.451 61.64V77.03C122.451 77.3467 122.609 77.505 122.926 77.505H154.086C154.402 77.505 154.656 77.6317 154.846 77.885C155.099 78.075 155.226 78.3283 155.226 78.645V87.86C155.226 88.1767 155.099 88.4617 154.846 88.715C154.656 88.905 154.402 89 154.086 89H110.196C109.879 89 109.594 88.905 109.341 88.715C109.151 88.4617 109.056 88.1767 109.056 87.86V23.64C109.056 23.3233 109.151 23.07 109.341 22.88C109.594 22.6267 109.879 22.5 110.196 22.5H154.086C154.402 22.5 154.656 22.6267 154.846 22.88C155.099 23.07 155.226 23.3233 155.226 23.64V32.855Z'
          fill='#12293B'
        />
        <path
          d='M83.957 165C83.6403 165 83.3553 164.905 83.102 164.715C82.912 164.462 82.817 164.177 82.817 163.86V99.64C82.817 99.3233 82.912 99.07 83.102 98.88C83.3553 98.6267 83.6403 98.5 83.957 98.5H95.072C95.3886 98.5 95.642 98.6267 95.832 98.88C96.0853 99.07 96.212 99.3233 96.212 99.64V163.86C96.212 164.177 96.0853 164.462 95.832 164.715C95.642 164.905 95.3886 165 95.072 165H83.957Z'
          fill='#12293B'
        />
        <path
          d='M152.894 98.5C153.211 98.5 153.464 98.6267 153.654 98.88C153.908 99.07 154.034 99.3233 154.034 99.64V108.95C154.034 109.267 153.908 109.552 153.654 109.805C153.464 109.995 153.211 110.09 152.894 110.09H135.889C135.573 110.09 135.414 110.248 135.414 110.565V163.86C135.414 164.177 135.288 164.462 135.034 164.715C134.844 164.905 134.591 165 134.274 165H123.159C122.843 165 122.558 164.905 122.304 164.715C122.114 164.462 122.019 164.177 122.019 163.86V110.565C122.019 110.248 121.861 110.09 121.544 110.09H105.014C104.698 110.09 104.413 109.995 104.159 109.805C103.969 109.552 103.874 109.267 103.874 108.95V99.64C103.874 99.3233 103.969 99.07 104.159 98.88C104.413 98.6267 104.698 98.5 105.014 98.5H152.894Z'
          fill='#FAFAFA'
        />
        <path
          d='M65.5899 23.26C65.9066 22.7533 66.3499 22.5 66.9199 22.5H78.0349C78.3516 22.5 78.6049 22.6267 78.7949 22.88C79.0483 23.07 79.1749 23.3233 79.1749 23.64V87.86C79.1749 88.1767 79.0483 88.4617 78.7949 88.715C78.6049 88.905 78.3516 89 78.0349 89H66.9199C66.6033 89 66.3183 88.905 66.0649 88.715C65.8749 88.4617 65.7799 88.1767 65.7799 87.86V45.965C65.7799 45.7117 65.7166 45.585 65.5899 45.585C65.4633 45.585 65.3366 45.68 65.2099 45.87L55.1399 61.64C54.8233 62.1467 54.3799 62.4 53.8099 62.4H48.2049C47.6349 62.4 47.1916 62.1467 46.8749 61.64L36.8049 45.87C36.6783 45.68 36.5516 45.6167 36.4249 45.68C36.2983 45.68 36.2349 45.8067 36.2349 46.06V87.86C36.2349 88.1767 36.1083 88.4617 35.8549 88.715C35.6649 88.905 35.4116 89 35.0949 89H23.9799C23.6633 89 23.3783 88.905 23.1249 88.715C22.9349 88.4617 22.8399 88.1767 22.8399 87.86V23.64C22.8399 23.3233 22.9349 23.07 23.1249 22.88C23.3783 22.6267 23.6633 22.5 23.9799 22.5H35.0949C35.6649 22.5 36.1083 22.7533 36.4249 23.26L50.6749 45.395C50.8649 45.775 51.0549 45.775 51.2449 45.395L65.5899 23.26Z'
          fill='#ED6519'
        />
        <path
          d='M60.0978 165C59.4644 165 59.0211 164.715 58.7678 164.145L46.8928 137.83C46.7661 137.577 46.5761 137.45 46.3228 137.45H37.4878C37.1711 137.45 37.0128 137.608 37.0128 137.925V163.86C37.0128 164.177 36.8861 164.462 36.6328 164.715C36.4428 164.905 36.1894 165 35.8728 165H24.7578C24.4411 165 24.1561 164.905 23.9028 164.715C23.7128 164.462 23.6178 164.177 23.6178 163.86V99.64C23.6178 99.3233 23.7128 99.07 23.9028 98.88C24.1561 98.6267 24.4411 98.5 24.7578 98.5H51.9278C55.9811 98.5 59.5278 99.3233 62.5678 100.97C65.6711 102.617 68.0461 104.96 69.6928 108C71.4028 111.04 72.2578 114.555 72.2578 118.545C72.2578 122.852 71.1811 126.557 69.0278 129.66C66.8744 132.7 63.8661 134.853 60.0028 136.12C59.6861 136.247 59.5911 136.468 59.7178 136.785L72.6378 163.67C72.7644 163.923 72.8278 164.113 72.8278 164.24C72.8278 164.747 72.4794 165 71.7828 165H60.0978ZM37.4878 109.995C37.1711 109.995 37.0128 110.153 37.0128 110.47V126.715C37.0128 127.032 37.1711 127.19 37.4878 127.19H49.9328C52.5928 127.19 54.7461 126.398 56.3928 124.815C58.1028 123.232 58.9578 121.173 58.9578 118.64C58.9578 116.107 58.1028 114.048 56.3928 112.465C54.7461 110.818 52.5928 109.995 49.9328 109.995H37.4878Z'
          fill='#12293B'
        />
        <defs>
          <linearGradient
            id='paint0_linear_296_242'
            x1='89'
            y1='13'
            x2='89'
            y2='171'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.265625' stop-color='#D7C0D0' />
          </linearGradient>
        </defs>
      </Merit>
    </div>
  )
}

export default Logo
