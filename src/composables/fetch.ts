import { ref } from "vue";

export function useFetch(url: string) {
  const loading = ref(false);
  const data = ref(null);
  const error = ref(null);

  loading.value = true;

  fetch(url)
    .then((res) => res.json())
    .then((json) => (data.value = json))
    .catch((err) => (error.value = err));

  loading.value = false;

  return { data, error, loading };
}
