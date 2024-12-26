export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col">
      Root
      <main className="wrapper flex-1">{children}</main>
    </div>
  );
}
