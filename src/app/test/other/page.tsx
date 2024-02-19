"use client"

import { usePriceQuery } from "@/queries/price.query";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";

export default function Page() {
  const client = useQueryClient();
  const priceQuery = usePriceQuery();

  return (
    <>
      <div>
        <h2>test/other</h2>
      </div>
      <div>
        price: { priceQuery.data }
      </div>
      <div className="flex flex-wrap gap-4">
        <button 
          className="inline-flex flex-wrap px-2 py-0.5 text-xs text-slate-500 cursor-pointer border border-slate-500 hover:bg-slate-100"
          onClick={() => {
            client.removeQueries({
              queryKey: ['common', 'price'],
            });
          }}
          >
          price 캐싱 데이터 제거하기
        </button>
      </div>
      <div>
        <Link href="/test/basic">
          /test/basic 페이지로 이동
        </Link>
      </div>
    </>
  );
}