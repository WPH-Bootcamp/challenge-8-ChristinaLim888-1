import Container from "./Container";
import Logo from "@/components/layout/logo";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-8">

      <Container>

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

          <Logo />

          <p className="text-zinc-500">
            Copyright ©2025 Movie Explorer
          </p>

        </div>

      </Container>

    </footer>
  );
}