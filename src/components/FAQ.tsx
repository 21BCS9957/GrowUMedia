import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "Can I pick only the services I need?",
    answer: "Absolutely. You can choose editing, repurposing, strategy, or any combination that fits your goals."
  },
  {
    id: 2,
    question: "Will this work for new channels too?",
    answer: "100%. Whether you're starting fresh or scaling up, we build systems that match your stage and ambitions."
  },
  {
    id: 3,
    question: "What happens before our free call?",
    answer: "We audit your channel (and analytics if shared) and prepare a custom strategy for you—ready before you even join the call."
  },
  {
    id: 4,
    question: "What if I already have a team?",
    answer: "No problem—we can plug in exactly where you need us, and work alongside your current team seamlessly."
  },
  {
    id: 5,
    question: "Are growth-based partnerships available?",
    answer: "For brands and channels where there's strong mutual alignment, we sometimes structure custom growth partnerships linked to long-term results. We approach this selectively, and discuss it only after a thorough channel and opportunity review."
  },
  {
    id: 6,
    question: "What if it doesn't work?",
    answer: "We either deliver—or we keep optimizing until we do. No fluff. Just results."
  }
];

const FAQItem = ({ 
  faq, 
  isOpen, 
  onToggle 
}: { 
  faq: typeof faqs[0]; 
  isOpen: boolean; 
  onToggle: () => void; 
}) => {
  return (
    <div className="border border-border/50 rounded-2xl overflow-hidden bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-card/50 transition-colors duration-200"
      >
        <h3 className="text-lg font-semibold text-foreground pr-4">
          {faq.question}
        </h3>
        <ChevronDown 
          className={`w-5 h-5 text-primary transition-transform duration-300 flex-shrink-0 ${
            isOpen ? 'rotate-180' : ''
          }`} 
        />
      </button>
      
      <div className={`overflow-hidden transition-all duration-300 ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-6 pb-5">
          <p className="text-muted-foreground leading-relaxed">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/10 to-background" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-secondary/3 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur mb-6">
            <HelpCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Frequently Asked Questions
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-medium leading-tight mb-6">
            <span className="bg-gradient-to-r from-gray-500 via-white to-yellow-400 bg-clip-text text-transparent">
              Got Questions? We've Got Answers
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about working with us and our services.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <FAQItem
                faq={faq}
                isOpen={openItems.includes(faq.id)}
                onToggle={() => toggleItem(faq.id)}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-card/50 backdrop-blur border border-primary/20">
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-semibold mb-1">Still have questions?</h3>
              <p className="text-muted-foreground text-sm">We're here to help you succeed.</p>
            </div>
            <a
              href="https://app.reclaim.ai/m/arsh-growumedia/m"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 whitespace-nowrap"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;