import { useState } from "react";

// type FormData = {
//   name: string;
//   email: string;
//   message: string;
// };

// type StatusType = "saved" | "cancelled" | null;

// function Modal({
//   isOpen,
//   onClose,
//   onSave,
// }: {
//   isOpen: boolean;
//   onClose: () => void;
//   onSave: (data: FormData) => void;
// }) {
//   const [form, setForm] = useState<FormData>({
//     name: "",
//     email: "",
//     message: "",
//   });

//   if (!isOpen) return null;

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
//   ) => {
//     setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSave = () => {
//     onSave(form);
//     setForm({ name: "", email: "", message: "" });
//   };

//   const handleClose = () => {
//     setForm({ name: "", email: "", message: "" });
//     onClose();
//   };

//   return (
//     <div
//       className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
//       onClick={(e) => e.target === e.currentTarget && handleClose()}
//       role="dialog"
//       aria-modal="true"
//       aria-labelledby="modal-title"
//     >
//       <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
//         <div className="mb-5 flex items-center justify-between">
//           <h2 id="modal-title" className="text-lg font-semibold text-gray-900">
//             New contact
//           </h2>
//           <button
//             onClick={handleClose}
//             className="rounded-lg p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
//             aria-label="Close form"
//           >
//             ✕
//           </button>
//         </div>

//         <div className="space-y-4">
//           <div>
//             <label
//               htmlFor="name"
//               className="mb-1 block text-sm font-medium text-gray-700"
//             >
//               Name
//             </label>
//             <input
//               id="name"
//               name="name"
//               type="text"
//               value={form.name}
//               onChange={handleChange}
//               placeholder="Jane Smith"
//               className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition"
//             />
//           </div>

//           <div>
//             <label
//               htmlFor="email"
//               className="mb-1 block text-sm font-medium text-gray-700"
//             >
//               Email
//             </label>
//             <input
//               id="email"
//               name="email"
//               type="email"
//               value={form.email}
//               onChange={handleChange}
//               placeholder="jane@example.com"
//               className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition"
//             />
//           </div>

//           <div>
//             <label
//               htmlFor="message"
//               className="mb-1 block text-sm font-medium text-gray-700"
//             >
//               Message
//             </label>
//             <textarea
//               id="message"
//               name="message"
//               rows={3}
//               value={form.message}
//               onChange={handleChange}
//               placeholder="Write a short message..."
//               className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition resize-none"
//             />
//           </div>
//         </div>

//         <div className="mt-6 flex justify-end gap-2">
//           <button
//             onClick={handleClose}
//             className="rounded-lg border border-gray-200 px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 transition-colors"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={handleSave}
//             disabled={!form.name.trim()}
//             className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
//           >
//             Save contact
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function App() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [status, setStatus] = useState<{ type: StatusType; name?: string }>({
//     type: null,
//   });

//   const handleSave = (data: FormData) => {
//     setStatus({ type: "saved", name: data.name });
//     setIsOpen(false);
//   };

//   const handleClose = () => {
//     setStatus({ type: "cancelled" });
//     setIsOpen(false);
//   };

//   return (
//     <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-6">
//       <div className="w-full max-w-sm rounded-2xl border border-gray-100 bg-white p-8 shadow-sm text-center">
//         <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 text-xl">
//           👤
//         </div>
//         <h1 className="mt-3 text-xl font-semibold text-gray-900">Contacts</h1>
//         <p className="mt-1 text-sm text-gray-500">
//           Add people to your contact list.
//         </p>

//         <button
//           onClick={() => setIsOpen(true)}
//           className="mt-6 w-full rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-indigo-700 transition-colors"
//         >
//           + Open form
//         </button>

//         {status.type && (
//           <p className="mt-4 text-sm text-gray-500">
//             {status.type === "saved"
//               ? `✓ Saved contact: ${status.name}`
//               : "Form closed without saving."}
//           </p>
//         )}
//       </div>

//       <Modal isOpen={isOpen} onClose={handleClose} onSave={handleSave} />
//     </div>
//   );
// }

const Sample = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <div>
        <button>open form</button>
      </div>
    </>
  );
};

export default Sample;
