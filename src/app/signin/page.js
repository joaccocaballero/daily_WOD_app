import Link from "next/link";

export default function signin() {
return (
    <main>
        <div class="navbar bg-trasnsparent">
            <div class="bg-transparent text-xl gap-2 items-center flex justify-center  align-center">
            <Link href={'/'} className="flex gap-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>
                <h1 className="text-lg font-light">Go back</h1>
            </Link>
            </div>
        </div>
        <div className="max-w-md mx-auto my-10">
            <div className="rounded-lg shadow-md text-basic-white p-8">
                <h2 className="text-2xl font-semibold mb-4"></h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-600">Email</label>
                        <input type="email" id="email" name="email" className="input input-bordered mt-1 block w-full bg-transparent" placeholder="Enter your email"/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-600">Password</label>
                        <input type="password" id="password" name="password" className="input input-bordered mt-1 block w-full bg-transparent" placeholder="Enter your password"/>
                    </div>
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <input type="checkbox" id="remember" name="remember" className="mr-2"/>
                            <label htmlFor="remember" className="text-gray-600">Remember me</label>
                        </div>
                        <a href="#" className="text-blue-600 hover:underline">Forgot your password?</a>
                    </div>
                    <button type="submit" className="w-full btn glass text-basic-white py-2 text-xl px-4 rounded">Sign in</button>
                </form>
            </div>
        </div>
    </main>
);
}