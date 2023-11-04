//! personal note

//? Layout

//? 01. src> component> layouts> MainLayout.js
/* 
   import Footer from "../Footer";
   import Header from "../Header";

   export default function MainLayout({ children }) {
     return (
       <>
         <Header />
         {children}
         <Footer />
       </>
     );
   }
 */

//? 02. _app.js
/* 
  const getLayout = Component.getLayout || ((page) => page);
  return <>{getLayout(<Component {...pageProps} />)}</>;
  */

//? index.js (where we need to use this layout)
/* 
      HomePage.getLayout = function getLayout(page) {
      return <MainLayout>{page}</MainLayout>;
      };
  */

//
