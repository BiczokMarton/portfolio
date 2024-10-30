import  Navbar  from '@portfolio-frontend/components/Navbar/Navbar.component';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="dark:bg-black">
      <Navbar />
      {children}
    </div>
  );
}
