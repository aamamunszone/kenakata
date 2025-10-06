import axios from 'axios';
import { useEffect, useState } from 'react';

export function useProducts(url = '/data/products.json') {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true; // prevent for memory leak

    async function fetchProducts() {
      try {
        const res = await axios.get(url);

        if (isMounted) {
          setProducts(res.data.products || []);
        }
      } catch (err) {
        if (isMounted) setError(err.message);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchProducts();

    return () => {
      isMounted = false;
    };
  }, [url]);

  return { products, loading, error };
}
