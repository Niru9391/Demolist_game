import React from 'react';
import { Box, Button, Image ,} from '@chakra-ui/react';


const FriendsIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm6-4c0 3.31-2.69 6-6 6s-6-2.69-6-6c0-1.5.56-2.87 1.48-3.95 1.2 1.06 2.8 1.7 4.52 1.7s3.32-.64 4.52-1.7c.92 1.08 1.48 2.45 1.48 3.95zm-6 8c-2.21 0-4-1.79-4-4 0-.75.17-1.48.48-2.12-.78-.29-1.61-.48-2.48-.48-2.21 0-4 1.79-4 4s1.79 4 4 4h12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.87 0-1.7.19-2.48.48.31.64.48 1.37.48 2.12 0 2.21-1.79 4-4 4z"
      fill="currentColor"
    />
  </svg>
);

const NotificationIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 22c1.1 0 2-.9 2-2H10c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4-6.32V4c0-1.1-.9-2-2-2s-2 .9-2 2v.68C7.63 5.36 6 7.92 6 11v5l-1.29 1.29c-.36.36-.71.81-.71 1.29V19h16v-1.71c0-.48-.35-.93-.71-1.29L18 16z"
      fill="currentColor"
    />
  </svg>
);

const HeartIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
      stroke="white"
      strokeWidth="2"
      fill="none"
    />
  </svg>
);

const Header = () => {
  return (
    <Box
      maxW="1920px"
      h="60px"
      position="relative"
      top="-0.11px"
      left="-0.02px"
    >
   <form class="max-w-lg mx-auto">
    <div class="flex">
      <div class="relative w-full">
            <input type="search" id="search-dropdown" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search..." required />
            <button type="submit" class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span class="sr-only">Search</span>
            </button>
        </div>
    </div>
</form>
      <Box
        w="250.63px"
        h="40px"
        position="absolute"
        top="10px"
        right="0px"
        p="0px 20px 0px 8px"
        display="flex"
        alignItems="center"
      >
        <FriendsIcon style={{ marginRight: '16px' }} />
        <NotificationIcon style={{ marginRight: '16px' }} />
        <HeartIcon style={{ marginRight: '16px' }} />
        <Button
          w="46.97px"
          h="22px"
          p="0"
          fontFamily="Nunito"
          fontSize="16px"
          fontWeight="800"
          lineHeight="21.82px"
          textAlign="center"
        >
          Log in
        </Button>
      </Box>
     


    </Box>
  );
}

export default Header;
