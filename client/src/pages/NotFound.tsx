import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Home } from "lucide-react";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  const handleGoHome = () => {
    setLocation("/");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[var(--background)]">
      <Card className="w-full max-w-lg mx-4 shadow-[0_18px_40px_rgba(20,44,34,0.12)] border border-[var(--gold)]/25% bg-[var(--background)]">
        <CardContent className="pt-8 pb-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-[var(--gold)]/15 rounded-full" />
              <AlertCircle className="relative h-16 w-16 text-[var(--gold-deep)]" />
            </div>
          </div>

          <h1 className="text-4xl font-bold text-[var(--foreground)] mb-2">404</h1>

          <h2 className="text-xl font-semibold text-[var(--foreground)] mb-4">
            Página não encontrada
          </h2>

          <p className="text-[var(--muted-foreground)] mb-8 leading-relaxed">
            Desculpe, a página que você procura não existe.
            <br />
            Ela pode ter sido movida ou removida.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              onClick={handleGoHome}
              className="bg-[var(--leonard)] hover:bg-[var(--leonard-dark)] text-white px-6 py-2.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <Home className="w-4 h-4 mr-2" />
              Voltar ao início
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
