const ClientShowcase = () => {
  const clients = [
    { name: "Athena DAO", logo: "/Company Logo/Athena DAO.png" },
    { name: "Cerebrum DAO", logo: "/Company Logo/cerebrum-dao-1.png" },
    { name: "Haynow", logo: "/Company Logo/Haynow.png" },
    { name: "Client 4", logo: "/Company Logo/image (4).png" },
    { name: "Client 5", logo: "/Company Logo/logowhite-2.svg" },
    { name: "Molecule", logo: "/Company Logo/molecule.png" },
    { name: "Unchained Podcast", logo: "/Company Logo/Unchained-Podcast-Artwork-2000x2000-1.png" },
    { name: "Vista Social", logo: "/Company Logo/Vistasocial.png" },
  ];

  return (
    <section className="py-16 bg-background/50 backdrop-blur-sm border-y border-border">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We've helped these amazing companies scale their YouTube presence and build lasting audiences
          </p>
        </div>
        
        {/* Auto-scrolling logos */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-12 items-center">
            {/* First set of logos */}
            {clients.map((client, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 w-32 h-16 flex items-center justify-center transition-all duration-300 opacity-80 hover:opacity-100 hover:scale-105"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {clients.map((client, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 w-32 h-16 flex items-center justify-center transition-all duration-300 opacity-80 hover:opacity-100 hover:scale-105"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientShowcase;