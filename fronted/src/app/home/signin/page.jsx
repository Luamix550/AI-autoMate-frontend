import Image from 'next/image';

export default function SignInPage() {

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
        <main className="h-screen flex items-center justify-center">
            <div>
                <Image
                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                    src="/logo_deff.png"
                    alt="autoMate>> Logo"
                    width={300}
                    height={7}
                    priority
                />
                <h1 className="text-4xl text-purple-700 font-bold mb-4">Sign In</h1>
                <form className="flex flex-col gap-4">
                    <input type="email" placeholder="Email" className="border-2 border-gray-300 p-2" />
                    <input type="password" placeholder="Password" className="border-2 border-gray-300 p-2" />
                    <button className="bg-purple-900 hover:bg-purple-700 text-white p-2 rounded-md">Sign In</button>
                </form>
            </div>
        </main>
    )
}