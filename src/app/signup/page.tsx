import Image from "next/image";
import Link from "next/link";
import { SignupForm } from "@/components/auth/SignupForm";
import { Logo } from "@/components/Logo";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function SignupPage() {
    const heroImage = PlaceHolderImages.find(img => img.id === 'signup-hero');

    return (
        <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2 xl:min-h-screen">
            <div className="flex items-center justify-center py-12">
                <div className="mx-auto grid w-[350px] gap-6">
                    <div className="grid gap-2 text-center">
                        <Link href="/" className="flex justify-center items-center gap-2 mb-4">
                            <Logo className="size-8 text-primary" />
                            <span className="text-2xl font-bold">EmailEducate</span>
                        </Link>
                        <h1 className="text-3xl font-bold">Create an account</h1>
                        <p className="text-balance text-muted-foreground">
                            Enter your information to start your learning journey
                        </p>
                    </div>
                    <SignupForm />
                    <div className="mt-4 text-center text-sm">
                        Already have an account?{" "}
                        <Link href="/dashboard" className="underline text-primary link-animated relative">
                            Log in
                        </Link>
                    </div>
                </div>
            </div>
            <div className="hidden bg-muted lg:block relative">
                {heroImage && (
                    <Image
                        src={heroImage.imageUrl}
                        alt={heroImage.description}
                        fill
                        className="object-cover"
                        data-ai-hint={heroImage.imageHint}
                    />
                )}
                 <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            </div>
        </div>
    )
}
