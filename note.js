//! Creating a json server

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

//! Redux State

//?redux> pcBuilder> pcBuilderSlice.js  */function declaring
/* 
    const { createSlice } = require("@reduxjs/toolkit");

    const pcBuildSlice = createSlice({
      name: "cp",
      initialState: {
        pcComponents: [],
      },
      reducers: {
        addItem: (state, action) => {
          state.pcComponents.push(action.payload);
        },
      },
    });

    export const { addItem } = pcBuildSlice.actions;
    export default pcBuildSlice.reducer;
*/

//?store.js in redux folder        connect reducers with store.js
/* 
      import { configureStore } from "@reduxjs/toolkit";
      import cpBuilderReducer from "../redux/pcBuilder/pcBuilderSlice";

      export default configureStore({
        reducer: {
        //*  pc: cpBuilderReducer,
        },
        middleware: (getDefaultMiddleware) =>
          getDefaultMiddleware().concat(apiSlice.middleware),
      }); 
      */

//? _app.js           connect store with _app.js
/* 
      import store from "@/redux/store";
     import "@/styles/globals.css";
     import { Provider } from "react-redux";

     export default function App({ Component, pageProps }) {
       const getLayout = Component.getLayout || ((page) => page);
       return (
      //* <Provider store={store}>{getLayout(<Component {...pageProps} />)}</Provider>
       );
     } 
     */

//? cpuForpcBuilder.js page          add click handeler to set data in state
/* 
   import { useGetDataQuery } from "@/redux/api/api";
   import { addItem } from "@/redux/pcBuilder/pcBuilderSlice";
   import Image from "next/image";
   import React from "react";
   import { useDispatch } from "react-redux";
   
   export default function CpuForPcBuilder() {
     const { data } = useGetDataQuery();
     const cpus = data?.processor;
   
    
       * ********** reduxStatemanagement************ 
     const dispatch = useDispatch();
     const handleAddForPcBuild = (item) => {
       dispatch(addItem(item));
     };
   
   
     return (
       <div className="flex flex-wrap">
         {cpus?.map((cpu) => (
           <div
             className="bg-slate-300 rounded-md w-[350px] m-5 p-5"
             key={cpu.name}
           >
             <Image
               className="mx-auto"
               src={cpu?.image}
               alt={cpu?.name}
               width={250}
               height={250}
             />
             <h3 className="text-xl">{cpu.name}</h3>
             <p>{cpu.price}</p>
   
   
      *  ********** reduxStateManagement************  
             <button
               onClick={() => handleAddForPcBuild(cpu)}
               className="btn btn-primary mt-3"
             >
               Select this
             </button>
           </div>
         ))}
       </div>
     );
   }  
   */

//? Use stste data in page where we need

/*  
  import MainLayout from "@/components/layouts/MainLayout";
   import Link from "next/link";
   import React from "react";
   import { useSelector } from "react-redux";
   
   export default function PcBuilder() {
     * ********** reduxStatemanagement************ 
     const { pcComponents } = useSelector((state) => state.pc);
   
     return (
       <div className="w-2/3 border mx-auto  border-amber-500">
         * <h2>{pcComponents.length}</h2>
   
         <div className="flex">
           <div className="pr-6">
             <h3>Processor</h3>
           </div>
           <div className="flex-1">selected item</div>
           <div>
             <Link href={"/cpuForPcBuilder"}>Click to select</Link>
           </div>
         </div>
   
         <hr
           style={{ borderWidth: "1px", borderColor: "#333", margin: "8px 0" }}
         />
         <div>
           <h3>Motherboard</h3>
         </div>
         <hr
           style={{ borderWidth: "1px", borderColor: "#333", margin: "8px 0" }}
         />
         <div>
           <h3>RAM</h3>
         </div>
         <hr
           style={{ borderWidth: "1px", borderColor: "#333", margin: "8px 0" }}
         />
         <div>
           <h3>Power Supply</h3>
         </div>
         <hr
           style={{ borderWidth: "1px", borderColor: "#333", margin: "8px 0" }}
         />
         <div>
           <h3>Monitor</h3>
         </div>
         <hr
           style={{ borderWidth: "1px", borderColor: "#333", margin: "8px 0" }}
         />
         <div>
           <h3>Others</h3>
         </div>
       </div>
     );
   }
   
   PcBuilder.getLayout = function getLayout(page) {
     return <MainLayout>{page}</MainLayout>;
   };
    */

