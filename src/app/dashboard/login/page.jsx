"use client";
import styles from "@/src/css/dashboard/login/login.module.css";
import React, { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import UserContext from "./authorization/userContext";
import { loginAuth } from "../../lib/actions";
import { useFormState } from "react-dom";
import { signIn } from "../../lib/authorization/auth";

export default function LoginPage() {
  const [state, formAction] = useFormState(loginAuth, undefined);
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <span className={styles.ning}>NING</span>
        <h1 className={styles.h1}>LOGIN TO YOUR DASHBOARD</h1>
        <span className={styles.footer}>© All rights reserved. </span>
      </div>
      <div className={styles.right}>
        <form
          className={styles.form}
          action={loginAuth}
        >
          <h2 className={styles.loginHeader}>Login to your account</h2>
          <input type="email" name="email" placeholder="email" />
          <input type="password" name="password" placeholder="password" />
          <button>Login</button>
          {state && state}
        </form>
      </div>
    </div>
  );
}
