import { supabase } from './supabase';
 
export async function fetchUsers() {
    const { data, error } = await supabase
        .from('users')
        .select('id, email, username');

    if (error) {
        console.error(error);
        return [];
    }

    return data || [];
}
