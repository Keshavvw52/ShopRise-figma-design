import Image from "next/image";
import Link from "next/link";
import { AuthDivider } from "@/components/ui/AuthDivider";
import { Button } from "@/components/ui/Button";
import { GoogleAuthButton } from "@/components/ui/GoogleAuthButton";
import { Input } from "@/components/ui/Input";
import { PasswordInput } from "@/components/ui/PasswordInput";
import { AuthShell } from "@/components/layout/AuthShell";

/** Sign up page — Figma Sign up frame (52:457) */
export function SignupContent() {
  return (
    <AuthShell panelImage="/images/auth/signup-panel.png">
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
              You have account?{" "}
              <Link
                href="/login"
                className="font-medium text-coral underline"
              >
                Sign in here
              </Link>
            </p>
          </div>

          <GoogleAuthButton label="Sign up with Google" />
          <AuthDivider />

          <div className="flex flex-col gap-[15px]">
            <Input label="First name" defaultValue="John" />
            <Input label="Last name" defaultValue="DOE" />
            <Input
              label="Email"
              type="email"
              defaultValue="johndoe@gmail.com"
            />
            <div className="flex flex-col gap-2.5">
              <PasswordInput label="Password" />
              <div className="flex w-[330px] justify-end">
                <button
                  type="button"
                  className="text-sm font-medium text-navy underline"
                >
                  Indication
                </button>
              </div>
            </div>
          </div>
        </div>

        <Button type="button" className="w-[330px]">
          Register
        </Button>
      </div>
    </AuthShell>
  );
}
