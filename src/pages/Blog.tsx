import { ArrowLeft, Calendar, Clock, User, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const blogPosts = [
  {
    id: 1,
    title: "Steve Bartlett's Million-Dollar Meta Ads A/B Testing Strategy",
    excerpt: "Discover how Steven Bartlett uses Meta ads to test podcast thumbnails before publishing-a simple strategy that removes guesswork and compounds growth over time.",
    author: "GUM Team",
    date: "Jan 10, 2026",
    readTime: "11 min read",
    category: "Strategy",
    image: "/B.png",
    tags: ["Strategy", "Planning", "Content Calendar", "Growth"],
    fullContent: `Inside Steven Bartlett's Ad Library: The Smart A/B Testing Strategy Behind Podcast Growth

When most founders think about ads, they think sales. When Steven Bartlett thinks about ads, he thinks leverage.

One of the most underrated growth insights hidden inside Steven Bartlett's ad library isn't about targeting, budgets, or ROAS. It's about how he uses Meta ads to test podcast thumbnails before publishing episodes.

This single tactic quietly removes guesswork, de-risks content decisions, and compounds growth over time.

In this blog, we'll break down:
• What Steven Bartlett is actually doing
• Why it works so well for podcasts & YouTube
• How SaaS and serious businesses can replicate it
• How we use this framework to grow channels predictably

The Observation: Fifty Small-Budget Campaigns, One Winner

Buried inside Steven Bartlett's ad library is a deceptively simple pattern:

Multiple small-budget ad campaigns, each promoting a different thumbnail for the same upcoming podcast episode.

No massive spend. No "let's see how it performs organically." No ego-based creative decisions.

Instead:
• ~50 thumbnail variations
• Each run with a small test budget
• Optimized purely for CTR (Click-Through Rate)
• The highest-performing thumbnail wins
• That winner becomes the official podcast thumbnail

This happens before the episode is published.

That's the key.

Why This Is a Million-Dollar Insight (Disguised as a Small Tactic)

Most creators and brands do this backward.

They:
• Publish content
• Hope the thumbnail works
• Wait for YouTube's algorithm to give feedback
• Blame the platform when it doesn't perform

Steven Bartlett flips the order.

He lets the market decide first, using paid distribution as a feedback engine.

The Real Innovation Isn't Ads

It's decision-making at scale.

Why CTR Is the Only Metric That Matters (At This Stage)

When testing thumbnails, Steven isn't optimizing for:
• Conversions
• Watch time
• Retention
• Subscribers

He's optimizing for one thing only: 👉 Which image stops the scroll?

CTR answers one critical question:

Would a cold audience choose this over everything else in their feed?

If a thumbnail can't win attention in a paid environment, it has no chance in organic.

Paid Ads as a Content Testing Lab

Think about what Meta ads actually give you:
• Massive, real-world audience samples
• Fast feedback loops
• Clean A/B testing
• Zero reliance on algorithms

Steven uses Meta ads not as a growth channel-but as a research tool.

That's a mindset shift most brands miss.

Paid Traffic = Truth Serum

Organic platforms are noisy:
• Subscribers bias results
• Algorithmic boosts distort reality
• Early engagement skews perception

Paid ads strip all of that away.

Cold audience. Pure signal.

Why This Works Especially Well for Podcasts & YouTube

Podcasts and YouTube live or die by:
• Titles
• Thumbnails
• First impressions

You can have:
• World-class guests
• Incredible insights
• Perfect production

And still fail-because nobody clicks.

Steven Bartlett understands that distribution beats depth if depth is never discovered.

The Hidden Advantage: Consistency at Scale

Here's the part most people overlook.

Steven doesn't just do this once.

He does it:
• Repeatedly
• Systematically
• As a process, not a hack

Over time, this creates:
• A massive internal dataset of what works
• Pattern recognition across faces, colors, emotions
• Predictability in future creative decisions

This is how taste becomes data-backed.

How SaaS & B2B Brands Can Apply This Strategy

This strategy is not limited to podcasts.

We apply the same framework for:
• YouTube channels
• Founder-led content
• SaaS education videos
• Product explainers
• GTM content

Example: SaaS YouTube Growth

Instead of guessing:
• Which video title will work
• Which thumbnail will convert
• Which positioning resonates

We test:
• 10–30 thumbnails
• Across cold, ICP-aligned audiences
• With minimal spend
• Before content becomes "final"

The result?
• Higher launch-day performance
• Faster algorithm pickup
• Lower CAC on distribution
• Stronger compounding growth

Why Small Budgets Make This Strategy Even Smarter

This isn't about burning cash.

Each test campaign:
• Uses a tiny budget
• Runs for a short duration
• Exists purely to collect signal

Even $200–$500 per test can reveal:
• Emotional pull
• Curiosity gaps
• Visual hierarchy effectiveness

You're paying for clarity, not impressions.

The Psychology Behind Why This Works

At its core, this strategy respects one truth:

Audiences are better editors than creators.

No internal debate beats:
• Thousands of real humans voting with clicks

Steven removes:
• Creative bias
• Founder ego
• Team politics

And replaces it with:
• Market feedback
• Evidence-based decisions

That's elite execution.

Why Most Brands Don't Do This (But Should)

Despite how effective this is, most brands won't adopt it because:
• It feels "extra"
• It requires discipline
• It exposes bad ideas early
• It prioritizes systems over vibes

But this is exactly why it works.

High performers don't rely on hope. They rely on process.

Our Take as a YouTube Growth Agency

At our agency, we don't see YouTube as a content platform.

We see it as:
• A distribution engine
• A brand trust builder
• A long-term CAC reducer

Steven Bartlett's ad testing strategy aligns perfectly with how serious companies should approach YouTube:
• Test first
• Publish second
• Scale what's proven

This is how YouTube becomes a revenue channel, not a vanity play.

Final Thoughts: Growth Is Engineered, Not Discovered

Steven Bartlett didn't stumble into success.

He engineered it:
• With systems
• With feedback loops
• With intelligent use of paid media

Testing thumbnails with small-budget ad campaigns might look simple-but it reflects a much deeper philosophy:

Don't guess. Measure. Then scale.

If you're building a podcast, a YouTube channel, or a serious brand-this is the level of thinking required to win.

Want to Apply This Strategy to Your YouTube Channel?

We help ambitious brands:
• Turn YouTube into a predictable growth engine
• Use paid distribution as a testing layer
• Increase conversions with significantly lower CAC

Book a free strategy session and we'll show you exactly how to apply this framework to your business.`
  },
  {
    id: 2,
    title: "Film One Longform Video to Get a Dozen Clippable Moments",
    excerpt: "Stop filming endless content. Learn how one strong longform video becomes the foundation for dozens of clips that attract new fans while satisfying your existing audience.",
    author: "GUM Team",
    date: "December 12, 2024",
    readTime: "10 min read",
    category: "Content",
    image: "/C.png",
    tags: ["Scripting", "Engagement", "Content", "Retention"],
    fullContent: `The One-Video Strategy That Builds Both Discovery and Loyalty

Clips attract new fans. Longform satisfies old fans.

Most creators think growth requires constant filming, endless posting, and chasing every new format. In reality, sustainable growth comes from focus. It starts with filming one strong longform video that becomes the foundation for everything else.

Why Longform Is Your Content Foundation

A well-crafted longform video is where depth lives. It's where you can explain ideas fully, share real stories, and build trust with the people who already know you. This format isn't designed for quick hits or viral spikes. It's designed to reward attention, to make your existing audience feel understood, and to give them a reason to stay connected to your brand over time.

Think about the creators you follow religiously. They're not the ones posting random clips all day. They're the ones who consistently deliver substantial content that makes you think, "I need to see what they say about this topic." That's the power of longform done right.

The problem is most creators approach longform backward. They think longer automatically means better. But length without substance is just noise. The magic happens when you pack genuine value into every minute, creating natural moments that deserve their own spotlight.

Finding Gold in Your Content

Inside that single longform recording are dozens of natural moments that deserve their own life. These aren't forced highlights or scripted hooks. They're genuine reactions, clear insights, emotional beats, and sharp lines that stand on their own. When the longform content is strong, these moments appear naturally without trying too hard.

Here's what to look for when reviewing your footage:

• Moments where you explain something complex in simple terms
• Times when you share a personal story or failure
• Instances where you challenge common thinking
• Reactions to surprising information or results
• Clear, actionable advice that stands alone
• Emotional peaks where your passion shows through

The best clips aren't manufactured. They're discovered. They're the moments where you forgot you were recording and just spoke from experience.

How Clips Create New Fans

Those clips become your growth engine. Short-form content travels faster and reaches people who have never heard of you before. A quick clip lowers the barrier to entry. It doesn't ask for commitment, it simply creates interest. Someone scrolling may never click a 40-minute video, but a powerful 20-second moment can stop them instantly.

This is how new fans are created. Clips introduce your thinking, your tone, and your value in a way that feels effortless. If the moment resonates, curiosity follows. That curiosity naturally leads people back to the full video, where they can explore the idea in depth.

The key is understanding what makes a clip work:

• It delivers value without requiring context
• It creates an emotional response (surprise, agreement, curiosity)
• It showcases your unique perspective or expertise
• It leaves viewers wanting to know more
• It feels authentic, not overly produced

A great clip doesn't summarize your video. It gives people a taste of your thinking and makes them hungry for the full meal.

Where Loyalty Gets Built

Longform then completes the cycle. It fulfills the promise made by the clip. It provides context, clarity, and substance. This is where casual viewers turn into subscribers, and subscribers turn into loyal supporters. Longform doesn't chase attention; it earns loyalty.

When someone clicks through from a clip to your full video, they're making an investment. They're giving you their time based on a 30-second preview. If your longform content delivers on that promise, you've earned something more valuable than a view. You've earned trust.

This is where most creators fail. They create clips that overpromise and longform that underdelivers. The clip shows their best moment, but the full video is 80% filler. That's a broken promise, and broken promises kill channels.

Instead, your longform should feel like the clip was just the appetizer. Every section should add value. Every story should build toward something meaningful. Every minute should justify the viewer's decision to stay.

The Compounding Effect

When done right, this approach creates a compounding system. Clips attract new fans. Longform satisfies old fans. Both formats work together instead of competing with each other. One recording fuels discovery, trust, and distribution across platforms.

Here's how the cycle works:

1. You create one substantial longform video
2. You extract 5-10 natural clips from that content
3. Clips drive discovery across short-form platforms
4. Interested viewers click through to the full video
5. Quality longform content converts viewers into subscribers
6. Subscribers anticipate your next longform video
7. The cycle repeats with each new piece of content

This system gets stronger over time. As your audience grows, each new longform video has a larger base of people ready to engage. As you create more clips, you have more chances for discovery. The two formats feed each other.

Working Smarter, Not Harder

This isn't about working harder or posting more. It's about working smarter. Film once. Extract the best moments. Let short-form bring people in, and let longform give them a reason to stay.

Most creators exhaust themselves trying to feed multiple content machines. They film separate content for YouTube, TikTok, Instagram, and Twitter. They burn out trying to be everywhere at once.

The one-video strategy flips this approach. You focus your energy on creating one piece of exceptional content, then you multiply its impact across platforms. Instead of diluting your effort across formats, you concentrate it into something substantial, then extract maximum value from that investment.

The result? Better content, less stress, and more sustainable growth.

Making It Work for Your Channel

Start with your next longform video. Before you hit record, ask yourself:

• What's the one big idea I want to explore?
• What stories or examples will make this idea stick?
• What moments might naturally become clips?
• How can I structure this to reward both quick viewers and deep watchers?

During filming, don't overthink the clips. Focus on delivering value in the longform content. The clip-worthy moments will emerge naturally when you're genuinely engaged with your topic.

After filming, review your content with fresh eyes. Look for moments that made you lean forward, laugh, or think differently. Those are your clips. Extract them, but always point back to the full video for complete context.

Remember: clips are the trailer, longform is the movie. Both need to be worth the viewer's time, but they serve different purposes in your content ecosystem.

The creators who master this balance don't just grow faster. They build something more valuable than viral moments. They build lasting relationships with people who genuinely care about their work.

That's the difference between chasing views and building an audience. Views are temporary. Audiences are forever.`
  },
  {
    id: 3,
    title: "How to Approach Viral Content Marketing",
    excerpt: "The secret to viral content isn't luck-it's starting with a title that makes skipping feel like a mistake, then building content that delivers on that promise.",
    author: "GUM Team",
    date: "December 10, 2025",
    readTime: "15 min read",
    category: "Marketing",
    image: "/d.png",
    tags: ["Viral", "Content Marketing", "Strategy", "Growth"],
    fullContent: `How to Approach Viral Content Marketing

Viral content marketing doesn't start with the post - it starts with the title. The title is the first filter. If the title doesn't trigger curiosity, relevance, or emotion, the content never gets a chance to perform. That's why the smartest creators and brands write the title first, then shape the content to deliver on that promise.

The Title Is Everything

A strong viral title does one thing extremely well: it makes the reader feel like skipping it would be a mistake. It signals value instantly. It hints at an outcome, a lesson, or a surprising insight without giving everything away. The goal isn't clickbait, it's tension - the right amount of unanswered "why" that pulls people in.

Think about the titles that made you stop scrolling recently. They probably shared common elements:

• They promised something specific and valuable
• They created curiosity without being vague
• They felt urgent or timely
• They spoke directly to your situation or interests
• They hinted at a contrarian or surprising take

The difference between a viral title and clickbait is simple: viral titles make promises they can keep. Clickbait overpromises and underdelivers. When your content matches your title's promise, you build trust. When it doesn't, you burn it.

Building Content That Delivers

Once the title is locked, the content becomes much easier to write. Every sentence exists to justify the click. The opening lines should immediately confirm that the reader made the right choice. This is where most content fails. People click, hesitate for two seconds, and leave. Viral content earns attention fast and then keeps it by staying focused on the core idea promised in the title.

Your opening should do three things:

1. Acknowledge why the reader clicked
2. Confirm they're in the right place
3. Set up what's coming next

For example, if your title promises "The Marketing Strategy That Doubled Our Revenue in 90 Days," your opening shouldn't start with background about your company. It should jump straight into the strategy, then provide context as needed.

The Art of Simple, Not Shallow

Great viral content is simple, not shallow. It takes a clear idea and expresses it in a way that feels obvious in hindsight. There's no unnecessary padding, no trying to sound smart. Each paragraph pushes the story or insight forward, making it easy to skim while still rewarding a full read.

Simple doesn't mean dumbed down. It means accessible. The best viral content takes complex ideas and makes them understandable without losing their power. It uses:

• Short sentences that pack punch
• Concrete examples over abstract concepts
• Stories that illustrate points
• Clear transitions between ideas
• Language that feels conversational, not academic

When someone finishes reading your content, they should feel smarter, not confused. They should be able to explain your main point to someone else in their own words.

Design for Distribution

Distribution is baked into the writing. Viral content is structured so individual lines, examples, or insights can stand alone as clips, quotes, or posts. The best pieces feel like a collection of shareable moments wrapped inside one cohesive narrative.

As you write, ask yourself:

• Which sentences could work as standalone tweets?
• What examples might become their own posts?
• Which insights deserve to be highlighted or quoted?
• How can I structure this so people can easily share specific parts?

This isn't about breaking up your content artificially. It's about recognizing that viral content spreads in pieces. Someone might share one insight, another person might quote a different section, and a third might turn your example into their own post. Plan for this.

Respect Your Audience

Most importantly, viral content respects the audience. It doesn't talk down, over-explain, or chase trends blindly. It feels timely, human, and opinionated. People don't share content because it's perfect - they share it because it says something they wish they had said themselves.

Respecting your audience means:

• Not explaining things they already know
• Giving them credit for being intelligent
• Sharing genuine insights, not recycled advice
• Taking a clear position, not fence-sitting
• Being honest about what works and what doesn't

When you respect your audience's intelligence and time, they notice. They engage more deeply, share more freely, and come back for more.

The Psychology of Sharing

Understanding why people share content is crucial to creating viral material. People share for several reasons:

• To look smart or informed to their network
• To start conversations about topics they care about
• To support ideas or creators they believe in
• To save something for later reference
• To help others who might benefit

Your content should make sharing feel natural and beneficial. When someone shares your piece, they should feel good about what it says about them. They should feel confident that their network will thank them for the share, not ignore it.

Making Viral Intentional

When you approach viral content marketing this way, growth stops feeling random. You're not hoping something goes viral. You're designing content with intention, starting from a strong title and building everything else to support it.

This doesn't guarantee virality - nothing can. But it dramatically increases your odds. More importantly, it ensures that when your content does spread, it spreads for the right reasons and attracts the right audience.

The Process in Practice

Here's how to apply this approach:

1. Start with the title. Write 10-20 options before choosing one.
2. Test the title with a small group or on a smaller platform first.
3. Outline your content to deliver on the title's promise.
4. Write with sharing in mind - create quotable moments.
5. Edit ruthlessly. Remove anything that doesn't serve the core idea.
6. Review: Does this content justify the click? Would you share it?

Remember, viral content isn't about tricks or hacks. It's about creating something genuinely valuable and presenting it in a way that makes people want to engage and share.

The Long Game

Building a reputation for creating viral content takes time. Each piece you publish either builds or erodes trust with your audience. Focus on consistency over individual hits. When people know your content is worth their time, they'll give you the benefit of the doubt on future pieces.

The creators and brands that consistently produce viral content aren't lucky. They're systematic. They understand their audience, respect their attention, and deliver value consistently.

Write the title first. Make it impossible to ignore. Then write content that earns the attention it attracts.

That's how viral content marketing really works.`
  }
];

const categories = ["All", "Strategy", "Content", "SEO"];

// Modal Component
const ArticleModal = ({ post, isOpen, onClose }: { 
  post: typeof blogPosts[0] | null; 
  isOpen: boolean; 
  onClose: () => void; 
}) => {
  if (!isOpen || !post) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-4xl max-h-[90vh] mx-4 bg-background border border-border rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-border p-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="px-3 py-1 bg-primary/10 rounded-full text-sm font-medium text-primary">
              {post.category}
            </span>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="h-8 w-8 p-0"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-120px)]">
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">{post.title}</h1>
            
            <div className="prose prose-lg max-w-none">
              {post.fullContent.split('\n').map((paragraph, index) => {
                if (paragraph.trim() === '') return <br key={index} />;
                
                if (paragraph.startsWith('•')) {
                  return (
                    <div key={index} className="flex items-start gap-2 mb-2">
                      <span className="text-primary mt-2">•</span>
                      <span>{paragraph.substring(1).trim()}</span>
                    </div>
                  );
                }
                
                if (paragraph.includes('👉')) {
                  return (
                    <p key={index} className="mb-4 font-semibold text-primary">
                      {paragraph}
                    </p>
                  );
                }
                
                // Check if it's a heading (all caps or ends with colon)
                if (paragraph === paragraph.toUpperCase() && paragraph.length > 10) {
                  return (
                    <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
                      {paragraph}
                    </h2>
                  );
                }
                
                if (paragraph.endsWith(':') && paragraph.length < 100) {
                  return (
                    <h3 key={index} className="text-xl font-semibold mt-6 mb-3">
                      {paragraph}
                    </h3>
                  );
                }
                
                return (
                  <p key={index} className="mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                );
              })}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-border">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-secondary/50 rounded-full text-sm text-secondary-foreground"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const BlogCard = ({ 
  post, 
  onReadMore 
}: { 
  post: typeof blogPosts[0]; 
  onReadMore: (post: typeof blogPosts[0]) => void; 
}) => {
  return (
    <article className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500">
      <div className="relative overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-primary/90 backdrop-blur-sm rounded-full text-xs font-medium text-primary-foreground">
            {post.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
          {post.title}
        </h3>
        
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-secondary/50 rounded-md text-xs text-secondary-foreground"
            >
              #{tag}
            </span>
          ))}
        </div>
        
        <Button 
          variant="outline" 
          className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
          onClick={() => onReadMore(post)}
        >
          Read More
        </Button>
      </div>
    </article>
  );
};

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReadMore = (post: typeof blogPosts[0]) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPost(null);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="pt-20 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.history.back()}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </div>
          
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              GUM{" "}
              <span className="bg-gradient-to-r from-gray-500 via-white to-yellow-400 bg-clip-text text-transparent">
                Blog
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Insights, strategies, and tips to help you grow your YouTube channel and create content that converts.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 pb-20">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-3 rounded-full font-medium transition-all duration-300 bg-card/50 border border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} onReadMore={handleReadMore} />
          ))}
        </div>
      </main>

      {/* Modal */}
      <ArticleModal 
        post={selectedPost} 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
    </div>
  );
};

export default Blog;