//! Load data from external url
//? redux> api> api.js
/* 
   import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
   
   export const apiSlice = createApi({
     reducerPath: "api",
     baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
     endpoints: (builder) => ({
       getData: builder.query({
         query: () => "/data",
       }),
     }),
   });
   
   export const { useGetDataQuery } = apiSlice;
   
 */

//? store.js
/* 
   import { configureStore } from "@reduxjs/toolkit";
   import { apiSlice } from "./api/api";
   import cpBuilderReducer from "../redux/pcBuilder/pcBuilderSlice";
   
   export default configureStore({
     reducer: {
  *     [apiSlice.reducerPath]: apiSlice.reducer,
       pc: cpBuilderReducer,
     },
     middleware: (getDefaultMiddleware) =>
       getDefaultMiddleware().concat(apiSlice.middleware),
   });
   
 */

//? _app.js   connect store with _app.js
/* 
   import store from "@/redux/store";
   import "@/styles/globals.css";
   import { Provider } from "react-redux";
   
   export default function App({ Component, pageProps }) {
     const getLayout = Component.getLayout || ((page) => page);
     return (
  *     <Provider store={store}>{getLayout(<Component {...pageProps} />)}</Provider>
     );
   }
 */

//? use loaded data in Home page
/* 
...
export default function HomePage() {
*  const { data, isLoading, isError, error } = useGetDataQuery();
...
 */

//! creating mongodb server
//? pages> api> products>  this will provide a url "http://localhost:3000/api/products" where data will display which is find from mongodb

/* 
    / require("dotenv").config();
    const { MongoClient, ServerApiVersion } = require("mongodb");
    const uri =
      "mongodb+srv://nextJs-assignment:FJu76DwD20umZkRr@cluster0.gcc40.mongodb.net/?retryWrites=true&w=majority";
    / "mongodb+srv://{process.env.DB_USER}:{process.env.DB_PASS}@cluster0.gcc40.mongodb.net/?retryWrites=true&w=majority";

    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });

    async function run(req, res) {
      try {
        await client.connect();
        const productCollection = client
          .db("nextJsAssignment")
          .collection("products");
        if (req.method === "GET") {
          const products = await productCollection.find({}).toArray();
          res.send({ message: "success", status: 200, data: products });
        }
      } finally {
        // await client.close();
      }
    }

    export default run;
 */

//? redux> api> api.js     Load data from url created from previous file
/* 
// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define our single API slice object
export const apiSlice = createApi({
  // The cache reducer expects to be added at `state.api` (already default - this is optional)
  reducerPath: "api",
  // All of our requests will have URLs starting with '/fakeApi'
  // baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  // The "endpoints" represent operations and requests for this server
  endpoints: (builder) => ({
    // The `getPosts` endpoint is a "query" operation that returns data
    getData: builder.query({           
      // The URL for the request is '/fakeApi/posts'
      // query: () => "/data",
      query: () => "/api/products",
    }),
  }),
});

// Export the auto-generated hook for the `getPosts` query endpoint
export const { useGetDataQuery } = apiSlice;

*/

//? Use In Component

/* 
import MainLayout from "@/components/layouts/MainLayout";
import { useGetDataQuery } from "@/redux/api/api";
import Image from "next/image";
import React from "react";

export default function RamPage() {
  const { data } = useGetDataQuery();  //* loaded data
  const rams = data?.data[0].data.ram;  //* filtering data 

  return (
    <div className="flex flex-wrap">
      {rams?.map((ram) => (
        <div
          className="bg-slate-300 rounded-md w-[350px] h-[500px] m-5 p-5  relative"
          key={ram.name}
        >
          <h3 className="text-xl">{ram.name}</h3>
          <p>{ram.price}</p>

          <Image
            className="mx-auto absolute bottom-0 left-0"
            src={ram?.image}
            alt={ram?.image}
            width={350}
            height={350}
          />
        </div>
      ))}
    </div>
  );
}

RamPage.getLayout = function getLayout(page) {  //* for page layout
  return <MainLayout>{page}</MainLayout>;
};

*/

//! npm run dev, npm run json-server, npm run build, npm start,

//* Deploy>  vercel> y> ↩ N> ↩> ↩> N
