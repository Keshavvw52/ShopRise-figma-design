import Image from "next/image";
import Link from "next/link";
import { AuthDivider } from "@/components/ui/AuthDivider";
import { AuthCheckbox } from "@/components/ui/AuthCheckbox";
import { Button } from "@/components/ui/Button";
import { GoogleAuthButton } from "@/components/ui/GoogleAuthButton";
import { Input } from "@/components/ui/Input";
import { PasswordInput } from "@/components/ui/PasswordInput";
import { AuthShell } from "@/components/layout/AuthShell";

/** Login page — Figma Login frame (47:383) */
export function LoginContent() {
  return (
    <AuthShell panelImage="/images/auth/login-panel.png">
      <div className="flex flex-col gap-[25px]">
        <div className="flex flex-col items-center gap-[15px]">
          <div className="flex flex-col items-center gap-5">
            <div className="flex flex-col items-center gap-[15px]">
              <Image
                src="/icons/user.svg"
                alt=""
                width={30}
                height={30}
                aria-hidden
              />
              <h1 className="text-2xl font-semibold text-dark">Welcome back</h1>
            </div>
            <p className="text-sm text-dark">
              Don&apos;t have account?{" "}
              <Link
                href="/signup"
                className="font-medium text-coral underline"
              >
                Sign up here
              </Link>
            </p>
          </div>

          <GoogleAuthButton label="Sign in with Google" />
          <AuthDivider />

          <div className="flex flex-col gap-[15px]">
            <Input
              label="Email"
              type="email"
              defaultValue="johndoe@gmail.com"
            />
            <div className="flex flex-col gap-2.5">
              <PasswordInput label="Password" />
              <div className="flex w-[330px] items-center justify-between">
                <AuthCheckbox label="Remember me" />
                <Link
                  href="/forgot-password"
                  className="text-sm font-medium text-navy underline"
                >
                  Forgot password
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Link href="/home-after-connect">
          <Button type="button" className="w-[330px]">
            Sign in
          </Button>
        </Link>
      </div>
    </AuthShell>
  );
}
