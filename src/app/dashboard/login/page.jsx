"use client";
import styles from "@/src/css/dashboard/login/login.module.css";
import React, { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import UserContext from "./authorization/userContext";

export default function LoginPage() {
  const { user, setUser } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    axios
      .post("/adminapi/user/login", { email: email, password: password })
      .then((response) => {
        if (response.data.ActionType === "OK") {
          const res = JSON.stringify(response.data.data.username)
          setUser(res)
          localStorage.setItem("token", JSON.stringify(response.data[0]));
          router.push("/dashboard");
        } else {
          alert(
            "The email address or the password is not correct. Please check and try again."
          );
        }
        console.log(response.data);
      });
  };

  return (
      <div className={styles.container}>
        <div className={styles.left}>
          <span className={styles.ning}>NING</span>
          <h1 className={styles.h1}>LOGIN TO YOUR DASHBOARD</h1>
          <span className={styles.footer}>© All rights reserved. </span>
        </div>
        <div className={styles.right}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <h2 className={styles.loginHeader}>Login to your account</h2>
            <input
              type="email"
              name="email"
              placeholder="email"
              value={email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="password"
              value={password}
              onChange={handleChange}
            />
            <button type="submit">Login</button>
          </form>
          );
        </div>
      </div>
  );
}
