'use client'
import { Html, Head, Main, NextScript } from "next/document";
import { useEffect } from "react"

export default function Document() {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, [])
    return (
        null
    );
}