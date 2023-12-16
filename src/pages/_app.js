// // pages/_app.js

// import React from 'react';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { Provider } from 'react-redux';
// import store from '../app/redux/features/store';
// import '../app/globals.css';

// function MyApp({ Component, pageProps }) {
//     return (
//         <Provider store={store}>
//             <Component {...pageProps} />
//             <ToastContainer />
//         </Provider>
//     );
// }

// export default MyApp;
// pages/_app.js
"use client"
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import store from '../app/redux/features/store';
import '../app/globals.css';

export default function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <div>
                <Component {...pageProps} />
                <ToastContainer />
            </div>
        </Provider>
    );
}
const App = () => {
    const dispatch = useDispatch(); // Works!
}
