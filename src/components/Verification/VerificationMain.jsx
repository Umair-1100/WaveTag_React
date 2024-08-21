import { useState } from "react";
import styles from "./verification.module.scss";
import OTPInput, { ResendOTP } from "otp-input-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Buttons from "../DumpComponent/Button";

export const VerificationMain = (buttonProps) => {
  const [OTP, setOTP] = useState("");
  const verifyNavigate = useNavigate("");

  const renderButton = (buttonProps) => {
    return (
      <button className={styles.request_again_button} {...buttonProps}>
        Request Again
      </button>
    );
  };

  const renderTime = (remainingTime) => {
    return <span className={`mr-2 ${styles.request_again_button}`}>{remainingTime}</span>;
  };
  return (
    <section className={styles.section_of_verification}>
      <div className={styles.inner_of_verification}>
        <img
          src="/wavelogo.png"
          alt="waveTag Logo"
          className={styles.wave_logo_verification_blue}
        />
        <h1 className={styles.check_email_text}>Check your email</h1>
        <h3 className={styles.code_sent}>We sent a verification code</h3>
        <p className={styles.after_code_get}>
          Check your email then enter the verification code below
        </p>
        <h2 className={styles.verification_code}>Verification code</h2>
        <div className={styles.parent_of_input_verification}>
          <OTPInput
            value={OTP}
            onChange={setOTP}
            autoFocus
            OTPLength={6}
            otpType="number"
            disabled={false}
            inputClassName="py-4 px-2 bg-transparent border-0 outline-none border-b-2 border-[#A1A1A1]"
          />
        </div>

        {OTP.length === 6 ? (
          <Buttons
            type="button"
            disabled={false}
            onClick={() => verifyNavigate("/home")}
            className={`${styles.verify_email_button} bg-[blue]`}
            label="Verify Email"
          />
        ) : (
          <Buttons
            disabled={true}
            className={styles.verify_email_button}
            label="Verify Email"
          />
        )}
        <p className={styles.not_get_code}>Didn't recieve code?</p>
        <ResendOTP renderTime={renderTime} renderButton={renderButton} />
      </div>
    </section>
  );
};