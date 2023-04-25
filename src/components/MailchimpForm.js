import MailchimpSubscribe from 'react-mailchimp-subscribe';
import { Newsletter } from './Newsletter';

export const MailchimpForm = () => {
  const postUrl = `https://github.us9.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

  return (
    <>
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <Newsletter
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </>
  );
};

// import MailchimpSubscribe from 'react-mailchimp-subscribe';
// import { Newsletter } from './Newsletter';

// export const MailchimpForm = () => {
//   const postUrl = `https://github.us9.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

//   // const postUrl = `${process.env.https://github.us9.list-manage.com/subscribe/post}?u=${'process.env.93fd8cd2fb192480aed6dfe21'}&id=${'process.env.96f3bbef98'}`;

//   return (
//     <>
//       <MailchimpSubscribe
//         url={postUrl}
//         render={({ subscribe, status, message }) => (
//           <Newsletter
//             status={status}
//             message={message}
//             onValidated={(formData) => subscribe(formData)}
//           />
//         )}
//       />
//     </>
//   );
// };

// action="https://github.us9.list-manage.com/subscribe/post" method="POST"
// <input type="hidden" name="u" value="93fd8cd2fb192480aed6dfe21">
// <input type="hidden" name="id" value="96f3bbef98">

// import MailchimpSubscribe from "react-mailchimp-subscribe";
// import { Newsletter } from "./Newsletter";

// export const MailchimpForm = () => {
//   const postUrl = `${process.env.REACT_APP_MAILCHIMP_URL}?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

//   return (
//     <>
//       <MailchimpSubscribe
//         url={postUrl}
//         render={({ subscribe, status, message }) => (
//           <Newsletter
//             status={status}
//             message={message}
//             onValidated={formData => subscribe(formData)}
//             />
//         )}
//         />
//     </>
//   )
// }

// 96f3bbef98 API ID
// a4fb7e39f51d4fa2395012ef045a7835-us9 API Key
