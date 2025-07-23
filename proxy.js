// proxy.js
const API_URL = 'https://script.google.com/macros/s/AKfycbyjljviHVpb2fSDcWYAHmYElVBJja9cberj-sCFdcRHutDFI58wJ69LjAOwVLz0vZnl/exec';
const API_KEY = 'TA_CLE_API_SECRETE'; // Remplace par ta vraie clé

export async function getData() {
  const response = await fetch(`${API_URL}?key=${API_KEY}`);
  if (!response.ok) {
    throw new Error('Erreur lors de la récupération des données');
  }
  return await response.json();
}
