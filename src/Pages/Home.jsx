import React from 'react';

     const Home = () => {
       return (
         <div className="min-h-screen flex items-center justify-center bg-gray-100">
           <div className="bg-white p-8 rounded-lg shadow-lg text-center">
             <h1 className="text-3xl font-bold mb-4">Welcome!</h1>
             <p className="text-gray-600">You have successfully logged in.</p>
           </div>
         </div>
       );
     };

     export default Home;