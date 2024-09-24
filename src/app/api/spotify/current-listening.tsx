
import { normalizeCurrentlyListening } from '@/lib/normalizeSpotify';
import { getCurrentlyListening } from '@/lib/spotify';


export default async function handler(req: any, res: any) {
    const response = await getCurrentlyListening();

    if (!response) {
        return res.status(500).json({ error: 'Spotify not available' });
    }

    if (response.status === 204 || response.status > 400) {
        return res.status(200).json({ is_playing: false });
    }

    const data = await response.json();

    return res.status(200).json(normalizeCurrentlyListening(data));
}