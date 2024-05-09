export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex h-screen w-full  items-center justify-center">
      {children}
    </div>
  );
}
