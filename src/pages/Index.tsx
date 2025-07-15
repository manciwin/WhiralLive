
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import ThemeSwitcher from '../components/ThemeSwitcher';
import { ArrowRight, Users, Award, Sparkles, Target, Clock, Globe, CheckCircle, Shield } from 'lucide-react';
import Footer from '@/components/Footer';
import WhatsAppSection from '@/components/WhatsAppSection';
import Navbar from '@/components/Navbar';

// import Footer from '@/components/Footer';

const Index = () => {
  const { currentTheme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    
    setIsVisible(true);
  }, []);

  
  

  const features = [
    {
      icon: Users,
      title: 'Expert Judges',
      description: 'Get your work reviewed by top professionals from global tech leaders like Google, Amazon, Microsoft, and more. Gain insights that help you grow.',
    },
    {
      icon: Award,
      title: 'Fair Evaluation',
      //  World-class professionals from top tech companies    Comprehensive and unbiased assessment process - Emphasis on creativity and cutting-edge solutions  Competitions aligned with real-world challenges 
      description: 'Every competition on Whiral follows a transparent and unbiased scoring system, ensuring merit-based recognition and equal opportunity for all participants.',
    },
    {
      icon: Sparkles,
      title: 'Innovation Focus',
      description: 'Whiral competitions reward creativity, originality, and real problem-solving; encouraging participants to think beyond limits and present future-ready ideas.',
    },
    {
      icon: Target,
      title: 'Industry Relevance',
      description: 'Every challenge is designed to reflect real-world industry problems, helping you build practical skills and gain exposure to what employers truly value.',
    },
  ];
  

  const opportunities = [
    {
      icon: '🎓',
      title: 'Students & Schools',
      description: 'Academic competitions, science fairs, coding challenges, and innovation contests',
      examples: ['Science Olympiad', 'Programming Contests', 'Innovation Challenges', 'Academic Excellence']
    },
    {
      icon: '🏫',
      title: 'Colleges & Universities',
      description: 'Research competitions, hackathons, business plan contests, and thesis presentations',
      examples: ['Research Symposiums', 'Hackathons', 'Business Plans', 'Design Challenges']
    },
    {
      icon: '🏢',
      title: 'Industries & Corporates',
      description: 'Innovation challenges, startup pitches, product development, and efficiency contests',
      examples: ['Startup Pitches', 'Innovation Labs', 'Efficiency Contests', 'Product Development']
    },
    {
      icon: '🛍️',
      title: 'Small Businesses & Shops',
      description: 'Marketing competitions, customer service excellence, and business growth challenges',
      examples: ['Marketing Campaigns', 'Customer Service', 'Growth Strategies', 'Digital Transformation']
    },
    {
      icon: '👩',
      title: 'Women Empowerment',
      description: 'Leadership contests, entrepreneurship challenges, and skill development programs',
      examples: ['Leadership Awards', 'Entrepreneurship', 'Skill Development', 'Mentorship Programs']
    },
    {
      icon: '🌍',
      title: 'Community & NGOs',
      description: 'Social impact projects, community service awards, and sustainability challenges',
      examples: ['Social Impact', 'Community Service', 'Sustainability', 'Volunteer Recognition']
    }
  ];

  const sponsorBenefits = [
    {
      icon: '📈',
      title: 'Brand Visibility',
      description: 'Reach thousands of talented participants and industry professionals'
    },
    {
      icon: '🤝',
      title: 'Talent Pipeline',
      description: 'Connect with top performers and potential future employees'
    },
    {
      icon: '💡',
      title: 'Innovation Access',
      description: 'Get early access to cutting-edge ideas and solutions'
    },
    {
      icon: '🌟',
      title: 'Social Impact',
      description: 'Support education and innovation while building positive brand image'
    }
  ];

  const howItWorks = [
    {
      step: '01',
      title: 'Register for Competition',
      description: 'Browse available competitions and register for those that match your skills and interests.',
      icon: Globe
    },
    {
      step: '02',
      title: 'Submit Your Entry',
      description: 'Upload your project, solution, or presentation according to competition guidelines.',
      icon: CheckCircle
    },
    {
      step: '03',
      title: 'Expert Evaluation',
      description: 'Industry professionals evaluate your submission using standardized criteria.',
      icon: Shield
    },
    {
      step: '04',
      title: 'Results & Recognition',
      description: 'Receive detailed feedback, rankings, and awards from top industry experts.',
      icon: Award
    }
  ];

  const upcomingCompetitions = [
    {
      title: 'AI Innovation Challenge',
      category: 'Technology',
      prize: '$50,000',
      deadline: '30 May 2025',
      participants: '2,500+',
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Sustainable Solutions Contest',
      category: 'Environment',
      prize: '$25,000',
      deadline: '30 June 2025',
      participants: '1,800+',
      color: 'from-green-500 to-teal-600'
    },
    {
      title: 'Student Startup Pitch',
      category: 'Business',
      prize: '$75,000',
      deadline: '30 June 2025',
      participants: '3,200+',
      color: 'from-orange-500 to-red-600'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      title: 'Software Engineer at Google',
      quote: 'Whiral gave me the platform to showcase my AI project to industry experts. The feedback was invaluable!',
      avatar: '👩‍💻'
    },
    {
      name: 'Mike Rodriguez',
      title: 'Startup Founder',
      quote: 'Won my first competition on Whiral and got connected with investors. It changed my life!',
      avatar: '👨‍💼'
    },
    {
      name: 'Dr. Emily Watson',
      title: 'Research Scientist',
      quote: 'The quality of evaluation and expert feedback on Whiral is unmatched in the industry.',
      avatar: '👩‍🔬'
    }
  ];


  return (
    <div 
      className="min-h-screen transition-all duration-1000 relative overflow-hidden"
      style={{ 
        background: `linear-gradient(135deg, ${currentTheme.background} 0%, ${currentTheme.primary}10 50%, ${currentTheme.secondary}05 100%)`
      }}
    >
      <Navbar/>
      <ThemeSwitcher />

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <path
            d="M0,100 C200,50 800,175 1200,100 L1200,0 L0,0 Z"
            className="animate-float"
            style={{ fill: `${currentTheme.primary}15` }}
          />
          <path
            d="M0,100 C200,50 800,225 1200,300 L1200,0 L0,0 Z"
            className="animate-float"
            style={{ fill: `${currentTheme.primary}15` }}
          />
          <path
  d="M0,620 C300,500 700,700 1200,620 L1200,800 L0,800 Z"
  className="animate-float-delayed"
  style={{ fill: `${currentTheme.secondary}10` }}
/>
          {/* <path
            d="M0,600 C300,450 700,750 1200,600 L1200,800 L0,800 Z"
            className="animate-float-delayed"
            style={{ fill: `${currentTheme.secondary}10` }}
          /> */}
        </svg>

        {/* Floating Elements */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full opacity-10 ${i % 2 === 0 ? 'animate-float' : 'animate-float-delayed'}`}
            style={{
              backgroundColor: i % 3 === 0 ? currentTheme.primary : currentTheme.accent,
              width: `${Math.random() * 80 + 40}px`,
              height: `${Math.random() * 80 + 40}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <div className={`text-center py-20 px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Logo/Brand */}
          <div className="mb-8">
            <h1 
              className="text-6xl md:text-8xl font-bold mb-4 tracking-tight"
              style={{ color: currentTheme.foreground }}
            >
              <span 
                className="bg-gradient-to-r bg-clip-text text-transparent animate-pulse-glow"
                style={{ backgroundImage: `linear-gradient(135deg, ${currentTheme.primary}, ${currentTheme.accent})` }}
              >
                Whiral
              </span>
            </h1>
            <div 
              className="w-24 h-1 mx-auto rounded-full animate-pulse-glow"
              style={{ backgroundColor: currentTheme.primary }}
            />
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <h2 
              className="text-2xl md:text-4xl font-semibold mb-6 leading-tight"
              style={{ color: currentTheme.foreground }}
            >
              Where Innovation Meets
              <br />
              <span 
                className="bg-gradient-to-r bg-clip-text text-transparent"
                style={{ backgroundImage: `linear-gradient(135deg, ${currentTheme.primary}, ${currentTheme.secondary})` }}
              >
                Expert Evaluation
              </span>
            </h2>
            
            <p 
              className="text-lg md:text-xl leading-relaxed mb-8"
              style={{ color: `${currentTheme.foreground}dd` }}
            >
              Join competitions judged by industry leaders from Google, Amazon, Microsoft, and more. 
              Showcase your skills, get expert feedback, and win amazing prizes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/judges"
                className="group inline-flex items-center px-8 py-4 rounded-2xl font-semibold text-white text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                style={{ 
                  background: `linear-gradient(135deg, ${currentTheme.primary}, ${currentTheme.accent})` 
                }}
              >
                Meet Our Judges
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>

              <button 
                className="px-8 py-4 rounded-2xl font-semibold border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg backdrop-blur-sm"
                style={{ 
                  borderColor: currentTheme.primary,
                  color: currentTheme.primary,
                  backgroundColor: `${currentTheme.background}80`
                }}
              >
                View Competitions
              </button>
            </div>
          </div>
        </div>

        {/* How It Works Section */}
      <div className={`relative z-10 py-20 px-4 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ color: currentTheme.foreground }}
            >
              How It
              <span 
                className="bg-gradient-to-r bg-clip-text text-transparent ml-3"
                style={{ backgroundImage: `linear-gradient(135deg, ${currentTheme.primary}, ${currentTheme.accent})` }}
              >
                Works
              </span>
            </h2>
            <p 
              className="text-xl leading-relaxed max-w-3xl mx-auto"
              style={{ color: `${currentTheme.foreground}80` }}
            >
              Join thousands of innovators in our simple 4-step process
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <div
                key={index}
                className="text-center group transition-all duration-300 hover:scale-105"
              >
                <div className="relative mb-6">
                  <div 
                    className="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                    style={{ 
                      background: `linear-gradient(135deg, ${currentTheme.primary}, ${currentTheme.accent})` 
                    }}
                  >
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div 
                    className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white"
                    style={{ backgroundColor: currentTheme.secondary }}
                  >
                    {step.step}
                  </div>
                </div>
                <h3 
                  className="text-xl font-bold mb-3"
                  style={{ color: currentTheme.foreground }}
                >
                  {step.title}
                </h3>
                <p 
                  className="text-sm leading-relaxed"
                  style={{ color: `${currentTheme.foreground}80` }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Upcoming Competitions Section */}
      <div className={`relative z-10 py-20 px-4 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ color: currentTheme.foreground }}
            >
              Trending
              <span 
                className="bg-gradient-to-r bg-clip-text text-transparent ml-3"
                style={{ backgroundImage: `linear-gradient(135deg, ${currentTheme.primary}, ${currentTheme.accent})` }}
              >
                Competitions
              </span>
            </h2>
            <p 
              className="text-xl leading-relaxed max-w-3xl mx-auto"
              style={{ color: `${currentTheme.foreground}80` }}
            >
              Don't miss out on these exciting opportunities with amazing prizes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingCompetitions.map((competition, index) => (
              <div
                key={index}
                className="group p-8 rounded-3xl backdrop-blur-sm border transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
                style={{ 
                  backgroundColor: `${currentTheme.background}90`,
                  borderColor: `${currentTheme.primary}30`
                }}
              >
                <div className="mb-6">
                  <div 
                    className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-4"
                    style={{ 
                      backgroundColor: `${currentTheme.primary}20`,
                      color: currentTheme.primary 
                    }}
                  >
                    {competition.category}
                  </div>
                  <h3 
                    className="text-2xl font-bold mb-3 group-hover:scale-105 transition-transform duration-300"
                    style={{ color: currentTheme.foreground }}
                  >
                    {competition.title}
                  </h3>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span style={{ color: `${currentTheme.foreground}70` }}>Prize Pool:</span>
                    <span 
                      className="font-bold text-lg"
                      style={{ color: currentTheme.primary }}
                    >
                      {competition.prize}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span style={{ color: `${currentTheme.foreground}70` }}>Deadline:</span>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" style={{ color: currentTheme.accent }} />
                      <span style={{ color: currentTheme.foreground }}>{competition.deadline}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span style={{ color: `${currentTheme.foreground}70` }}>Participants:</span>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" style={{ color: currentTheme.accent }} />
                      <span style={{ color: currentTheme.foreground }}>{competition.participants}</span>
                    </div>
                  </div>
                </div>

                <button
                  className="w-full py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105"
                  style={{
                    background: `linear-gradient(135deg, ${currentTheme.primary}, ${currentTheme.accent})`
                  }}
                >
                  Join Competition
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

        {/* Features Section */}
        <div className={`max-w-6xl mx-auto px-4 py-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h3 
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: currentTheme.foreground }}
            >
              Why Choose Whiral?
            </h3>
            <p 
              className="text-lg"
              style={{ color: `${currentTheme.foreground}cc` }}
            >
              {/* Experience the difference of professional-grade competition evaluation. Whiral brings industry-relevant competitions, fair evaluations, and expert feedback — all designed to unlock your potential. */}
              Whiral is more than just a platform, it’s a launchpad for students, innovators, and future leaders. We bring you carefully curated competitions and challenges designed in collaboration with industry experts to ensure real-world relevance. Whether you're looking to showcase your talent, gain exposure, or take on meaningful problems, Whiral helps you unlock your full potential. Whether you're a student, a creator, or an early-career professional, Whiral opens the door to high-impact opportunities that drive your growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group text-center p-6 rounded-2xl backdrop-blur-sm border hover:scale-105 transition-all duration-300 hover:shadow-xl "
                style={{ 
                  backgroundColor: `${currentTheme.background}90`,
                  borderColor: `${currentTheme.primary}30`,
                  animationDelay: `${index * 0.2}s`
                }}
              >
                <div 
                  className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: `${currentTheme.primary}20` }}
                >
                  <feature.icon 
                    className="w-8 h-8"
                    style={{ color: currentTheme.primary }}
                  />
                </div>
                <h4 
                  className="text-xl font-bold mb-2"
                  style={{ color: currentTheme.foreground }}
                >
                  {feature.title}
                </h4>
                <p 
                  className="text-sm"
                  style={{ color: `${currentTheme.foreground}80` }}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Opportunities Section */}
      <div className={`relative z-10 py-20 px-4 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ color: currentTheme.foreground }}
            >
              Competitions & Challenges
              <br />
              <span 
                className="bg-gradient-to-r bg-clip-text text-transparent"
                style={{ backgroundImage: `linear-gradient(135deg, ${currentTheme.primary}, ${currentTheme.accent})` }}
              >
                For Everyone
              </span>
            </h2>
            <p 
              className="text-xl leading-relaxed max-w-4xl mx-auto"
              style={{ color: `${currentTheme.foreground}80` }}
            >
              We create innovative competitions and challenges across every field, opening doors of hope and opportunity for people from all walks of life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {opportunities.map((opportunity, index) => (
              <div
                key={index}
                className="group p-8 rounded-3xl backdrop-blur-sm border transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                style={{ 
                  backgroundColor: `${currentTheme.background}90`,
                  borderColor: `${currentTheme.primary}30`,
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {opportunity.icon}
                </div>
                <h3 
                  className="text-2xl font-bold mb-4"
                  style={{ color: currentTheme.foreground }}
                >
                  {opportunity.title}
                </h3>
                <p 
                  className="text-base mb-6 leading-relaxed"
                  style={{ color: `${currentTheme.foreground}80` }}
                >
                  {opportunity.description}
                </p>
                <div className="space-y-2">
                  {opportunity.examples.map((example, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <div 
                        className="w-2 h-2 rounded-full mr-3"
                        style={{ backgroundColor: currentTheme.primary }}
                      />
                      <span style={{ color: `${currentTheme.foreground}70` }}>
                        {example}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


<WhatsAppSection/>
        {/* CTA Section */}
        <div className={`text-center py-20 px-4 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div 
            className="max-w-3xl mx-auto p-8 rounded-3xl backdrop-blur-sm border shadow-2xl"
            style={{ 
              backgroundColor: `${currentTheme.background}95`,
              borderColor: `${currentTheme.primary}30`
            }}
          >
            <h3 
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: currentTheme.foreground }}
            >
              Ready to Get Started?
            </h3>
            <p 
              className="text-lg mb-8"
              style={{ color: `${currentTheme.foreground}80` }}
            >
              Join thousands of innovators who trust Whiral for fair, expert competition evaluation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/judges"
                className="inline-flex items-center justify-center px-8 py-4 rounded-2xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{ 
                  background: `linear-gradient(135deg, ${currentTheme.primary}, ${currentTheme.accent})` 
                }}
              >
                Explore Judge Panel
              </Link>
              <button 
                className="px-8 py-4 rounded-2xl font-semibold border-2 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                style={{ 
                  borderColor: currentTheme.primary,
                  color: currentTheme.primary,
                  backgroundColor: `${currentTheme.background}80`
                }}
              >
                Start Competition
              </button>
            </div>
          </div>
        </div>
        {/* <WhiralOpportunities/> */}
          <Footer/>
      </div>
      
    </div>
  );
};

export default Index;
