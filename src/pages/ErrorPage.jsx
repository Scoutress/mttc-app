const ErrorPage = () => {
  return (
    <div className="container text-center py-5">
      <h1 className="display-1 text-dark mb-4">404</h1>
      <p className="h5 text-secondary mb-3">
        Oi! Puslapis, kurio ieškote, neegzistuoja.
      </p>
      <p className="text-muted mb-4">
        Atrodo, kad nuoroda, kurią paspaudėte, gali būti sugadinta arba puslapis
        buvo pašalintas. Patikrinkite URL arba grįžkite į pagrindinį puslapį.
      </p>
      <a href="/repairPage" className="btn btn-primary">
        Grįžti į pagrindinį puslapį
      </a>
    </div>
  );
};

export default ErrorPage;
