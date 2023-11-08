import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <section className="flex h-[calc(100vh-7rem)] justify-center items-center">
      <div>
        <h1 className="text-4xl font-bold">Not Found</h1>
        <Link href="/" className="flex justify-center items-center mt-10">Volver al inicio</Link>
      </div>
    </section>
  );
}

export default NotFound;
