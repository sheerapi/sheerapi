"use client";

import { BackgroundLines } from "@/components/ace/bg-lines";
import { LinkPreview } from "@/components/ace/link-preview";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ButtonLink } from "@/components/ui/buttonlink";
import { IconBrandStackoverflow, IconBrandPinterest, IconBrandX, IconBrandInstagram, IconBrandDiscord, IconBrandGithub, IconBrandDiscordFilled } from "@tabler/icons-react";
import axios from "axios";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import { Progress } from "@/components/ui/progress";

require('dotenv').config();

const client_id = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
const client_secret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';
const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing';

const getAccessToken = async () => {
    const response = await axios.post(TOKEN_ENDPOINT, new URLSearchParams({
        grant_type: 'refresh_token',
        code: refresh_token || "",
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

export default function About() {
    const [song, setSong] = useState({
        isPlaying: false,
        title: "Not Playing",
        artist: "",
        album: "",
        albumImageUrl: "",
        songUrl: "",
        progress: 0,
        duration: 0,
        popularity: "",
    });
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const fetchSong = async () => {
            const response = await getNowPlaying();
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

            const data = {
                isPlaying,
                title,
                artist,
                album,
                albumImageUrl,
                songUrl,
                progress,
                duration,
                popularity
            };

            setSong(data);
            console.log("Hi");
            if (data != null && data.isPlaying) {
                setLoaded(true);
            }
            else {
                setLoaded(false);
            }
        };

        fetchSong();

        const interval = setInterval(() => {
            fetchSong();
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-full w-full bg-black">
            <div className="h-full w-full flex gap-4 flex-col px-14 pt-24 text-white bg-transparent bg-grid-white/[0.2] bg-grid-black/[0.2] relative">
                <div className="absolute left-0 top-0 bottom-0 right-0 pointer-events-none bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                <p className="font-black text-5xl z-50 relative">about me</p>

                <div className="z-50 relative">
                    <span>
                        hi, i'm sheerapi (also <span className="font-black tracking-widest drop-shadow-[4px_4px_24px_rgba(255,255,255,0.5)]">chkc_2324</span>).
                        i like to code, preferably in c++ <span className="font-medium text-white/[0.5] text-xs">(no, i wont switch to rust, ever)</span>,
                        but i also like javascript/typescript, and c#.<br />
                        i'm currently working on
                        <LinkPreview quality={100} className="font-bold hover:font-black hover:tracking-wider hover:drop-shadow-[4px_4px_24px_rgba(255,255,255,0.5)]" url="https://github.com/sheerapi/Espresso"> Espresso </LinkPreview>
                        and trying to succeed at it.
                    </span>
                </div>

                <div className="z-50 relative w-full h-96 bg-stone-900 rounded-lg flex flex-col md:flex-row md:justify-between">
                    <div className="w-full  border-2 rounded-tr-xl rounded-tl-xl md:rounded-tr-none md:rounded-l-xl border-stone-700" style={{
                        backgroundImage: `url(${(loaded ? song.albumImageUrl : "")})`
                    }}>
                        <div className="flex-col backdrop-blur-3xl bg-black/[0.75] h-full bg-cover bg-no-repeat rounded-tr-xl rounded-tl-xl md:rounded-tr-none md:rounded-l-xl flex justify-left items-top p-8 gap-6">
                            <p className="text-2xl font-bold drop-shadow-[4px_4px_24px_rgba(255,255,255,0.5)]">what im listening to:</p>
                            <div className="flex flex-col w-full gap-px">
                                <div className="flex w-full h-32 justify-center align-center">
                                    {loaded ? <img className="rounded-full w-32 h-32 rotate" src={song?.albumImageUrl} alt={song?.album}></img> : <Skeleton className="rounded-full w-32 h-32"></Skeleton>}
                                </div>
                                {loaded ? <span className="font-bold text-xl mt-4 w-full drop-shadow-[4px_4px_24px_rgba(255,255,255,1)]">{song.title}</span> : <Skeleton className="rounded-lg w-40 h-4 mt-4"></Skeleton>}
                                {loaded ? <span className="font-medium text-lg w-full drop-shadow-[4px_4px_24px_rgba(255,255,255,1)] text-white/[0.5]">{song.album}</span> : <Skeleton className="rounded-lg w-40 h-2"></Skeleton>}
                                {loaded ? <span className="font-normal text-md w-full drop-shadow-[4px_4px_24px_rgba(255,255,255,1)] text-white/[0.4]">{song.artist}</span> : <Skeleton className="rounded-lg w-40 h-2"></Skeleton>}
                                {loaded ? <Progress value={(song.progress / song.duration) * 100} className="w-full h-2 mt-2"></Progress> : <Skeleton className="rounded-lg w-full h-2 mt-1"></Skeleton>}
                            </div>
                        </div>
                    </div>

                    <div className="w-full bg-stone-900 h-full border-2 rounded-b-xl md:rounded-b-none md:rounded-r-xl border-stone-700 flex md:justify-end items-top p-8 gap-4">
                        <p className="text-2xl font-bold drop-shadow-[4px_4px_24px_rgba(255,255,255,0.5)]">my interests:</p>
                    </div>
                </div>
            </div>

            <div className="w-full px-4 flex flex-row justify-between items-center h-12 bg-white/[0.05] backdrop-blur-md absolute top-0">
                <div>
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/">home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator></BreadcrumbSeparator>
                            <BreadcrumbPage>
                                about
                            </BreadcrumbPage>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>

                <div className="flex gap-3">
                    <a href="https://stackoverflow.com/users/23363415/sheerapi" className="hover:-translate-y-0.5"><IconBrandStackoverflow color="white" size={19} /></a>
                    <a href="https://pinterest.com/sheerapi" className="hover:-translate-y-0.5"><IconBrandPinterest color="white" size={19} /></a>
                    <a href="https://twitter.com/sheerapii" className="hover:-translate-y-0.5"><IconBrandX color="white" size={19} /></a>
                    <a href="https://instagram.com/sheerapi" className="hover:-translate-y-0.5"><IconBrandInstagram color="white" size={19} /></a>
                    <a href="https://discord.com/users/870401133741486111" className="hover:-translate-y-0.5"><IconBrandDiscordFilled color="white" size={19} /></a>
                    <a href="https://github.com/sheerapi" className="hover:-translate-y-0.5"><IconBrandGithub color="white" size={19} /></a>
                </div>
            </div>
        </div>
    );
}