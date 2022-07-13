const SUPABASE_URL = 'https://qertleyfbmgdifewklah.supabase.co';
const SUPABASE_KEY =
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFlcnRsZXlmYm1nZGlmZXdrbGFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTc1NjMzMTgsImV4cCI6MTk3MzEzOTMxOH0.Fva_wBPyucEKfw8hcJnRWYBu_kJh_GMiku843q_EO3c';

export const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export function checkResponse({ error, data }) {
    if (error) {
        // eslint-disable-next-line no-console
        console.log(error);
        return null;
    }

    return data;
}