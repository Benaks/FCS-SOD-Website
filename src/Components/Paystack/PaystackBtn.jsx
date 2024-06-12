// Payment.js
import React from 'react';
import axios from 'axios';

const PaystackBtn = () => {
  const payWithPaystack = () => {
    const handler = window.PaystackPop.setup({
      key: 'pk_live_fc12081cb873356e63159c45f996986266b99ad0', // put your public key here
      email: 'enoch@gmail.com', // put your customer's email here
      amount: 71000, // amount the customer is supposed to pay in kobo
      metadata: {
        custom_fields: [
          {
            display_name: "Mobile Number",
            variable_name: "mobile_number",
            value: "+2348012345678" // customer's mobile number
          }
        ]
      },
      callback: function (response) {
        // after the transaction has been completed
        // make post call to the server to verify payment
        // using transaction reference as post data
        axios.post('/verify.php', { reference: response.reference })
          .then(res => {
            if (res.data.status === "success") {
              // successful transaction
              alert('Transaction was successful');
            } else {
              // transaction failed
              alert('Transaction failed');
            }
          })
          .catch(error => {
            console.error('There was an error!', error);
          });
      },
      onClose: function () {
        // when the user closes the payment modal
        alert('Transaction was not completed, window closed.');
      }
    });
    handler.openIframe(); // open the paystack's payment modal
  };

  return (
    <div>
      <button className="mt-1 p-2 border bg-accent text-white hover:bg-secondary duration-300 rounded w-full" onClick={payWithPaystack}>Pay with Paystack</button>
    </div>
  );
};

export default PaystackBtn;






















// // // PaystackButton.js
// // import React from 'react';
// // import { PaystackButton } from 'react-paystack';

// // const PaystackPayment = ({ email, amount, publicKey, onSuccess, onClose }) => {
// //     const componentProps = {
// //         email,
// //         amount, // in kobo (100 kobo = 1 Naira)
// //         metadata: {
// //             custom_fields: [
// //                 {
// //                     display_name: "Email",
// //                     variable_name: "email",
// //                     value: email,
// //                 },
// //             ],
// //         },
// //         publicKey,
// //         text: "Pay Now",
// //         onSuccess,
// //         onClose,
// //         className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
// //     };

// //     return <PaystackButton {...componentProps} />;
// // };

// // export default PaystackPayment;


// import React, { useState } from 'react';
// import axios from 'axios';

// const PaystackButton = () => {
//    const payWithPaystack = () => {
//     const handler = window.PaystackPop.setup({
//       key: 'pk_test_235305ce6e45c6dd10d3241ac29e56df75f5536d', // put your public key here
//       email: 'bemsenakaager2020@mail.com', // put your customer's email here
//       amount: 370000, // amount the customer is supposed to pay in kobo
//       metadata: {
//         custom_fields: [
//           {
//             display_name: "Mobile Number",
//             variable_name: "mobile_number",
//             value: "+2348012345678" // customer's mobile number
//           }
//         ]
//       },

//     return (
//         <div>
//             <button onClick={initializePayment} disabled={paymentLoading}>
//                 {paymentLoading ? "Processing Payment..." : "Make Payment"}
//             </button>
//         </div>
//     );
// };

// export default PaystackButton;


