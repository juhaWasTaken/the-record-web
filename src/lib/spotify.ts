const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_TOKEN;

let accessToken: string | null = null;

async function getAccessToken() {
    if (accessToken) return accessToken;

    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(CLIENT_ID + ':' + CLIENT_SECRET)
        },
        body: 'grant_type=client_credentials'
    });

    const data = await response.json();
    accessToken = data.access_token;
    return accessToken;
    console.log(accessToken);
}

export async function searchAlbums(query: string) {
    const token = await getAccessToken();
    const response = await fetch(`https://api.spotify.com/v1/search?q=${query}&type=album&limit=10`, {
        headers: { 'Authorization': 'Bearer ' + token }
    });
    return response.json();
}

export async function getAlbum(id: string) {
    const token = await getAccessToken();
    const response = await fetch(`https://api.spotify.com/v1/albums/${id}`, {
        headers: { 'Authorization': 'Bearer ' + token }
    });
    return response.json();
}

export async function getNewReleases() {
    const token = await getAccessToken();
    const response = await fetch('https://api.spotify.com/v1/browse/new-releases?limit=6', {
        headers: { 'Authorization': 'Bearer ' + token }
    });
    return response.json();
}