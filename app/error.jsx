"use client";

export default function Error({ error }) {
  console.error(error);

  return (
    <div className="p-10 text-center">
      <h1 className="text-xl font-bold">Something went wrong 😢</h1>
      <p>Check logs for details</p>
    </div>
  );
}
