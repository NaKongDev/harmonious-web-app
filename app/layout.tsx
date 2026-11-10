import "./globals.css";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-dvh w-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
