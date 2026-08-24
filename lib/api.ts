const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/api';

export async function submitPublicLead(leadData: {
  name: string;
  companyName?: string;
  email: string;
  phone: string;
  projectType: string;
  estimatedAreaSqft: number;
  scopeNeeded: string[];
  qualityTier: string;
  estimatedBudget: number;
  message?: string;
}) {
  try {
    const res = await fetch(`${API_BASE}/leads`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(leadData),
    });
    return await res.json();
  } catch (err) {
    console.warn('[Anjani Website] Backend submission failed, fallback executed.', err);
    return { success: true, fallback: true };
  }
}

export async function fetchCatalogueProducts(category?: string) {
  try {
    const query = category && category !== 'All' ? `?category=${category}` : '';
    const res = await fetch(`${API_BASE}/products${query}`);
    const json = await res.json();
    return json.data || [];
  } catch (err) {
    console.warn('[Anjani Website] Backend products fetch failed.', err);
    return [];
  }
}
