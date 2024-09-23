// pages/api/spotify.js
import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

require('dotenv').config();

const client_id = process.env.NEXT_SPOTIFY_CLIENT_ID;
const client_secret = process.env.NEXT_SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.NEXT_SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';
const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing';

const getAccessToken = async () => {
    const response = await axios.post(TOKEN_ENDPOINT, new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token,
    }), {
        headers: {
            Authorization: `Basic ${basic}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    });

    return response.data.access_token;
};

const getNowPlaying = async () => {
    const access_token = await getAccessToken();

    return axios.get(NOW_PLAYING_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });
};

export async function GET(req: NextRequest) {
    const response = await getNowPlaying();

    if (response.status === 204 || response.status > 400) {
        return NextResponse.json({ isPlaying: false });
    }

    const song = response.data;
    const isPlaying = song.is_playing;
    const title = song.item.name;
    const artist = song.item.artists.map((artist: any) => artist.name).join(', ');
    const album = song.item.album.name;
    const albumImageUrl = song.item.album.images[0].url;
    const songUrl = song.item.external_urls.spotify;
    const progress = song.progress_ms;
    const duration = song.item.duration_ms;
    const popularity = song.item.popularity;

    return NextResponse.json({
        isPlaying,
        title,
        artist,
        album,
        albumImageUrl,
        songUrl,
        progress,
        duration,
        popularity
    });
}
