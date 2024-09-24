export const normalizeCurrentlyListening = ({ is_playing, progress_ms, item }) => ({
    id: item.id,
    isPlaying: is_playing,
    title: item.name,
    artist: item.artists?.map(({ name }) => name).join(' '),
    album: item.album?.name,
    thumbnail: item.album?.images[0]?.url,
    url: item.external_urls?.spotify,
    progress: progress_ms,
    duration: item.duration_ms
});