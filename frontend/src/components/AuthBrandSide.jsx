import {MessageSquare} from "lucide-react";

const AuthBrandSide = () => {
    return (
        <div className="hidden lg:flex items-center justify-center bg-base-200 p-12 relative">
            <div className="max-w-md text-center space-y-6">
                <h2 className="text-3xl font-bold">People On ChatNet</h2>
                <p className="text-base-content/70">
                    “This platform helped me stay in touch with my friends and discover new communities. It’s fast, simple, and delightful.”
                </p>
                <div className="flex items-center justify-center gap-3">
                    <img
                        src="https://randomuser.me/api/portraits/women/79.jpg"
                        alt="User"
                        className="w-10 h-10 rounded-full border border-primary"
                    />
                    <div className="text-left">
                        <p className="font-medium">Aarushi Mehta</p>
                        <p className="text-xs text-base-content/50">Designer @ Zilla</p>
                    </div>
                </div>
            </div>

            {/* ✅ Bottom-Centered Text */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-center text-base-content/50 space-y-1">
                <div className={"flex items-center justify-center gap-2 text-primary"}>
                    <MessageSquare className="size-4 text-primary" />
                    <h1 className="text-xl font-medium">Join Our Community</h1>
                </div>
                <span className="text-l">© ChatNet</span>
            </div>
        </div>
    );
};

export default AuthBrandSide;
