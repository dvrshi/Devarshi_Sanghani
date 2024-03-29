'use client'
import { useState } from "react";
import styles from "./Links.module.css"
import NavLink from "./navlink/NavLink";
const Links = () => {
    const links = [
        {
            title: "Homepage",
            path: "/",
        },
        {
            title: "Experience",
            path: "/experience",
        },
        {
            title: "Projects",
            path: "/projects",
        },
        {
            title: "Skills",
            path: "/skills",
        },
    ];

    return (
        <div className={styles.container}>
            <div className={styles.links}>
                {links.map((link) => (
                    <NavLink item={link} key={link.title} />
                ))}
                
            </div>
        </div>
    )
};
export default Links;