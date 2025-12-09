const Footer = () => {
  return (
    <footer className="py-8 bg-foreground text-primary-foreground/70">
      <div className="container text-center">
        <p className="font-heading text-xl text-primary-foreground mb-2">
          Camila Flores
        </p>
        <p className="text-sm">
          © {new Date().getFullYear()} Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;
