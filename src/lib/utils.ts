import { type ClassValue, clsx } from "clsx";
import { FirebaseApp, initializeApp } from "firebase/app";
import { twMerge } from "tailwind-merge";

export var app: FirebaseApp;

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function initFirebase() {
	const firebaseConfig = {
		apiKey: process.env.FIREBASE_KEY,
		authDomain: "kaffka-19bba.firebaseapp.com",
		projectId: "kaffka-19bba",
		storageBucket: "kaffka-19bba.appspot.com",
		appId: process.env.FIREBASE_ID
	};

	app = initializeApp(firebaseConfig);
}