import React, { useState } from "react";

function Login({ setLoggedInFlag }) {
  async function handleSignIn() {
    const payload = JSON.stringify({
      username: email,
      password
    });

    await fetch(loginUrl, {
      method: "post",
      body: payload,
      headers: { "Content-Type": "application/json" }
    })
      .then(result => result.json())
      .then(async result => {
        console.log(reuslt);
      })
      .catch(error => {
        console.log("An error occurred");
        setLoggedInFlag(true);
      });

    setLoggedInFlag(true);
  }
}

export default Login;
