import Image from "next/image";
import Link from "next/link";
import { AuthCheckbox } from "@/components/ui/AuthCheckbox";
import { Button } from "@/components/ui/Button";
import { PasswordInput } from "@/components/ui/PasswordInput";

/** Forgot password page — Figma Forgot password frame (367:5351) */
export function ForgotPasswordContent() {
  return (
    <div className="relative flex min-h-screen flex-col bg-white">
      <Link
        href="/login"
        className="absolute top-[17px] left-[25px]"
        aria-label="Back to login"
      >
        <Image
          src="/icons/arrow-back.svg"
          alt=""
          width={24}
          height={24}
          aria-hidden
        />
      </Link>

      <div className="mx-auto flex w-full max-w-[500px] flex-1 flex-col justify-center px-6 py-24">
        <div className="flex flex-col gap-[25px]">
          <div className="flex flex-col items-center gap-[15px]">
            <div className="flex flex-col items-center gap-[5px] text-center">
              <h1 className="text-2xl font-semibold text-dark">
                Change your password
              </h1>
              <p className="text-sm text-dark">Create a new password</p>
            </div>

            <div className="flex w-full flex-col gap-[15px]">
              <PasswordInput label="New password" className="max-w-none" />
              <PasswordInput
                label="Confirm your password"
                className="max-w-none"
              />
              <AuthCheckbox label="Remember me" />
            </div>
          </div>

          <Button type="button" className="w-full">
            Change password
          </Button>
        </div>
      </div>
    </div>
  );
}
