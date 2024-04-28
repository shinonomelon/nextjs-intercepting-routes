"use client";
import { useRouter } from "next/navigation";
import { MouseEvent, useCallback } from "react";
export const Modal = ({
  children,
  ...props
}: {
  children: React.ReactNode;
}) => {
  const router = useRouter();
  const routerBack = useCallback(
    (e: MouseEvent | Event) => {
      e.preventDefault();
      router.back();
    },
    [router]
  );
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={(e) => routerBack(e)}
      ></div>
      <div className="bg-white rounded-lg p-6 relative z-10">
        <button
          type="button"
          onClick={(e) => routerBack(e)}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-500 "
        >
          <span className="sr-only">Close</span>
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
};
