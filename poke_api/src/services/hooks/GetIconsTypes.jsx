export default function GetIconsTypes(types){
  let typeColors = [];
  let newSvgTypes = [];

  types.forEach(t=>{
    if(t === 'grass'){
      typeColors.push('hsl(112, 76%, 27%)');
      newSvgTypes.push(<svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" xmlSpace="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#231F20" d="M60.893,1.549c-0.136-0.269-0.386-0.462-0.679-0.525c-2.98-0.652-6.97-0.982-11.856-0.982 c-4.922,0-10.564,0.353-15.481,0.967C17.641,2.912,7,13.601,7,27v18.678L3.103,60.225c-0.428,1.598,0.523,3.244,2.122,3.674 c1.598,0.426,3.245-0.525,3.673-2.121L11.25,53H31c14.337,0,26-11.663,26-26c0-6.663,0-15.788,3.914-24.594 C61.036,2.132,61.028,1.816,60.893,1.549z M6.966,61.26c-0.143,0.532-0.691,0.849-1.224,0.707c-0.534-0.145-0.851-0.691-0.708-1.225 l2.552-9.686c0.405,0.672,0.998,1.212,1.712,1.55L6.966,61.26z M52.347,8.938c-0.073,0.027-6.014,2.301-14.545,9.321 c5.572-0.588,10.233,0.712,10.473,0.779c0.531,0.152,0.838,0.705,0.687,1.235C48.836,20.713,48.436,21,48,21 c-0.091,0-0.183-0.013-0.274-0.038c-0.064-0.019-6.464-1.784-12.916-0.135c-1.325,1.187-2.692,2.47-4.103,3.88 c-1.642,1.643-3.115,3.228-4.456,4.752c10.211-2.021,19.587,0.46,20.012,0.576c0.533,0.146,0.847,0.694,0.702,1.228 C46.844,31.708,46.44,32,46,32c-0.087,0-0.175-0.012-0.263-0.035c-0.107-0.029-10.88-2.889-21.475,0 c-0.051,0.014-0.103,0.016-0.154,0.021c-2.702,3.302-4.692,6.203-6.108,8.52c10.2-2.115,18.897,0.418,19.287,0.536 c0.529,0.159,0.829,0.716,0.671,1.244C37.828,42.72,37.431,43,37,43c-0.095,0-0.191-0.014-0.287-0.042 c-0.097-0.028-9.653-2.805-20.092-0.079c-1.184,2.166-1.671,3.434-1.684,3.468C14.788,46.75,14.406,47,14,47 c-0.115,0-0.232-0.021-0.347-0.062c-0.518-0.191-0.782-0.766-0.592-1.283c0.057-0.152,0.627-1.652,2.01-4.141 c1.837-9.547-0.028-18.21-0.048-18.297c-0.119-0.539,0.221-1.073,0.76-1.192c0.543-0.127,1.073,0.22,1.193,0.759 c0.069,0.312,1.422,6.557,0.713,14.457c1.414-2.121,3.204-4.565,5.464-7.261c1.693-10.294-0.111-18.677-0.13-18.763 c-0.119-0.539,0.221-1.073,0.76-1.193c0.539-0.116,1.073,0.221,1.193,0.76c0.073,0.33,1.569,7.275,0.571,16.458 c1.154-1.277,2.388-2.591,3.745-3.948c1.285-1.285,2.529-2.454,3.744-3.557v-0.008c1.873-6.556,0.052-11.312,0.033-11.359 c-0.202-0.513,0.049-1.094,0.562-1.297c0.51-0.206,1.092,0.044,1.297,0.557c0.075,0.188,1.599,4.106,0.657,9.863 C44.85,9.642,51.328,7.182,51.654,7.062c0.518-0.188,1.092,0.073,1.283,0.592C53.129,8.171,52.864,8.746,52.347,8.938z"></path> </g></svg>);
    }
    if(t === 'poison'){
      typeColors.push('hsl( 66, 89%, 52%)');
      newSvgTypes.push(<svg version="1.1" id="Uploaded to svgrepo.com" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xmlSpace="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> </style> <path class="stone_een" d="M11.714,7l-0.551-3.859C11.077,2.539,11.544,2,12.153,2h7.694c0.609,0,1.076,0.539,0.99,1.141L20.286,7 H11.714z M26,18v10c0,1.657-1.343,3-3,3H9c-1.657,0-3-1.343-3-3V18c0-2.761,2.239-5,5-5v-2H9c-0.552,0-1-0.448-1-1V9 c0-0.552,0.448-1,1-1h14c0.552,0,1,0.448,1,1v1c0,0.552-0.448,1-1,1h-2v2C23.761,13,26,15.239,26,18z M14,21.816V22 c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1v-0.184c1.137-0.404,1.006-0.508,1-1.733c-0.008-1.629-1.274-3.029-2.902-3.081 C14.397,16.947,13,18.31,13,20C13,21.304,12.837,21.403,14,21.816z M17.118,25.5l1.658-0.829C19.023,24.547,19.124,24.247,19,24v0 c-0.124-0.247-0.424-0.347-0.671-0.224L16,24.941l-2.329-1.165C13.424,23.653,13.124,23.753,13,24v0 c-0.124,0.247-0.023,0.547,0.224,0.671l1.658,0.829l-1.658,0.829C12.977,26.453,12.876,26.753,13,27v0 c0.124,0.247,0.424,0.347,0.671,0.224L16,26.059l2.329,1.165C18.576,27.347,18.876,27.247,19,27v0 c0.124-0.247,0.023-0.547-0.224-0.671L17.118,25.5z M15,21.11V22h2v-0.89c0,0,0.935-0.336,1.008-0.367 C18.008,20.654,18,20.164,18,20c0-1.103-0.897-2-2-2s-2,0.897-2,2c0,0.164-0.008,0.654-0.008,0.744C14.065,20.775,15,21.11,15,21.11 z"></path> </g></svg>);
    }
    if(t === 'fire'){
      typeColors.push('hsl( 22, 91%, 55%)');
      newSvgTypes.push(<svg fill="#000000" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>fire</title> <path d="M11.87 30.782c2.827-0.004 6.12-0.016 8.583-0.022 6.399-4.805 0.449-11.341-4.919-10.395 4.74 3.583 0.616 9.454-3.664 10.417zM23.245 6.173c0.001 0.045 0 0.090 0 0.136 4.927 11.598-8.514 11.801-7.44 0.717-2.601 6.269-8.292-0.134-5.683-5.695v-0c-11.473 6.657 3.244 14.186-0.636 20.745-2.189 3.7-7.109-1.768-6.756-7.912-3.107 7.886-0.845 13.525 3.212 16.583 0.107 0.026 1.583 0.036 3.653 0.037-0.212-0.054-0.419-0.125-0.622-0.214-1.335-0.586-2.12-3.808 1.822-5.503-0.787 4.838 8.606 0.838 1.458-10.24l0-0c5.318 1.677 8.675 3.745 11.078 7.434 1.694-1.511 2.91-4.074 3.28-6.596 2.713 4.869 1.466 12.355-4.95 15.092 1.419-0.003 2.37-0.002 2.471 0.005 9.657-2.17 8.694-15.283-0.886-24.589z"></path> </g></svg>);
    }
    if(t === 'flying'){
      typeColors.push('hsl(215, 76%, 31%)');
      newSvgTypes.push(<svg fill="#000000" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>feather-wing</title> <path d="M28.665 25.537c-1.966-1.094-3.116-2.962-3.232-4.673-0.619-9.164-15.889-10.357-23.662-19.509l-0 0c0.403 11.661 13.204 11.604 20.744 17.449-4.879-2.113-12.876-1.649-18.664-5.404 2.7 8.775 12.332 5.886 19.406 8.271-4.212-0.411-9.768 1.968-15.020 0.086 4.638 7.31 10.654 2.427 16.483 2.47-2.94 0.749-5.977 4.025-10.036 3.718 4.946 4.76 7.536 0.139 11.079-1.633-0.357 0.425-0.583 0.967-0.61 1.565-0.064 1.443 1.054 2.665 2.497 2.73s2.665-1.054 2.73-2.497c0.052-1.169-0.672-2.193-1.716-2.574z"></path> </g></svg>);
    }
    if(t === 'water'){
      typeColors.push('hsl(210,100%, 67%)');
      newSvgTypes.push(<svg fill="#000000" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>water-drop</title> <path d="M25.378 19.75c1.507 6.027-3.162 11.25-9.375 11.25s-10.9-5.149-9.375-11.25c0.937-3.75 5.625-9.375 9.375-18.75 3.75 9.374 8.438 15 9.375 18.75z"></path> </g></svg>);
    }
    if(t === 'bug'){
      typeColors.push('hsl(180, 81%, 43%)');
      newSvgTypes.push(<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 14.3333C7 13.0872 7 12.4641 7.26795 12C7.44349 11.696 7.69596 11.4435 8 11.2679C8.4641 11 9.08718 11 10.3333 11H13.6667C14.9128 11 15.5359 11 16 11.2679C16.304 11.4435 16.5565 11.696 16.7321 12C17 12.4641 17 13.0872 17 14.3333V16C17 16.9293 17 17.394 16.9231 17.7804C16.6075 19.3671 15.3671 20.6075 13.7804 20.9231C13.394 21 12.9293 21 12 21C11.0707 21 10.606 21 10.2196 20.9231C8.63288 20.6075 7.39249 19.3671 7.07686 17.7804C7 17.394 7 16.9293 7 16V14.3333Z" fill="#222222" stroke="#222222" strokeWidth="2"></path> <path d="M9 9C9 8.06812 9 7.60218 9.15224 7.23463C9.35523 6.74458 9.74458 6.35523 10.2346 6.15224C10.6022 6 11.0681 6 12 6C12.9319 6 13.3978 6 13.7654 6.15224C14.2554 6.35523 14.6448 6.74458 14.8478 7.23463C15 7.60218 15 8.06812 15 9V11H9V9Z" fill="#222222" stroke="#222222" strokeWidth="2"></path> <path d="M12 11V15" stroke="#222222" strokeWidth="2"></path> <path d="M15 3L13 6" stroke="#222222" strokeWidth="2"></path> <path d="M9 3L11 6" stroke="#222222" strokeWidth="2"></path> <path d="M7 16H2" stroke="#222222" strokeWidth="2"></path> <path d="M22 16H17" stroke="#222222" strokeWidth="2"></path> <path d="M20 9V10C20 11.6569 18.6569 13 17 13V13" stroke="#222222" strokeWidth="2"></path> <path d="M20 22V22C20 20.3431 18.6569 19 17 19V19" stroke="#222222" strokeWidth="2"></path> <path d="M4 9V10C4 11.6569 5.34315 13 7 13V13" stroke="#222222" strokeWidth="2"></path> <path d="M4 22V22C4 20.3431 5.34315 19 7 19V19" stroke="#222222" strokeWidth="2"></path> </g></svg>);
    }
    if(t === 'normal'){
      typeColors.push('hsl(240,  1%, 67%)');
      newSvgTypes.push(<svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" xmlSpace="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#231F20" d="M63.893,24.277c-0.238-0.711-0.854-1.229-1.595-1.343l-19.674-3.006L33.809,1.15 C33.479,0.448,32.773,0,31.998,0s-1.48,0.448-1.811,1.15l-8.815,18.778L1.698,22.935c-0.741,0.113-1.356,0.632-1.595,1.343 c-0.238,0.71-0.059,1.494,0.465,2.031l14.294,14.657L11.484,61.67c-0.124,0.756,0.195,1.517,0.822,1.957 c0.344,0.243,0.747,0.366,1.151,0.366c0.332,0,0.666-0.084,0.968-0.25l17.572-9.719l17.572,9.719c0.302,0.166,0.636,0.25,0.968,0.25 c0.404,0,0.808-0.123,1.151-0.366c0.627-0.44,0.946-1.201,0.822-1.957l-3.378-20.704l14.294-14.657 C63.951,25.771,64.131,24.987,63.893,24.277z"></path> </g></svg>);
    }
    if(t === 'electric'){
      typeColors.push('hsl( 56, 89%, 53%)');
      newSvgTypes.push(<svg fill="#000000" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" enableBackground="new 0 0 512 512" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <polygon points="439.6,0 204.9,0 55.4,256 204.9,256 76.9,512 418.2,192 247.5,192 "></polygon> </g></svg>);
    }
    if(t === 'ground'){
      typeColors.push('hsl( 24, 56%, 43%)');
      newSvgTypes.push(<svg fill="#000000" height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 299.418 299.418" xmlSpace="preserve" transform='rotate(180)'><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <polygon points="217.326,125.326 82.092,125.326 49.596,191.326 249.822,191.326 "></polygon> <path d="M296.299,285.722l-31.706-64.396H34.825L3.119,285.722c-1.45,2.945-1.277,6.429,0.457,9.216 c1.734,2.787,4.784,4.481,8.066,4.481h276.134c3.282,0,6.332-1.694,8.066-4.481C297.576,292.151,297.749,288.667,296.299,285.722z"></path> <path d="M158.232,5.304C156.633,2.056,153.329,0,149.709,0s-6.924,2.056-8.523,5.304L96.863,95.326h105.693L158.232,5.304z"></path> </g> </g></svg>);
    }
    if(t === 'fairy'){
      typeColors.push('hsl(302, 94%, 66%)');
      newSvgTypes.push(<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#000000" d="M250.53 22.03c-57.055 45.157-80.673 37.81-100.31.22 16.598 61.517 10.408 66.415-44.72 116.594 67.324-35.666 96.206-34.238 130.97 7.187-34.906-53.112-30.954-75.35 14.06-124zm18.407.126l11.688 114.938-99.875 58.094 97.75 21.093c-9.58 8.352-20.214 19.028-31.28 30.095l-.032.03L18.563 472.438v19.438h32.156L273.343 272.5c10.26-10.263 18.902-19.538 25.78-27.75l18.938 87.75 58.094-99.875 114.938 11.688-77.03-86.094 46.655-105.69-105.69 46.657-86.092-77.03zM26.875 55.938c33.765 27.66 35.21 42.767 30.75 87.78 18.975-53.73 27.964-67.297 64.5-82C82.972 71.094 66.21 73 26.875 55.94zm54.75 102.406c24.955 27.012 26.97 43.684 24.25 72.062 14.775-34.45 22.072-45.66 55.625-64.312-34.56 11.183-45.5 10.22-79.875-7.75zm325.594 95c9.27 51.694-4.61 73.708-32.845 106.687 43.3-37.043 57.852-44.284 96.844-38.75-38.597-11.457-47.426-20.624-64-67.936zm-55.658 72.812c-18.705 68.79-45.304 83.944-107.625 70.125 54.126 20.1 56.34 21.07 53.532 85.25 24.757-55.42 46.49-52.217 95.06-37.217-41.775-31.838-45.71-48.97-40.967-118.157zm109.344 55.97c-15.32 17.994-22.932 17.49-43.812 9.343 22.828 18.444 17.596 34.024 10.844 59.405 16.05-19.12 23.516-25.237 50.312-12.688-22.86-21.342-27.13-29.857-17.344-56.062z"></path></g></svg>);
    }
    if(t === 'fighting'){
      typeColors.push('hsl( 24, 54%, 23%)');
      newSvgTypes.push(
        <svg fill="#000000" viewBox="0 0 14 14" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path d="m 7.1069816,12.416207 c -0.19364,-0.044 -0.27266,-0.086 -0.3852,-0.2047 -0.15904,-0.1674 -0.18296,-0.2372 -0.18162,-0.5299 10e-4,-0.2991 0.0555,-0.49 0.25034,-0.8836 l 0.11161,-0.2255 0.37729,0 c 0.34472,9e-4 0.39445,-0.01 0.576,-0.066 0.29828,-0.1 0.60331,-0.3115 0.76859,-0.5332998 l 0.0731,-0.098 0.20011,0.2033998 c 0.21319,0.2168 0.40611,0.34 0.68446,0.4371 0.22268,0.078 0.7377204,0.079 1.0217404,0 0.65075,-0.1757 1.1092,-0.6892998 1.27402,-1.4272998 0.019,-0.085 0.11612,-0.8503 0.21575,-1.7002 0.0996,-0.8499 0.18416,-1.5423 0.18783,-1.5386 0.0231,0.023 0.30049,1.0781 0.39238,1.4925 0.44104,1.9891 0.43551,3.3431998 -0.0169,4.1338998 -0.18514,0.3235 -0.54682,0.5819 -0.92632,0.6615 -0.24549,0.052 -0.38104,0.046 -0.59356,-0.023 -0.55333,-0.1806 -1.1985404,-0.1506 -2.3746304,0.1103 -0.91823,0.2038 -1.36422,0.2544 -1.65502,0.188 z m -2.75714,-2.136 c -0.20006,-0.046 -0.42359,-0.1373 -0.57911,-0.2371 l -0.12544,-0.081 0,-2.3411 0,-2.3411 -0.2512,-0.017 c -0.13815,-0.01 -0.25452,-0.014 -0.25858,-0.01 -0.004,0 -0.0156,1.0549 -0.0257,2.3349 l -0.0183,2.3274 -0.0934,0.037 c -0.27258,0.1090998 -0.90829,0.1187998 -1.16907,0.018 -0.40098,-0.1551 -0.67967,-0.5173 -0.79567,-1.034 -0.0266,-0.1186 -0.0334,-0.5804 -0.0334,-2.2603 l 5e-5,-2.1112 0.056,-0.1987 c 0.12599,-0.4473 0.40679,-0.8915 0.70716,-1.1189 0.33103,-0.2505 0.62438,-0.3342 1.17092,-0.3342 l 0.32771,0 0.14825,-0.1512 c 0.0815,-0.083 0.21051,-0.1997 0.28661,-0.2589 
              0.55366,-0.4305 1.29153,-0.5439 2.01807,-0.3103 l 0.22164,0.071 0.0644,-0.079 c 0.20887,-0.2565 0.48897,-0.4487 0.81139,-0.5568 0.17948,-0.06 0.23474,-0.067 0.57128,-0.068 0.41921,0 0.57163,0.029 0.87409,0.1716 0.22176,0.1047 0.41753,0.2372 0.63453,0.4296 l 0.16735,0.1483 0.19281,-0.036 c 0.25706,-0.049 0.9663804,-0.055 1.1490904,-0.01 0.1965,0.048 0.6064,0.2521 0.7976,0.3973 0.17078,0.1297 0.35933,0.3572 0.45583,0.5501 0.14029,0.2804 0.23687,0.7279 0.23687,1.0974 0,0.1237 -0.11536,1.2009 -0.26182,2.4447 -0.28129,2.3887 -0.28159,2.3905 -0.46324,2.7119 -0.1609,0.2846 -0.43918,0.487 -0.76174,0.5539998 -0.075,0.016 -0.24895,0.024 -0.38661,0.018 -0.2223404,-0.01 -0.2686704,-0.019 -0.4150804,-0.092 -0.21343,-0.106 -0.42327,-0.3154 -0.52602,-0.5249 l -0.0792,-0.1615 0,-2.4093 0,-2.4093 0.078,-0.1648 0.078,-0.1647 -0.18105,-0.1798 c -0.0996,-0.099 -0.19273,-0.1727 -0.207,-0.1638 -0.0521,0.032 -0.19923,0.305 -0.25579,0.4744 l -0.0581,0.1738 -0.0127,2.3969 c -0.0113,2.1186 -0.0174,2.4089 -0.0525,2.5003 -0.11003,0.2857 -0.31599,0.5087 -0.58805,0.6367 -0.1481,0.07 -0.1971,0.08 -0.43306,0.088 -0.43249,0.015 -0.78145,-0.07 -0.96669,-0.2378998 l -0.0961,-0.087 0,-2.4933 0,-2.4934 -0.26069,0 -0.26069,0 -0.006,2.6515 -0.006,2.6514998 -0.18629,0.093 c -0.10246,0.051 -0.25335,0.1104 -0.33532,0.132 -0.20979,0.055 -0.70573,0.069 -0.89752,0.025 z">
            </path>
          </g>
        </svg>);
    }
    if(t === 'psychic'){
      typeColors.push('hsl(276, 85%, 83%)');
      newSvgTypes.push(<svg height="200px" width="200px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> </style> <g> <path class="st0" d="M511.58,252.219c-0.403-1.756-0.807-2.737-1.17-3.647c-0.727-1.7-1.424-2.982-2.239-4.437 c-3.006-5.228-7.831-12.308-14.444-21.216c-9.872-13.273-23.469-30.09-38.871-46.686c-15.417-16.596-32.518-32.938-49.93-45.279 c-24.624-17.426-48.569-30.976-73.091-40.184C307.33,81.555,282.246,76.77,256,76.785c-26.246-0.015-51.33,4.77-75.836,13.986 c-24.53,9.207-48.466,22.758-73.09,40.176c-25.899,18.407-51.401,45.729-71.098,69.459c-9.825,11.866-18.106,22.798-24.078,31.325 c-2.999,4.272-5.403,7.926-7.254,11.011c-0.933,1.567-1.716,2.966-2.468,4.533c-0.38,0.799-0.744,1.622-1.147,2.777 c-0.198,0.585-0.412,1.265-0.609,2.167c-0.19,0.91-0.412,2.033-0.42,3.781c0.008,1.741,0.229,2.872,0.42,3.781 c0.395,1.756,0.807,2.729,1.17,3.646c0.728,1.701,1.424,2.983,2.239,4.43c3.006,5.229,7.831,12.316,14.444,21.223 c9.864,13.274,23.469,30.098,38.871,46.695c15.417,16.596,32.519,32.93,49.93,45.27c24.624,17.426,48.561,30.969,73.09,40.184 c24.506,9.208,49.59,14.001,75.836,13.985c26.246,0.016,51.33-4.777,75.836-13.985c24.522-9.216,48.466-22.758,73.091-40.176 c25.898-18.408,51.401-45.729,71.098-69.46c9.824-11.865,18.106-22.797,24.078-31.325c2.998-4.279,5.402-7.926,7.254-11.019 c0.934-1.566,1.717-2.966,2.468-4.525c0.372-0.799,0.744-1.622,1.147-2.785c0.198-0.585,0.412-1.257,0.609-2.159 c0.19-0.91,0.412-2.04,0.42-3.781C511.992,254.252,511.771,253.129,511.58,252.219z M256,377.487 c-67.103,0-121.486-54.392-121.486-121.486c0-67.079,54.383-121.486,121.486-121.486c67.103,0,121.486,54.407,121.486,121.486 C377.486,323.095,323.103,377.487,256,377.487z"></path> <path class="st0" d="M286.415,250.384c-6.376,1.171-12.902-1.092-17.166-5.965c-4.271-4.888-5.648-11.644-3.631-17.814l7.911-24.19 c-5.522-1.804-11.399-2.8-17.53-2.8c-31.15,0-56.392,25.233-56.392,56.384c0,31.15,25.242,56.4,56.392,56.4 c31.151,0,56.392-25.25,56.392-56.4c0-3.496-0.364-6.914-0.973-10.235L286.415,250.384z"></path> </g> </g></svg>);
    }
    if(t === 'rock'){
      typeColors.push('hsl(210,  2%, 29%)');
      newSvgTypes.push(<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#000000" d="M228.813 23L68.75 72.28 39.5 182.095l47.53-21.22 10.44-4.655 2.5 11.155 8.75 39.125 6.405 28.53-21.75-19.53-15.72-14.125-28.218 32.344 140.657 136 9.656-40.69 7.53-31.874 10.407 31.063 54.72 163.592L432.343 465.5l45.75-202.938-84.563-148.718L228.814 23zm-57.688 49.875l-27.813 39.906-3.25 73.44-27.187-88.94 58.25-24.405zm17.844 93.406l113.124 155.25L407 355.407l-107.375-.844-110.656-128v-60.28zM79.312 330.25l140.125 153.125-5.563-65.875-134.563-87.25z"></path></g></svg>);
    }
    if(t === 'steel'){
      typeColors.push('hsl(213, 11%, 67%)');
      newSvgTypes.push(<svg fill="#000000" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>anvil</title> <path d="M26.375 14.833c1.548-0.494 3.096-1.594 4.644-3.19-1.549-1.624-3.063-2.424-4.644-2.725v-2.263h-18.874v1.643h-6.355c1.146 3.109 3.659 5.252 6.355 5.985v2.68h4.97c-0.863 2.931-2.652 5.337-4.839 7.419h-1.878v1.644c-0.008 0.007-0.016 0.013-0.024 0.020h0.024v2.223h23.505v-3.886h-2.499c-2.444-2.080-4.177-4.484-4.984-7.419h4.599v-2.131z"></path> </g></svg>);
    }
    if(t === 'ice'){
      typeColors.push('hsl(210,100%, 81%)');
      newSvgTypes.push(<svg fill="#000000" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M227.80176,148.11035a11.99971,11.99971,0,0,1-8.48584,14.69629l-21.19287,5.67871,5.67871,21.19336a12.0001,12.0001,0,1,1-23.18262,6.21094l-7.498-27.98242L140,148.78491V187.0293l20.48535,20.48535a12.0001,12.0001,0,0,1-16.9707,16.9707L128,208.9707l-15.51465,15.51465a12.0001,12.0001,0,0,1-16.9707-16.9707L116,187.0293V148.78491L82.87891,167.90723l-7.49805,27.98242a12.0001,12.0001,0,0,1-23.18262-6.21094L57.877,168.48535l-21.19287-5.67871A11.99963,11.99963,0,1,1,42.895,139.625l27.98291,7.49756L103.99951,128,70.87793,108.87744,42.895,116.375a11.99963,11.99963,0,1,1-6.21094-23.18164L57.877,87.51465,52.19824,66.32129a12.0001,12.0001,0,0,1,23.18262-6.21094l7.49805,27.98242L116,107.21509V68.9707L95.51465,48.48535a12.0001,12.0001,0,0,1,16.9707-16.9707L128,47.0293l15.51465-15.51465a12.0001,12.0001,0,0,1,16.9707,16.9707L140,68.9707v38.24439l33.12109-19.12232,7.498-27.98242a12.0001,12.0001,0,0,1,23.18262,6.21094l-5.67871,21.19336,21.19287,5.67871A11.99963,11.99963,0,1,1,213.105,116.375l-27.98291-7.49756L152.00049,128l33.12158,19.12256L213.105,139.625A11.9955,11.9955,0,0,1,227.80176,148.11035Z"></path> </g></svg>);
    }
    if(t === 'ghost'){
      typeColors.push('hsl(  0,  0%,100%)');
      newSvgTypes.push(<svg height="200px" width="200px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> </style> <g> <path class="st0" d="M508.374,432.802c0,0-46.6-39.038-79.495-275.781C420.046,69.341,346.023,0.882,256,0.882 c-90.015,0-164.046,68.458-172.879,156.138C50.226,393.763,3.626,432.802,3.626,432.802c-15.107,25.181,20.733,28.178,38.699,27.94 c35.254-0.478,35.254,40.294,70.516,40.294c35.254,0,35.254-35.261,70.508-35.261s37.396,45.343,72.65,45.343 s37.389-45.343,72.651-45.343c35.254,0,35.254,35.261,70.508,35.261s35.27-40.772,70.524-40.294 C487.641,460.98,523.48,457.982,508.374,432.802z M208.769,225.031c-12.518,0-22.676-10.15-22.676-22.675 c0-12.518,10.158-22.66,22.676-22.66c12.516,0,22.66,10.142,22.66,22.66C231.429,214.881,221.285,225.031,208.769,225.031z M297.983,225.031c-12.525,0-22.668-10.15-22.668-22.675c0-12.518,10.143-22.66,22.668-22.66c12.509,0,22.667,10.142,22.667,22.66 C320.65,214.881,310.492,225.031,297.983,225.031z"></path> </g> </g></svg>);
    }
    if(t === 'dragon'){
      typeColors.push('hsl(357, 79%, 46%)');
      newSvgTypes.push(<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#000000" d="M188.8 20.38c-5.3 26.85 4.6 55.74 34.1 86.52 11.2-7.29 31.6-10.94 50-8.16-46-22.31-66.5-47.13-84.1-78.36zM29.19 26.62C43.56 73.08 81.09 128.8 129.6 168.3 93.51 166 49.93 153.1 18.76 143c24.96 35.2 64.17 52.9 103.34 66.3C97.13 227 66.99 245 18.66 248c54.64 19.2 107.54 8.9 131.34.7-17.9 34.9-100.72 66.2-122.31 77 53.26 4.2 121.71-11 167.01-32.9 10 24.6-1.6 53.2-10.1 77.8-1.9 4.5-3.8 8.9-5.7 13.3 5.1-3.5 10.1-7 14.9-10.6 23.6-16.2 47.8-31.9 59.5-58.8 26.1 31.2 62.7 62.1 107 85.4 17.4 22.1 28.3 49 34.2 73.8 8.3-19.1 13.8-40.2 9.7-60.3 24.5-3.6 35.6-29.7 35.5-54.4-12.6 6.2-15.1 6.3-31.2 8.2 0-10.1.6-12.5-3-28.7-10.3 8.4-21 11.2-30.8 11.8 2.1-7.6 3-19.5 3.7-27.3-13 7.1-19.2 9.7-30.1 10.8-.4-10.9-.1-20-4.1-30.4-29.6 19-48.6 1.5-68-21.3 19.8-17 96.4-21.8 95.1 7.1 14-7.3 18.8-11.2 23.6-15.9 9.1 8.5 13.4 20.9 15.1 31.4 9.3-9.4 10.3-10.5 17.1-23.8 5.7 10.1 8.8 17 10.7 30.6 8.5-6.2 15.4-13.1 19.8-21.4 7.5 15.5 8.3 16 12.4 33 17.8-13.1 21.8-31.2 22.8-47.6 2-33-.3-108.2-31-142.9 1.7 36.3-13.1 70-33.8 80.7-12.6 4.9-96.5-74.6-137.6-93.3-23.5-10.2-48.1 7.1-67.8 9.3C147 106.2 83.57 70.94 29.19 26.62zM296.1 152.8c13.3 20.9 32.2 36.9 60.1 55-19.4 2.9-65.8-6.7-77.7-24-5.5-7.9 7.1-21.3 17.6-31zM180.6 319.1c-14.4 6.2-29.2 10.9-43.8 14.3-2.4 3.6-4.6 7.1-6.7 10.5 14.8 5.3 31.5 7 44.1 2.8 3.3-9.8 5.5-19.3 6.4-27.6zm-68 19.1l-10.2 1.5c-31.81 36.6-61.9 103.2-48.24 151.9h36.13c-11.12-37.7-16.53-87.1 22.31-153.4zm8.5 21.5c-5.9 11.4-10.4 22.1-13.8 32.1 12.9 6.7 29.1 8.9 44.8 8.2 4.6-10.5 9.8-21.8 14.6-33.3-15.4 1.8-31.4-1.4-45.6-7zm111.4 6.6c-12 10.5-25.2 20.3-38.9 29.6 7 34 33.4 63.4 73.9 95.7h83.3c-57.2-31.8-94.6-73.3-118.3-125.3zm-130 43.2c-2.5 11.8-3.3 22.7-3 32.9 37.3 14.2 62.5 13.5 97.5 4.1-7.2-10.3-13-21-16.9-32.3-32.7 9.4-55.4 5.7-77.6-4.7zm106.6 52.4c-38.1 10.9-68.8 13.2-107.5.3 1.8 10.4 4.5 20.1 7.5 29.4h130.1c-11.3-9.8-21.4-19.6-30.1-29.7z"></path></g></svg>);
    }
    if(t === 'dark'){
      typeColors.push('hsl(  0,  0%,  0%)');
      newSvgTypes.push(<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="24" height="24" fill="none"></rect> <path fill-rule="evenodd" clip-rule="evenodd" d="M8.23129 2.24048C9.24338 1.78695 10.1202 2.81145 9.80357 3.70098C8.72924 6.71928 9.38932 10.1474 11.6193 12.3765C13.8606 14.617 17.3114 15.2755 20.3395 14.1819C21.2206 13.8637 22.2173 14.7319 21.7817 15.7199C21.7688 15.7491 21.7558 15.7782 21.7427 15.8074C20.9674 17.5266 19.7272 19.1434 18.1227 20.2274C16.4125 21.3828 14.3957 22.0001 12.3316 22.0001H12.3306C9.93035 21.9975 7.6057 21.1603 5.75517 19.6321C3.90463 18.1039 2.64345 15.9797 2.18793 13.6237C1.73241 11.2677 2.11094 8.82672 3.2586 6.71917C4.34658 4.72121 6.17608 3.16858 8.20153 2.25386L8.23129 2.24048Z" fill="#323232"></path> </g></svg>);
    }
  })

  return { 'typeColors': typeColors, 'newSvgTypes': newSvgTypes };
}