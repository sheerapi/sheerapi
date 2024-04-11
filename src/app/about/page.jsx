"use client";

import { Breadcrumb, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card } from "@/components/ui/card";
import Header from "@/components/ui/header";
import Muted from "@/components/ui/muted";
import { useState, useEffect } from "react";
import style from "./page.module.css";
import { Skeleton } from "@/components/ui/skeleton";

export default function About() {
    let [songName, setSongName] = useState("");
    let [songAlbum, setSongAlbum] = useState("");
    let [songArtist, setSongArtist] = useState("");
    let [songPhoto, setSongPhoto] = useState("");

    const sync = async () => {
        const params = new URLSearchParams();
        params.append("grant_type", "refresh_token");
        params.append("client_id", process.env.SPOTIFY_ID);
        params.append("client_secret", process.env.SPOTIFY_SECRET);
        params.append("refresh_token", process.env.SPOTIFY_REFRESH_TOKEN);

        const token = (await (await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: params
        })).json()).access_token;

        const response = (await (await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token
            },
        })).json());

        if (response.item != null) {
            setSongName(response.item.name);
            setSongAlbum(response.item.album.name);
            setSongArtist(response.item.artists[0].name);
            setSongPhoto(response.item.album.images[0].url);
        }
    };

    useEffect(() => {
        const timer = setInterval(sync, 5000);

        return () => {
            clearInterval(timer);
        }
    })

    return (
        <main className="flex justify-start items-start h-full flex-col gap-5">
            <div className="absolute top-[2rem] left-[2rem]">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbLink href="/">home</BreadcrumbLink>
                        <BreadcrumbSeparator />
                        <BreadcrumbPage>about</BreadcrumbPage>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>

            <div className={style.intro_header}>
                <Header>about me.</Header>
                <p>
                    hi, i'm sheerapi. i like to code, preferably in c++ <Muted>(no i won't switch to rust)</Muted>,
                    but i also like javascript/typescript, c#.<br /> i'm currently working on <a href="">eclipse linux</a>
                </p>
            </div>

            <Header>what i'm listening to:</Header>
            <Card className={"p-6 flex gap-4 flex-col " + style.song_card}>
                {songPhoto == "" ? <Skeleton className={style.song_photo}></Skeleton> : <img className={style.song_photo} src={songPhoto} />}
                <div className={style.song_info}>
                    <span className={style.song_name}>{songName}</span><br />
                    <span className={style.song_album}>{songAlbum}</span><br />
                    <span className={style.song_artist}>{songArtist}</span>
                </div>
            </Card>

            <div className={style.interest_page}>
                <Header>my interests:</Header>
                <div className={style.interest_grid}>
                    <div className={style.interest} style={{ backgroundImage: "url('https://imageio.forbes.com/blogs-images/forbestechcouncil/files/2019/01/canva-photo-editor-8-7.png')" }}>
                        <div className={style.interest_container}>
                            coding, duh
                        </div>
                    </div>
                    <div className={style.interest} style={{ backgroundImage: "url('https://cdn.sanity.io/images/599r6htc/localized/121b95a7cd65588fe63417d7b87a474035f0ec83-1080x541.png')" }}>
                        <div className={style.interest_container}>
                            designing
                        </div>
                    </div>
                    <div className={style.interest} style={{ backgroundImage: "url('https://i.pinimg.com/564x/d5/9a/3f/d59a3f926ffac0fdc902fca1afb21a34.jpg')" }}>
                        <div className={style.interest_container}>
                            creating projects i'm never gonna finish
                        </div>
                    </div>
                    <div className={style.interest} style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/en/4/47/Taylor_Swift_-_Red_%28Taylor%27s_Version%29.png')" }}>
                        <div className={style.interest_container}>
                            Taylor Swift
                        </div>
                    </div>
                    <div className={style.interest} style={{ backgroundImage: "url('https://i.pinimg.com/564x/2f/49/34/2f49347272440be56744e8f67d51fa64.jpg')" }}>
                        <div className={style.interest_container}>
                            cats
                        </div>
                    </div>
                    <div className={style.interest} style={{ backgroundImage: "url('https://i.pinimg.com/564x/65/1b/6d/651b6dff48f4edf48d523d1f1e968232.jpg')" }}>
                        <div className={style.interest_container}>
                            baking
                        </div>
                    </div>
                    <div className={style.interest} style={{ backgroundImage: "url('https://www.digitaltrends.com/wp-content/uploads/2018/12/celeste-switch-review-5.jpeg')" }}>
                        <div className={style.interest_container}>
                            videogames
                        </div>
                    </div>
                    <div className={style.interest} style={{ backgroundImage: "url('https://i.ppy.sh/fa085b1a0431731f90b5a1a81f0cfdc59497b32d/68747470733a2f2f696d6775722d617263686976652e7070792e73682f635a656230627a2e6a7067')" }}>
                        <div className={style.interest_container}>
                            rhythm games (i suck at them lol)
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
