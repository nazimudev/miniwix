// Frontend-only for now. Nothing is sent anywhere.
//
// To connect your Laravel API later, replace the body of this function, e.g.:
//
//   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json", Accept: "application/json" },
//     body: JSON.stringify(values),
//   });
//   if (!res.ok) throw new Error("Request failed");
//   return { sent: true };
//
// `values` = { name, email, subject, projectType, message }

export const submitContactForm = async (values) => { 
  const _values = values;
  return { sent: false };
};
