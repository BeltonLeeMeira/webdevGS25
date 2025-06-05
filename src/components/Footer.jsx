function Footer() {
  return (
<footer className="fixed bottom-0 w-full bg-gray-900 text-white p-6 shadow-inner z-50">
      <div className="container mx-auto text-center text-sm">
        &copy; {new Date().getFullYear()} AlertaFácil - Todos os direitos reservados.
      </div>
    </footer>
  );
}

export default Footer;
