import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function ThemeButton() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
            setIsDark(true);
            document.documentElement.classList.add("dark");
        } else {
            setIsDark(false);
            localStorage.setItem("theme", "light");
        }
    }, []);

    const toggleTheme = () => {
        if (isDark) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDark(!isDark);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDark(!isDark);
        }
    };

    return (
        <div>
            <button
                onClick={toggleTheme}
                className={cn(
                    "fixed max-sm:hidden top-5 right-5",
                    "z-50 p-2 rounded-full transition-colors duration-300"
                )}>
                {isDark ? (
                    <Sun className="h-6 w-6 text-yellow-300" />
                ) : (
                    <Moon className="h-6 w-6 text-blue-900" />
                )}
            </button>
        </div>
    );
}
