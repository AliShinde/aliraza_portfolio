import { Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useToast } from "../hooks/use-toast";

export default function ContactSection() {
    const form = useRef();
    const { toast } = useToast();

    const submitMsgForm = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE,
                import.meta.env.VITE_EMAILJS_TEMPLATE,
                form.current,
                {
                    publicKey: import.meta.env.VITE_EMAILJS_API,
                }
            )
            .then(
                () => {
                    toast({ title: "Email sent successfully!" });
                },
                (error) => {
                    console.log(error);
                    toast({
                        title: "Unable to send email, Please check email id",
                    });
                }
            );
    };

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary">Touch</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">
                            Contact Information
                        </h3>
                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Email</h4>
                                    <a
                                        href="mailto:alishinde21@gmail.com"
                                        className="text-muted-foreground hover:text-primary transition-colors">
                                        alishinde21@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Phone className="h-6 w-6" />
                            </div>
                            <div>
                                <h4 className="font-medium">Phone</h4>
                                <a
                                    href="tel:+18647227967"
                                    className="text-muted-foreground hover:text-primary transition-colors">
                                    +1 (864) 722-7967
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <MapPin className="h-6 w-6" />
                            </div>
                            <div>
                                <h4 className="font-medium">Location</h4>
                                <a className="text-muted-foreground hover:text-primary transition-colors">
                                    Clemson, SC, USA
                                </a>
                            </div>
                        </div>
                        <div className="pt-6">
                            <h4 className="font-medium mb-4">
                                Connect with me
                            </h4>
                            <div className="flex justify-center">
                                <a
                                    href="https://www.linkedin.com/in/aliraza-shinde-bb7829201/"
                                    target="_blank">
                                    <Linkedin />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6">
                            Send a message!
                        </h3>

                        <form
                            ref={form}
                            onSubmit={submitMsgForm}
                            className="space-y-6">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium mb-2">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus: ring-2 focus:ring-primary"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium mb-2">
                                    Your Email
                                </label>
                                <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus: ring-2 focus:ring-primary"
                                    placeholder="JohnDoe@example.com"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="msg"
                                    className="block text-sm font-medium mb-2">
                                    Your Message
                                </label>
                                <textarea
                                    id="msg"
                                    name="msg"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus: ring-2 focus:ring-primary resize-none"
                                    placeholder="Hello, how are you..."
                                />
                            </div>
                            <button
                                type="submit"
                                className={cn(
                                    "cosmic-button w-full flex items-center justify-center gap-2"
                                )}>
                                Send Message
                                <Send />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
