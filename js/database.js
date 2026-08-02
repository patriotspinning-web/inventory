import { supabase } from "./supabase.js";

export async function addCottonReceive(data) {
    const { error } = await supabase
        .from("cotton_receive")
        .insert([data]);

    if (error) {
        console.error(error);
        return false;
    }

    return true;
}
