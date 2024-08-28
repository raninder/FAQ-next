'use client' 

import FAQ from '@/components/FAQ';



export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
        <FAQ />
      </main>
    </div>
  );
}

