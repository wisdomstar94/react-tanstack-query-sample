import { useQuery } from "@tanstack/react-query";

export function usePriceQuery() {
  return useQuery({
    queryKey: ['common', 'price'],
    staleTime: 1000 * 10,
    queryFn: () => {
      return fetch('https://fakestoreapi.com/products/1').then((res) => {
        return res.json().then(body => {
          return body.price;
        })
      });
    },
  });
};